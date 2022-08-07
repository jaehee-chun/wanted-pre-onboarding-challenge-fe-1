import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import App from './App';
import SignUpForm from './components/SignUpForm';
import List from './components/List';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <BrowserRouter>
    <div>
      
      <Routes>
        <Route path='auth' element={<App />} />
        <Route path='signup' element={<SignUpForm />} />
        <Route path='List' element={<List />} />
      </Routes>
    </div>
  </BrowserRouter>
);


