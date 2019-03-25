import styled, { keyframes } from "styled-components";
import { GitImg } from '../images/background.jpg';

const fade = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: .2;
  }
`;
export const Git = styled.a`

  & img {

    position: absolute;
    z-index: 100;
    bottom: 0px;
    right: 0px;
    width: 100px;
    height: 100px;
    background-image: url(${GitImg});
    animation: ${fade} .6s  alternate infinite;
    cursor: pointer;
    

    & + div.wrapperGit {
        background-color: #e6e6e6;
        border: .8px solid rgba(95, 95, 95, .3);
        box-shadow: -1px 9px 8px -8px;
        font-family: 'Ubuntu', sans-serif;
        position: absolute;
        right: 98px;
        bottom: 14px;
        border-radius: 10px;
        width: 300px;
        font-size: 10px;
        padding: 10px 20px;

        & .triangulo {
            position: relative;
            & div{
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 10px 0 10px 20px;
                border-color: transparent transparent transparent #e6e6e6;
                right: -33px;
                top: -34px;
                position: absolute;
            }
        }
    }
    }

    &:hover + div{
        display: block;
    }
`;

export const Tooltip = styled.div`
    background-color: #e6e6e6;
    border: .8px solid rgba(95, 95, 95, .3);
    box-shadow: -1px 9px 8px -8px;
    font-family: 'Ubuntu', sans-serif;
    position: absolute;
    right: 98px;
    bottom: 14px;
    border-radius: 10px;
    width: 300px;
    padding: 10px 20px;
    display: none;
    color: #707070;
    text-align: center;

    & .triangulo {
        position: relative;
        & div{
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 10px 0 10px 20px;
            border-color: transparent transparent transparent #e6e6e6;
            right: -33px;
            top: -34px;
            position: absolute;
        }
    }
`;
