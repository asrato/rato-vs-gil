import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "../globalStyles";
import Router from "./Router";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router />
        </ThemeProvider>
    );
}