

const TodoList = (props) => {

  

  return(
      <div className="todoList">
        <h3>할일 목록</h3>
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
      </div>
  )
}

export default TodoList;