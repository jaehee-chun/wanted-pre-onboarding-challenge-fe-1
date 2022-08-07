import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import useAsync from "../hooks/useAsync";

const List = (props) => {

  let token = localStorage.getItem('authorization');
  const fetchTodosFromFakeServer = async () => {
    let res = [];
    await axios.get('http://localhost:8080/todos', {
      headers: {
        authorization: token
      }
    }).then(function(response){
      console.log(response);
      if(response.status == 200){
        res = response.data
      }

    }).catch(function (error) {
      console.log(error);
    });

    return res.data; 
    
  };

  const [state] = useAsync(fetchTodosFromFakeServer);

  const appendNewTodoHandler = async (e) => {
    //console.log(e);   //할일 데이터 받았어요...
    let todoToAppend = {
      title: e.title,
      content: e.content
    }

    //할일 추가
    await axios.post('http://localhost:8080/todos', todoToAppend, {
      headers: {
        authorization: token
      }
    }).then(function(response){
      console.log(response);

    }).catch(function (error) {
      console.log(error);
    });

    
  }

  const logout = () => {
    localStorage.clear();

    document.location.href = '/auth';
  }

  
  const {loading, error, data: todos} = state;

  if(loading) return <div>loading중 ....</div>;
  if(error) return <div>error ....</div>;
  if(!todos) return <h1>데이터 없음</h1>;

  return (
    <>
      <h1>todo list</h1>
      <NewTodo onTodoAdded={appendNewTodoHandler}/>
      <TodoList todos={todos}/>
      <button onClick={logout}>로그아웃</button>
    </>
  );
}

export default List;