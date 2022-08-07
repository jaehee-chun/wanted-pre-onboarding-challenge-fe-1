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
        <div>
          제목 : <input type="text" onChange={titleTextChangeHandler}/>
        </div>
        <div>
          내용 : <input type="text" onChange={contentChangeHandler}/>
        </div>
        <div>
          <input type='submit' value='할일 추가하기'></input>
        </div>
      </form>
    </>
  )
}

export default NewTodo;