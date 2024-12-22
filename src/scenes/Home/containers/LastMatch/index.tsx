import CustomCard from "../../../../shared/CustomCard";
import { formatDate, ScoreI } from "../../utils";
import { Avatar, AvatarWrapper, Date, InfoWrapper, Name, Player, Score, StyledWrapper } from "./styles";

interface LastMatchI {
    data: ScoreI;
}

export default function LastMatch(props: LastMatchI) {
    const { data } = props;
    const { date, gil, rato } = data;

    return <CustomCard title="Last Match" size="small">
        <StyledWrapper>
            <Player>
                <AvatarWrapper color="#ff4c4c">
                    <Avatar src="/rato-vs-gil/assets/rato.png" />
                </AvatarWrapper>
                <Name>Rato</Name>
            </Player>
            <InfoWrapper>
                <Score>{rato} - {gil}</Score>
                <Date>{formatDate(date)}</Date>
            </InfoWrapper>
            <Player>
                <AvatarWrapper color="#6d4cff">
                    <Avatar src="/rato-vs-gil/assets/gil.png" />
                </AvatarWrapper>
                <Name>Gil</Name>
            </Player>
        </StyledWrapper>
    </CustomCard>
}