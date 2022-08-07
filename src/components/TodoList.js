

const TodoList = (props) => {

  

  return(
      <>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>내용</th>
            </tr>
            
          </thead>
          <tbody>
          {props.todos.map((todo, idx) =>
            <tr key={todo.id}>
              <td>{idx+1}</td>
              <td>{todo.title}</td>
              <td>{todo.content}</td>
            </tr>
          )}
          </tbody>
        </table>
      </>
  )
}

export default TodoList;