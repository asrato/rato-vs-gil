import CustomCard from "../../../../shared/CustomCard";
import { formatDate, ScoreI } from "../../utils";
import { Avatar, AvatarWrapper, Date, Info, Match, Player, Result, Score, StyledList, Summary, SummaryItem } from "./styles";

interface MatchHistoryI {
    data: ScoreI[];
}

export default function MatchHistory(props: MatchHistoryI) {
    const { data } = props;
    
    return <CustomCard title="Match History">
        <StyledList>
            {data.map((match, index) => <Match key={index}>
                <Info>
                    <Date>{formatDate(match.date)}</Date>
                    <Score>
                        <Player>
                            <AvatarWrapper color="#ff4c4c">
                                <Avatar src="/rato-vs-gil/assets/rato.png" />
                            </AvatarWrapper>
                            <Result isLeft color="#ff4c4c8f">{match.rato}</Result>
                        </Player>
                        <Player>
                            <Result color="#6d4cff8f">{match.gil}</Result>
                            <AvatarWrapper color="#6d4cff">
                                <Avatar src="/rato-vs-gil/assets/gil.png" />
                            </AvatarWrapper>
                        </Player>
                    </Score>
                </Info>
                <Summary>
                    {match.summary.map((item, index) => <SummaryItem key={index} color={item === 'rato' ? '#ff4c4c' : '#6d4cff'} />)}
                </Summary>
            </Match>)}
        </StyledList>
    </CustomCard>;
}