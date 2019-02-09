import styled from 'styled-components';

export const Header = styled.header`
  background-color: #4a4a4a;
  height: 80px;
  display:flex;
  align-items: center;
  box-shadow: 0px 0px 6px black;
`;

export const Logo = styled.span`
  color: white;
  font-size: ${props => `${props.fontSize}rem`}
`