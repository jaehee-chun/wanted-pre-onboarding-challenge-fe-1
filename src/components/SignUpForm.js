import axios from "axios";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/SignUp.css';

const SignUpForm = () => {

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
    const res = await axios.post('http://localhost:8080/users/create', {
      ...account
      
    }).then(function (response) {
      console.log(response);
      if(response.status == 200){
        alert("회원가입 완료");
        document.location.href="/auth";
      }

    }).catch(function (error) {
      console.log(error);
    });
    
    return res;
  }

  return (
    <>
      <div className="SignUpForm">
        <h2>회원가입 페이지</h2>
        <input onChange={onChangeAccount} name="email" id="email" placeholder="이메일을 입력해주세요" />
        <input onChange={onChangeAccount} name="password" id="password" placeholder="비밀번호를 입력해주세요" />
        <button onClick={onSubmitAccount}>회원가입</button>
        <Link to="/auth">뒤로가기</Link>
      </div>
      
    </>
  );
}

export default SignUpForm;