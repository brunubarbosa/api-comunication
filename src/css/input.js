import styled from 'styled-components';

export const Input = styled.input.attrs((props) => ({
    type: props.Type ? props.Type : 'text',
    id: props.Name_For,
    placeholder: props.Placeholder
  }))`
    border: none;
    background-color: transparent;
    outline: none;
    border-bottom: 1px solid black;
  `;

  export const Form_Group = styled.div`
    & label {
        color: red;
        margin-bottom: 4px;
    }
  `;

export const Label = styled.label.attrs((props) => ({
  for: props.Name_For
}))`
    display: block;
`;

export const Submit = styled.button.attrs((props) => ({
  type: 'submit'
}))`
  background-color: red;
`

export const BtnPeriod = styled.button`
  background-color: #357d4a;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  color: white;
  font-family: 'Ubuntu',sans-serif;
`