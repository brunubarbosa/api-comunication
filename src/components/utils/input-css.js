import styled from 'styled-components';


export const Input = styled.input.attrs((props) => ({
    type: props.Type,
    id: props.Name
  }))`
    border: none;
    background-color: #8a97f2;
  `;

  export const Form_Group = styled.div`
    & label {
        color: red;
        margin-bottom: 4px;
    }
  `;

export const Label = styled.label.attrs((props) => ({
  for: props.For
}))`
    display: block;
`;