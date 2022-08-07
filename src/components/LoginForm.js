import axios from "axios";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/LoginForm.css';

const LoginForm = () => {

  const [account, setAccount] = useState({
    id : "",
    password: "",
  })

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    })

    //console.log(account);
  }
  const onSubmitAccount = async () => {
    const res = await axios.post('http://localhost:8080/users/login', {
      ...account
    }).then(function (response) {
      //console.log(response);

      if(response.status === 200){
        localStorage.setItem('authorization', response.data.token);
      }

      document.location.href = '/auth';

    }).catch(function (error) {
      console.log(error);
    });
    
    return res;
  }

  return (
    <>
      <div className="loginForm">
        <h2>로그인 페이지</h2>
        <input onChange={onChangeAccount} name="email" id="email" placeholder="이메일을 입력해주세요" />
        <input onChange={onChangeAccount} name="password" id="password" placeholder="비밀번호를 입력해주세요" />
        <button onClick={onSubmitAccount}>로그인</button>
        <Link to="/signup">회원가입</Link>
      </div>
      
    </>
  );
}

export default LoginForm;