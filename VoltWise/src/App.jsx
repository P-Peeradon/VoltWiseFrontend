import { BrowserRouter, Routes, Route, Link } from "react-router";
import LandingPage from './pages/LandingPage';
import UserRegisterPage from "./pages/UserRegisterPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<UserRegisterPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
