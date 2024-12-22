import styled from "styled-components";

export const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    justify-content: center;
    padding-top: 12px;
`;

export const Player = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const AvatarWrapper = styled.div<{ player: string }>`
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: ${({ player, theme }) => theme.players[player].primary };
    border-radius: 50%;
`;

export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 0 0 60px 60px;
`;

export const Name = styled.span`
    font-size: 12px;
    font-weight: 500;
    text-align: center;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
`;

export const Score = styled.span`
    font-size: 24px;
    font-weight: 600;
    background-color: ${({ theme }) => theme.lastMatch.score.background};
    padding: 2px 8px;
    border-radius: 4px;
    width: fit-content;
`;