import { useState } from "react";

const NewTodo = (props) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleTextChangeHandler = (e) => {
    //console.log(e.target.value);
    setTitle(e.target.value);
  }
  const contentChangeHandler = (e) => {
    //console.log(e.target.value);
    setContent(e.target.value);
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    //console.log(title, content);
    props.onTodoAdded({
      title: title,
      content: content
    })
  }

  return(
    <>
      <form onSubmit={formSubmitHandler}>
        <div className="newTodo">
          <h3>새로운 할일 추가</h3>
          <div>
            <input id="title" type="text" onChange={titleTextChangeHandler} placeholder="제목을 입력하세요"/>
          </div>
          <div>
            <input id="content" type="text" onChange={contentChangeHandler} placeholder="내용을 입력하세요"/>
          </div>
          <div>
            <input type='submit' value='할일 추가하기'></input>
          </div>
        </div>
         
      </form>
    </>
  )
}

export default NewTodo;