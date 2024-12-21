import styled from "styled-components";

export const StyledContent = styled.div`
    width: 100%;
    padding: 24px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-columns: 1fr;
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
    position: relative;
`;

export const LastMatchDate = styled.span`
    position: absolute;
    width: fit-content;
    white-space: nowrap;
    bottom: -36px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #0000001F;
    padding: 2px 12px;
    border-radius: 20px;
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

export const ListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    ${AvatarGil}, ${AvatarRato} {
        width: 48px;
        height: 48px;
        background-color: transparent;
    }
`;

export const ItemWrapper = styled.div<{color: string}>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    border-radius: 48px;
    background-color: ${({ color }) => color};
    `;

export const Match = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    position: relative;
`;


export const ItemScore = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;
    font-size: 18px;
    font-weight: 500;
    margin-top: -10px;
    margin-bottom: 2px;
`;

export const Date = styled.span`
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
`;