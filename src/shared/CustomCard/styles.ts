import styled from "styled-components";
import { mediaQueries } from "../../globalStyles";

export const StyledWrapper = styled.div<{ size: string }>`
    padding: 16px 24px;
    border-radius: 6px;
    background-color: #00000030;
    box-shadow: 0 0 0 2px #ffffff03;
    display: flex;
    flex-direction: column;
    gap: 16px;
    grid-column: 4 span;

    ${mediaQueries.tablet} {
        grid-column: ${({ size }) => {
            if (size === 'small') return 4;
            if (size === 'large') return 12;
            return 8;
        }} span;
        grid-row: ${({ size }) => {
            if (size === 'small') return 1;
            if (size === 'large') return 3;
            return 2;
        }} span;
    }
`;

export const Title = styled.span`
    width: 100%;
    font-size: 16px;
    font-weight: 600;
`;