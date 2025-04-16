import { MatchI } from "../../../../api/models";
import CustomCard from "../../../../shared/CustomCard";
import { formatDate } from "../../utils";
import { Avatar, AvatarWrapper, Date, Info, Match, Player, Result, Score, StyledList, Summary, SummaryItem } from "./styles";

interface MatchHistoryProps {
    data: MatchI[];
}

export default function MatchHistory(props: MatchHistoryProps) {
    const { data } = props;
    
    return <CustomCard title="Match History" size="large">
        <StyledList>
            {data.map((match, index) => <Match key={index}>
                <Info>
                    <Date>{formatDate(match.date)}</Date>
                    <Score>
                        <Player>
                            <AvatarWrapper player="rato">
                                <Avatar src="/rato-vs-gil/assets/rato.png" />
                            </AvatarWrapper>
                            <Result left player="rato">{match.rato}</Result>
                        </Player>
                        <Player>
                            <Result player="gil">{match.gil}</Result>
                            <AvatarWrapper player="gil">
                                <Avatar src="/rato-vs-gil/assets/gil.png" />
                            </AvatarWrapper>
                        </Player>
                    </Score>
                </Info>
                <Summary>
                    {match.summary.map((item, index) => <SummaryItem key={index} player={item} />)}
                </Summary>
            </Match>)}
        </StyledList>
    </CustomCard>;
}