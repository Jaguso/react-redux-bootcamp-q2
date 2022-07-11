import React, { useState } from 'react';
import { Main, Title, Inside, Label, Input, Button } from '../styles/pages/Login.styles';
import loginApi from '../utils/loginApi';
import { useHistory } from "react-router-dom";


export const Login = (props) => {
  let history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    loginApi(username, password).then(res => {
      if (res.id === '123') {
        // localStorage.setItem('userId', res.id)
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

  )
}
