import styled from "styled-components";

export const StyledMain = styled.main`
    width: 100dvw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.mainLayout.background};
    color: ${({ theme }) => theme.mainLayout.color};
    `;

export const StyledContent = styled.section`
    width: 100%;
    overflow-y: auto;
    height: 100%;
    max-width: 1200px;
    padding: 24px;
`;