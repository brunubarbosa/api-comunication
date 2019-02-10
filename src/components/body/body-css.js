import styled from 'styled-components';
import backgroundImage from '../../images/background.jpg'

export const Body = styled.div`
    background-color: green;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const BoxCenter = styled.div`
    width: 930px;
    height: 400px;
    background-color: blue;
    display: flex;
`;

export const LeftPart = styled.div`
    width: 30%;
    background-image: url(${backgroundImage});
    background-size: 100% 100%;
    background-position: 0px;
`

export const RightPart = styled.div`
    width: 70%;
`