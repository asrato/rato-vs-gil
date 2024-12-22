import { PlayersI } from "../../../../api/models";
import CustomCard from "../../../../shared/CustomCard";
import { Avatar, AvatarWrapper, InfoWrapper, Name, Player, Score, StyledWrapper } from "./styles";

interface TotalScoreProps {
    data: PlayersI;
}

export default function TotalScore(props: TotalScoreProps) {
    const { data } = props;
    const { gil, rato } = data;

    return <CustomCard title="Total Score" size="small">
        <StyledWrapper>
            <Player>
                <AvatarWrapper player="rato">
                    <Avatar src="/rato-vs-gil/assets/rato.png" />
                </AvatarWrapper>
                <Name>Rato</Name>
            </Player>
            <InfoWrapper>
                <Score>{rato} - {gil}</Score>
            </InfoWrapper>
            <Player>
                <AvatarWrapper player="gil">
                    <Avatar src="/rato-vs-gil/assets/gil.png" />
                </AvatarWrapper>
                <Name>Gil</Name>
            </Player>
        </StyledWrapper>
    </CustomCard>
}