import styled from 'styled-components';

export const Header = styled.header`
  background-color: #357d4a;
  height: 80px;
  display:flex;
  align-items: center;
  box-shadow: 0px 0px 6px black;
  padding-left: 50px;
  
`;

export const LogoText = styled.span`
  color: white;
  font-size: ${props => `${props.fontSize}rem`};
  font-family: 'Ubuntu', sans-serif;
  margin-left: 20px;
`