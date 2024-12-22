import styled from "styled-components";
import { mediaQueries } from "../../globalStyles";

export const StyledContent = styled.div`
    width: 100%;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);
    
    ${mediaQueries.tablet} {
        grid-template-columns: repeat(12, 1fr);
    }
`;

export const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;