import CustomLoading from "../../shared/CustomLoading";
import EightBall from "../../shared/icons/EightBall";
import useHome from "./hooks";
import { AvatarGil, AvatarRato, CardTitle, LastMatch, LoadingWrapper, Name, Player, Score, StyledCard, StyledContent } from "./styles";

export default function Home() {
    const { lastMatch, state } = useHome();

    return (
        <>
            {state === 'loading' && <LoadingWrapper>
                <CustomLoading />
            </LoadingWrapper>}
            {state === 'idle' && <StyledContent>
                <StyledCard>
                    <CardTitle>
                        <EightBall width={20} height={20} />
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
                    </LastMatch>}
                </StyledCard>
                <StyledCard size={2}>
                    <CardTitle>
                        Match History
                    </CardTitle>
                </StyledCard>
            </StyledContent>}
        </>
    );
}