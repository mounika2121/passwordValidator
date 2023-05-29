// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
`
export const Card = styled.div`
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 40vh;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 40vh;
  }
`
export const Heading = styled.h1`
  font-size: 35px;
  color: white;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
`
export const Para = styled.p`
  color: white;
  font-size: 12px;
`
export const Input = styled.input`
  height: 35px;
  width: 250px;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    height: 35px;
    width: 250px;
  }
`
export const Error = styled.p`
  color: #ef4444;
  font-size: 12px;
`
