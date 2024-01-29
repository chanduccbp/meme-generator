// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Open Sans';
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 80%;
  min-height: 70vh;
  padding: 10px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const MemeContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px;
  min-height: 60vh;
  width: 48%;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 48%;
    order: 0;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  min-height: 60vh;
  width: 48%;
  font-family: 'Open Sans';
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 48%;
    order: 1;
  }
`
export const InputText = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
  font-weight: bold;
  font-family: 'Open Sans';
`
export const SubmitButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  border-style: none;
  border-radius: 5px;
  height: 35px;
  padding: 5px;
  outline: none;
  align-self: flex-start;
`
export const LabelElement = styled.label`
  color: #7e858e;
`
export const InputElement = styled.input`
  border: 1px solid #d7dfe9;
  color: #5a7184;
  padding: 5px;
  height: 35px;
`
export const SelectElement = styled.select`
  border: 1px solid #d7dfe9;
  color: #1e293b;
  height: 35px;
`
export const MainHeading = styled.h1`
  color: #35469c;
  font-weight: bold;
  width: 80%;
  padding: 10px;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`
