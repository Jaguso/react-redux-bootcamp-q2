import styled from 'styled-components';

export const Main = styled.div`
  // height: 100vh;
  display: flex;
  padding: 40px 15%;
`

export const LeftContainer = styled.div`
  width: 80%;
  height: 100%;
  min-width: 400px;
`

export const RightContainer = styled.div`
  width: 20%;
  height: 90vh;
  min-width: 100px;
`

export const Tags = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
`

export const EmptyTag = styled.div`
  width: 20%;
  height: 100%;
`

export const DetailTag = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GenericTag = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 15px;
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
`

export const Summary = styled.div`
  margin-top: 50px;
  margin-left: 10%;
  padding-bottom: 30px;
  width: 80%;
  background-color: rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CostText = styled.p`
  line-height: 2;
`

export const CheckoutBtn = styled.button`
  height: 50px;
  width: 70%;
  cursor: pointer;
  background-color: rgb(32, 52, 73);
  color: #ffffff;
`