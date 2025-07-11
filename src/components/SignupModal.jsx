import React, { useRef, useEffect, useState } from "react";
import Select from "react-select"; // react-select 추가
import { CircleCheckBig, Circle } from "lucide-react";

function SignupModal({ onClose, onLoginOpen }) {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [birthYear, setBirthYear] = useState(null);
    const [birthMonth, setBirthMonth] = useState(null);
    const [birthDay, setBirthDay] = useState(null);
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState(null);
    const [agreed, setAgreed] = useState(false);

    const formatPhoneNumber = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3")
            .slice(0, 13);
    };

    // 생년월일 select 옵션
    const yearOptions = Array.from({ length: 100 }, (_, i) => {
        const year = 2025 - i;
        return { value: year, label: `${year}년` };
    });

    const monthOptions = Array.from({ length: 12 }, (_, i) => ({
        value: i + 1,
        label: `${i + 1}월`,
    }));

    const dayOptions = Array.from({ length: 31 }, (_, i) => ({
        value: i + 1,
        label: `${i + 1}일`,
    }));

    // 성별 select 옵션
    const genderOptions = [
        { value: "male", label: "남성" },
        { value: "female", label: "여성" },
    ];

    const handleSubmit = () => {
        if (!email || !password || !confirmPassword || !name || !birthYear || !birthMonth || !birthDay || !phone || !gender || !agreed) {
            alert("모든 항목을 입력하고 동의해야 회원가입이 가능합니다.");
            return;
        }
        // 서버에 전송 등 처리 로직 추가 가능
        alert("회원가입 완료!");
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div ref={modalRef} className="bg-white p-6 rounded-lg w-[30rem] shadow-lg">
                <h2 className="text-4xl font-normal mb-8 text-center">회원가입</h2>

                {/* 1. 이메일 */}
                <input
                    type="text"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-lg mb-3 px-4 py-2 border rounded"
                />

                {/* 2. 비밀번호 */}
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-lg mb-3 px-4 py-2 border rounded"
                />

                {/* 3. 비밀번호 확인 */}
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full text-lg mb-12 px-4 py-2 border rounded"
                />

                {/* 4. 이름 */}
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-lg mb-3 px-4 py-2 border rounded"
                />

                {/* 5. 생년월일 */}
                <div className="flex justify-between mb-3 gap-2">
                    <Select
                        options={yearOptions}
                        placeholder="년"
                        value={birthYear}
                        onChange={(selected) => setBirthYear(selected)}
                        className="w-1/3 text-lg"
                    />
                    <Select
                        options={monthOptions}
                        placeholder="월"
                        value={birthMonth}
                        onChange={(selected) => setBirthMonth(selected)}
                        className="w-1/3 text-lg"
                    />
                    <Select
                        options={dayOptions}
                        placeholder="일"
                        value={birthDay}
                        onChange={(selected) => setBirthDay(selected)}
                        className="w-1/3 text-lg"
                    />
                </div>

                {/* 6. 전화번호 */}
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                    placeholder="전화번호"
                    className="w-full text-lg mb-3 px-4 py-2 border rounded"
                />

                {/* 7. 성별 */}
                <Select
                    options={genderOptions}
                    placeholder="성별 선택"
                    value={gender}
                    onChange={(selected) => setGender(selected)}
                    className="mb-6 text-lg"
                />

                {/* 8. 개인정보 수집 동의 */}
                <button
                    onClick={() => setAgreed(!agreed)}
                    className="flex items-center gap-2 text-sm text-gray-700 mt-3 mb-3 focus:outline-none cursor-pointer"
                >
                    {agreed ? (
                        <CircleCheckBig className="text-green-600 w-6 h-6" />
                    ) : (
                        <Circle className="text-gray-400 w-6 h-6" />
                    )}
                    개인정보 수집 및 이용에 동의합니다.
                </button>

                {/* 9. 회원가입 버튼 */}
                <button
                    disabled={!agreed}
                    onClick={handleSubmit}
                    className={`w-full text-xl text-white mt-2 py-3 rounded-lg transition-colors ${
                        agreed ? "bg-green-600 hover:bg-green-700" : "bg-gray-300 cursor-not-allowed"
                    }`}
                >
                    회원가입
                </button>

                {/* 10. 로그인으로 돌아가기 */}
                <button
                    onClick={() => {
                        onClose();
                        onLoginOpen();
                    }}
                    className="w-full text-sm text-gray-500 hover:text-blue-600 mt-6 pt-5 border-t"
                >
                    이미 계정이 있으신가요? 로그인
                </button>
            </div>
        </div>
    );
}

export default SignupModal;
