import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../scenes/Home";
import MainLayout from "./layouts/MainLayout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}