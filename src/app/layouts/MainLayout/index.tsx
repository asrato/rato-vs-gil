import { Outlet } from "react-router";
import { StyledContent, StyledMain } from "./styles";

export default function MainLayout() {
    return (
        <StyledMain>
            <StyledContent>
                <Outlet />
            </StyledContent>
        </StyledMain>
    );
}