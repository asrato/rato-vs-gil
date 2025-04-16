import CustomLoading from "../../shared/CustomLoading";
import FirstGameWinPercentage from "./containers/FirstGameWinPercentage";
import HighestWinsInARow from "./containers/HighestWinsInARow";
import LastMatch from "./containers/LastMatch";
import MatchHistory from "./containers/MatchHistory";
import TotalScore from "./containers/TotalScore";
import useHome from "./hooks";
import { LoadingWrapper, StyledContent } from "./styles";

export default function Home() {
    const { firstGames, highestWinsInARow, lastMatch, matchHistory, state, totalScore } = useHome();

    return (
        <>
            {state === 'loading' && <LoadingWrapper>
                <CustomLoading />
            </LoadingWrapper>}
            {state === 'idle' && <StyledContent>
                {totalScore && <TotalScore data={totalScore} />}
                {lastMatch && <LastMatch data={lastMatch} />}
                {firstGames && <FirstGameWinPercentage data={firstGames} />}
                {highestWinsInARow && <HighestWinsInARow data={highestWinsInARow} />}
                {matchHistory && <MatchHistory data={matchHistory} />}
            </StyledContent>}
        </>
    );
}