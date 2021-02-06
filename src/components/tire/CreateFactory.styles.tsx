import styled from 'styled-components'

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;

  .email_section_label {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.teal};
  }
`
export const InputContainer = styled.div`
  width: 100%;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`
export const Input = styled.input`
  width: 100%;
  height: 4rem;
  border: 0.5px solid ${(props) => props.theme.colors.teal};
  border-radius: ${(props) => props.theme.radius};
  margin: 0.2rem 0;
  padding: 1rem;
  font-size: 1.4rem;
  outline: none;
  box-shadow: 2px 2px 4px ${(props) => props.theme.colors.lightGrey};
`

export const StyledError = styled.p`
  margin: 0;
  padding: 0;
  color: red;
  font-size: 1.3rem;
`
export const Button = styled.button`
  width: 100%;
  height: 4rem;
  background: ${(props) => props.theme.backgroundColors.main};
  color: white;
  font-size: 1.8rem;
  margin-top: 2rem;

  &:hover {
    background: ${(props) => props.theme.colors.darkTeal};
  }
`
export const FormContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2.5rem 0;
`
