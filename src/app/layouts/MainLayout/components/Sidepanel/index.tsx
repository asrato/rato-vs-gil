import EightBall from "../../../../../shared/icons/EightBall";
import { StyledHeader, StyledSection, StyledWrapper } from "./styles";

export default function Sidepanel() {
    return (
        <StyledSection>
            <StyledHeader>
                <EightBall />
                RATO VS GIL
            </StyledHeader>
            <StyledWrapper></StyledWrapper>
        </StyledSection>
    );
}