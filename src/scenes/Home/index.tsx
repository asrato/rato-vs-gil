import CustomLoading from "../../shared/CustomLoading";
import LastMatch from "./containers/LastMatch";
import MatchHistory from "./containers/MatchHistory";
import TotalScore from "./containers/TotalScore";
import useHome from "./hooks";
import { LoadingWrapper, StyledContent } from "./styles";

export default function Home() {
    const { lastMatch, matchHistory, state, totalScore } = useHome();

    return (
        <>
            {state === 'loading' && <LoadingWrapper>
                <CustomLoading />
            </LoadingWrapper>}
            {state === 'idle' && <StyledContent>
                {lastMatch && <LastMatch data={lastMatch} />}
                {matchHistory && <MatchHistory data={matchHistory} />}
                {totalScore && <TotalScore data={totalScore} />}
            </StyledContent>}
        </>
    );
}