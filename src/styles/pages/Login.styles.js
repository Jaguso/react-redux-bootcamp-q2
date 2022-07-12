import styled from 'styled-components';

export const Main = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Inside = styled.div`
  width 650px;
  height: 450px;
  background-color: rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`

`


export const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  align-self: flex-start;
  margin-left: 70px;
  margin-top: 30px;
  margin-bottom: 5px;s
`

export const Input = styled.input`
  width: 500px;
  height: 40px;
  font-size: 15px;
  padding-left: 10px;
`

export const Button = styled.button`
  height: 50px;
  width: 518px;
  margin-top: 30px;
  cursor: pointer;
  background-color: rgb(32, 52, 73);
  color: #ffffff;
`