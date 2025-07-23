import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import StrokeCenter from "./components/StrokeCenter";

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    return (
        <Router>
            <Routes>
                {/* ✅ 홈 페이지 - 홈 버튼은 숨김 */}
                <Route
                    path="/"
                    element={
                        <div className="w-full h-screen relative">
                            <Carousel onLoginClick={() => setIsLoginOpen(true)} />

                            {isLoginOpen && (
                                <LoginModal
                                    onClose={() => setIsLoginOpen(false)}
                                    onSignupOpen={() => {
                                        setIsLoginOpen(false);
                                        setIsSignupOpen(true);
                                    }}
                                />
                            )}

                            {isSignupOpen && (
                                <SignupModal
                                    onClose={() => setIsSignupOpen(false)}
                                    onLoginOpen={() => {
                                        setIsSignupOpen(false);
                                        setIsLoginOpen(true);
                                    }}
                                />
                            )}
                        </div>
                    }
                />

                {/* ✅ 뇌졸중 센터 페이지 */}
                <Route path="/stroke-center" element={<StrokeCenter />} />
            </Routes>
        </Router>
    );
}

export default App;
