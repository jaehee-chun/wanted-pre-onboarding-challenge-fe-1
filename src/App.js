import './css/App.css';
import LoginForm from './components/LoginForm';
import List from './components/List';
import { useEffect, useState } from "react";



const App = () => {
  //로그인 상태 관리
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('authorization') === null){
      console.log('isLogin ?? : ', isLogin)
    }else{
      setLogin(true)
      console.log('isLogin ?? : ', isLogin)
    }
  })

  return (
    <>      
      {isLogin ? 
      <List/> :
      <LoginForm/> }
      
    </>
  );
}

export default App;
