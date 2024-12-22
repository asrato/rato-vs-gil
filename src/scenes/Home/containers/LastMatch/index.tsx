import { MatchI } from "../../../../api/models";
import CustomCard from "../../../../shared/CustomCard";
import { formatDate } from "../../utils";
import { Avatar, AvatarWrapper, Date, InfoWrapper, Name, Player, Score, StyledWrapper } from "./styles";

interface LastMatchProps {
    data: MatchI;
}

export default function LastMatch(props: LastMatchProps) {
    const { data } = props;
    const { date, gil, rato } = data;

    return <CustomCard title="Last Match" size="small">
        <StyledWrapper>
            <Player>
                <AvatarWrapper player="rato">
                    <Avatar src="/rato-vs-gil/assets/rato.png" />
                </AvatarWrapper>
                <Name>Rato</Name>
            </Player>
            <InfoWrapper>
                <Score>{rato} - {gil}</Score>
                <Date>{formatDate(date)}</Date>
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