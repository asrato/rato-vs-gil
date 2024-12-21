import styled from "styled-components";

export const StyledList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Match = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 12px 0;

    &:not(:last-child) {
        border-bottom: solid 1px #ffffff08;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
`;

export const Score = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

export const Player = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const AvatarWrapper = styled.div<{ color: string }>`
    width: 32px;
    height: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    z-index: 1;
`;

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

export const Date = styled.span`
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: #FFFFFF90;
`;

export const Result = styled.span<{ color: string, isLeft?: boolean }>`
    background-color: ${({ color }) => color};
    font-size: 14px;
    font-weight: 600;
    ${({ isLeft }) => {
        if (isLeft)
            return `
                margin-left: -12px;
                padding: 2px 6px 2px 16px;
                border-radius: 0 4px 4px 0;
            `;
        return `
            margin-right: -12px;
            padding: 2px 16px 2px 6px;
            border-radius: 4px 0 0 4px;
        `;
    }}
`;

export const Summary = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

export const SummaryItem = styled.span<{ color: string }>`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
`;