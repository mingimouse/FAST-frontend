import { useState } from "react";
import { Menu } from "lucide-react";

function TopRightMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="absolute top-5 right-12 z-50 flex items-center gap-10">
            {/* 로그인 버튼 */}
            <button className="text-2xl font-medium px-0 py-4 rounded-md hover:text-blue-600 hover:font-bold transition-all">
                로그인
            </button>

            {/* 메뉴 아이콘과 드롭다운 */}
            <div className="relative">
                <Menu
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer w-9 h-9 text-gray-800 hover:text-blue-600 transition-all"
                />
                {isOpen && (
                    <div className="absolute top-1/2 right-full transform -translate-y-1/2 mr-4
                                    bg-gray-100 shadow-lg rounded-xl px-6 py-4 flex items-center gap-6 w-auto max-w-max">
                        <button className="text-2xl hover:text-blue-600 hover:font-bold transition-all whitespace-nowrap">
                            My 검사결과
                        </button>
                        <button className="text-2xl hover:text-blue-600 hover:font-bold transition-all whitespace-nowrap">
                            뇌졸중 센터
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TopRightMenu;
