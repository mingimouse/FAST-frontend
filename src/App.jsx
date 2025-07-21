import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ 추가
import Carousel from "./components/Carousel";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import StrokeCenter from "./components/StrokeCenter.jsx";

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    return (
        <Router> {/* ✅ 전체를 Router로 감싸기 */}
            <Routes>
                {/* 메인 페이지 */}
                <Route
                    path="/"
                    element={
                        <div className="w-full h-screen relative">
                            {/* 메인 화면 */}
                            <Carousel onLoginClick={() => setIsLoginOpen(true)} />

                            {/* 로그인 모달 */}
                            {isLoginOpen && (
                                <LoginModal
                                    onClose={() => setIsLoginOpen(false)}
                                    onSignupOpen={() => {
                                        setIsLoginOpen(false);
                                        setIsSignupOpen(true);
                                    }}
                                />
                            )}

                            {/* 회원가입 모달 */}
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

                {/* 뇌졸중 센터 찾기 페이지 */}
                <Route path="/stroke-center" element={<StrokeCenter />} />
            </Routes>
        </Router>
    );
}

export default App;
