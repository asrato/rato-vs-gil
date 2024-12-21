import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #000000;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;

    &::after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border-left: 4px solid #4f4f4f;
        border-bottom: 4px solid transparent;
        animation: ${rotation} 0.5s linear infinite reverse;
    }
`;