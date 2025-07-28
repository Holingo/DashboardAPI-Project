import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListUserComponent from "./components/ListUserComponent.tsx";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import UserComponent from "./components/UserComponent";
import LoginPage from "./components/LoginPage.tsx";
import PortalComponent from "./components/PortalComponent.tsx";
import {useEffect} from "react";

import ScrollFadeEffect from "./effects/ScrollFadeEffect.tsx";
import SmoothScrollHandler from "./effects/SmoothScrollHandler.tsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Router>
                <ScrollFadeEffect />
                <SmoothScrollHandler />
                <HeaderComponent />
                <div className="flex-1 overflow-auto">
                    <Routes>
                        <Route path="/" element={<PortalComponent />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/project" element={<ListUserComponent />} />
                        <Route path="/add-user" element={<UserComponent />} />
                    </Routes>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App
