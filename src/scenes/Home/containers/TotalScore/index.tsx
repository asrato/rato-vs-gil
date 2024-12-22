import CustomCard from "../../../../shared/CustomCard";
import { TotalI } from "../../utils";
import { Avatar, AvatarWrapper, InfoWrapper, Name, Player, Score, StyledWrapper } from "./styles";

interface TotalScoreI {
    data: TotalI
}

export default function TotalScore(props: TotalScoreI) {
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