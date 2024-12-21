import { Outlet } from "react-router";
import Sidepanel from "./components/Sidepanel";
import { StyledContent, StyledMain } from "./styles";

export default function MainLayout() {
    return (
        <StyledMain>
            <Sidepanel />
            <StyledContent>
                <Outlet />
            </StyledContent>
        </StyledMain>
    );
}