import React, { useState, useEffect } from 'react';
import loginApi from '../utils/loginApi';
import { useHistory } from "react-router-dom";
import { Main, Title, Inside, Label, Input, Button } from '../styles/pages/Login.styles';


export const Login = () => {
  let history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    localStorage.clear();
  }, [])

  const handleLogin = () => {
    loginApi(username, password).then(res => {
      if (res.id === '123') {
        localStorage.setItem('userId', res.id)
        history.push('/products')
      }
    })
  }

  return (
    <Main>
      <Inside>
        <Title>Welcome to the WizeStore!</Title>
        <Label>Username</Label>
        <Input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
        <Label>Password</Label>
        <Input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
        <Button onClick={handleLogin}>Login</Button>
      </Inside>
    </Main>
  );
}
