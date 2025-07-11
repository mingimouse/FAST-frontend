import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";

function TopRightMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // ← 임시 로그인 상태
    const dropdownRef = useRef(null);

    // 외부 클릭 시 메뉴 닫기
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="absolute top-5 right-12 z-50 flex items-center gap-10">
            {/* 로그인 / 로그아웃 버튼 */}
            <button
                className="text-2xl font-medium px-0 py-4 rounded-md hover:text-blue-600 hover:font-bold transition-all"
                aria-label={isLoggedIn ? "로그아웃" : "로그인"}
                onClick={() => setIsLoggedIn(!isLoggedIn)} // ← 임시 토글
            >
                {isLoggedIn ? "로그아웃" : "로그인"}
            </button>

            {/* 메뉴 아이콘과 드롭다운 */}
            <div className="relative" ref={dropdownRef}>
                <Menu
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer w-9 h-9 text-gray-800 hover:text-blue-600 transition-all"
                    aria-label="메뉴 열기"
                    role="button"
                />
                {isOpen && (
                    <div className="absolute top-1/2 right-full transform -translate-y-1/2 mr-4
                                    bg-gray-100 shadow-lg rounded-xl px-6 py-4 flex items-center gap-6 w-auto max-w-max">
                        <button
                            className="text-2xl hover:text-blue-600 hover:font-bold transition-all whitespace-nowrap"
                            aria-label="My 검사결과 바로가기"
                        >
                            My 검사결과
                        </button>
                        <button
                            className="text-2xl hover:text-blue-600 hover:font-bold transition-all whitespace-nowrap"
                            aria-label="뇌졸중 센터 찾기"
                        >
                            뇌졸중 센터
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TopRightMenu;
