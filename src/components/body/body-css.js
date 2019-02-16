import styled from 'styled-components';
import backgroundImage from '../../images/background.jpg'

export const Body = styled.div`
    background-color: #39fb74;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const BoxCenter = styled.div`
    width: 930px;
    height: 400px;
    background-color: #a4ee80;
    display: flex;
    border-top-right-radius : 50px;
    border-bottom-left-radius: 50px;
    box-shadow: 0px 1px 37px #2e2e2e;
`;

export const LeftPart = styled.div`
    width: 30%;
    background-image: url(${backgroundImage});
    background-size: 100% 100%;
    background-position: 0px;
    border-bottom-left-radius: 50px;
    
`

export const RightPart = styled.div`
    width: 70%;
    padding: 20px 50px;
`

export const TitleForm = styled.span`
  color: #3f3f3f;
  font-weight: 700;
  font-size: ${props => `${props.fontSize}rem`};
  font-family: 'Ubuntu', sans-serif;
`