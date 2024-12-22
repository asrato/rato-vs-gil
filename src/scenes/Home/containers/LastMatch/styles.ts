import styled from "styled-components";

export const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
`;

export const Player = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const AvatarWrapper = styled.div<{ color: string }>`
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: ${({ color }) => color};
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
    background-color: #FFFFFF20;
    padding: 2px 8px;
    border-radius: 4px;
    width: fit-content;
`;

export const Date = styled.span`
    text-align: center;
    font-size: 10px;
    font-weight: 500;
    color: #FFFFFF60
`;