import CustomLoading from "../../shared/CustomLoading";
import useHome from "./hooks";
import { AvatarGil, AvatarRato, CardTitle, Date, ItemScore, ItemWrapper, LastMatch, LastMatchDate, ListWrapper, LoadingWrapper, Match, Name, Player, Score, StyledCard, StyledContent } from "./styles";
import { formatDate, getWinnerColor } from "./utils";

export default function Home() {
    const { lastMatch, matchHistory, state } = useHome();

    return (
        <>
            {state === 'loading' && <LoadingWrapper>
                <CustomLoading />
            </LoadingWrapper>}
            {state === 'idle' && <StyledContent>
                <StyledCard extraPadding size={2}>
                    <CardTitle>
                        Last Match
                    </CardTitle>
                    {lastMatch && <LastMatch>
                        <Player>
                            <AvatarRato />
                            <Name>Rato</Name>
                            <Score>{lastMatch.rato}</Score>
                        </Player>
                        
                        <Player>
                            <AvatarGil />
                            <Name>Gil</Name>
                            <Score>{lastMatch.gil}</Score>
                        </Player>
                        <LastMatchDate>{formatDate(lastMatch.date)}</LastMatchDate>
                    </LastMatch>}
                </StyledCard>
                {matchHistory && <StyledCard>
                    <CardTitle>
                        Match History
                    </CardTitle>
                    <ListWrapper>
                        {matchHistory.map((match, index) => <ItemWrapper color={getWinnerColor(match.rato, match.gil)} key={index}>
                            <Match>
                                <ItemScore>
                                    <AvatarRato />
                                    {match.rato}
                                </ItemScore>
                                <ItemScore>
                                    {match.gil}
                                    <AvatarGil />
                                </ItemScore>
                                <Date>{formatDate(match.date)}</Date>
                            </Match>
                        </ItemWrapper>)}
                    </ListWrapper>
                </StyledCard>}
            </StyledContent>}
        </>
    );
}