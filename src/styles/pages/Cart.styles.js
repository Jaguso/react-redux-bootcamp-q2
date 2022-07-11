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
  height: 100%;
  min-width: 100px;
  border: gray 1px solid;
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