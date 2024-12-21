import styled from "styled-components";

export const StyledContent = styled.div`
    width: 100%;
    padding: 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`;

export const StyledCard = styled.div<{ size?: number }>`
    width: 100%;
    padding: 32px 24px;
    border-radius: 16px;
    background-color: #FFFFFF;
    grid-column: ${({ size }) => size || 1} span;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

export const CardTitle = styled.span`
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

export const LastMatch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px;
`;

export const AvatarRato = styled.div`
    width: 80px;
    height: 80px;
    background-color: #efefef;
    background-image: url('/rato-vs-gil/assets/rato.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
`;

export const AvatarGil = styled.div`
    width: 80px;
    height: 80px;
    background-color: #efefef;
    background-image: url('/rato-vs-gil/assets/gil.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
`;

export const Player = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
`;

export const Name = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #000000;
`;

export const Score = styled.span`
    font-size: 24px;
    font-weight: 500;
    color: #000000;
`;

export const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;