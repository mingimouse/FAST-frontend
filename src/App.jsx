import { useState } from "react";
import Carousel from "./components/Carousel";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    return (
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
    );
}

export default App;
