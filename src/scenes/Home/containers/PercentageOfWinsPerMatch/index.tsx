import { PlayersI } from "../../../../api/models";
import CustomCard from "../../../../shared/CustomCard";
import { Avatar, AvatarWrapper, InfoWrapper, Name, Player, Score, StyledWrapper } from "./styles";

interface PercentageOfWinsPerMatchProps {
    data: PlayersI;
}

export default function PercentageOfWinsPerMatch(props: PercentageOfWinsPerMatchProps) {
    const { data } = props;
    const { gil, rato } = data;

    return <CustomCard size="small" title="Percentage of Wins per Match">
        <StyledWrapper>
            <Player>
                <AvatarWrapper player="rato">
                    <Avatar src="/rato-vs-gil/assets/rato.png" />
                </AvatarWrapper>
                <Name>Rato</Name>
            </Player>
            <InfoWrapper>
                <Score player="rato">{rato}%</Score>
                <Score player="gil">{gil}%</Score>
            </InfoWrapper>
            <Player>
                <AvatarWrapper player="gil">
                    <Avatar src="/rato-vs-gil/assets/gil.png" />
                </AvatarWrapper>
                <Name>Gil</Name>
            </Player>
        </StyledWrapper>
    </CustomCard>;
}