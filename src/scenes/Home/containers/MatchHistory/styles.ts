import styled from "styled-components";
import { mediaQueries } from "../../../../globalStyles";

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
    gap: 24px;
    padding: 12px 0;

    &:not(:last-child) {
        border-bottom: solid 1px ${({ theme }) => theme.matchHistory.border};
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-direction: column;
    
    ${mediaQueries.tablet} {
        flex-direction: row;
        gap: 32px;
    }
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

export const AvatarWrapper = styled.div<{ player: string }>`
    width: 32px;
    height: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: ${({ player, theme }) => theme.players[player].primary};
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
    color: ${({ theme }) => theme.matchHistory.date.color};
`;

export const Result = styled.span<{ player: string, left?: boolean }>`
    background-color: ${({ player, theme }) => theme.players[player].secondary};
    font-size: 14px;
    font-weight: 600;
    ${({ left }) => {
        if (left)
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
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    justify-content: flex-end;
`;

export const SummaryItem = styled.span<{ player: string }>`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ player, theme }) => theme.players[player].primary};
`;