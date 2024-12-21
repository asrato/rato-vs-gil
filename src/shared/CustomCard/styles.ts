import styled from "styled-components";

export const StyledWrapper = styled.div<{ span: number }>`
    grid-column: ${({ span }) => span} span;
    padding: 16px 24px;
    border-radius: 6px;
    background-color: #00000030;
    box-shadow: 0 0 0 2px #ffffff03;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Title = styled.span`
    width: 100%;
    font-size: 16px;
    font-weight: 600;
`;