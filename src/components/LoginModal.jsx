import React, { useRef, useEffect } from "react";

// ✅ onSignupOpen 추가
function LoginModal({ onClose, onSignupOpen }) {
    const modalRef = useRef(null);

    // 바깥 클릭 시 모달 닫기
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [onClose]);

    // ✅ 회원가입 버튼 클릭 시 로그인 모달 닫고 → 회원가입 모달 열기
    const handleSignup = () => {
        onClose();
        onSignupOpen();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div
                ref={modalRef}
                className="bg-white p-6 rounded-lg w-[30rem] shadow-lg"
            >
                <h2 className="text-4xl font-normal mb-12 text-center">로그인</h2>
                <input
                    type="email"
                    placeholder="이메일"
                    className="w-full text-lg mb-3 px-4 py-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="w-full text-lg mb-4 px-4 py-2 border rounded"
                />
                <button className="w-full text-xl bg-blue-600 text-white mt-2 py-3 rounded-lg hover:bg-blue-700">
                    로그인
                </button>

                {/* 회원가입 버튼 (하단) */}
                <button
                    onClick={handleSignup}
                    className="w-full text-sm text-gray-500 hover:text-blue-600 mt-6 pt-5 border-t"
                >
                    회원가입
                </button>
            </div>
        </div>
    );
}

export default LoginModal;
