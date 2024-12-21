import { ThemeProvider } from "styled-components";
import GlobalStyles, { AppTheme } from "../globalStyles";
import Router from "./Router";

export default function App() {
    return (
        <ThemeProvider theme={AppTheme}>
            <GlobalStyles />
            <Router />
        </ThemeProvider>
    );
}