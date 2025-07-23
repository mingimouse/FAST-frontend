import { useState, useEffect } from "react";
import SlideMain from "./SlideMain";
import SlideInfo1 from "./SlideInfo1";
import SlideInfo2 from "./SlideInfo2";
import TopRightMenu from "./TopRightMenu";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ onLoginClick을 props로 받음
function Carousel({ onLoginClick }) {
    const rawSlides = [<SlideMain />, <SlideInfo1 />, <SlideInfo2 />];
    const slides = [
        rawSlides[rawSlides.length - 1],
        ...rawSlides,
        rawSlides[0],
    ];

    const [current, setCurrent] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent((prev) => prev - 1);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsAnimating(false);

            if (current === slides.length - 1) {
                setCurrent(1);
            } else if (current === 0) {
                setCurrent(slides.length - 2);
            }
        }, 700);

        return () => clearTimeout(timeout);
    }, [current]);

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-white relative overflow-hidden">
            {/* ✅ 홈에서는 홈버튼 숨김 */}
            <TopRightMenu onLoginClick={onLoginClick} showHomeButton={false} />

            <div className="w-[133vh] h-[133vh] rounded-full border-[7vw] border-[#f6f6f6] shadow-xl overflow-hidden flex items-center justify-center z-0 relative">
                <div
                    className="flex w-full h-full"
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                        transition: isAnimating ? "transform 700ms ease-in-out" : "none",
                    }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-full">
                            {slide}
                        </div>
                    ))}
                </div>
            </div>

            {/* 왼쪽 화살표 버튼 */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[calc(50%+calc(67.5px+60vh))]
                w-[155px] h-[155px] rounded-full bg-white shadow-lg flex items-center justify-center z-50
                hover:scale-110 transition-transform duration-300 active:scale-95"
            >
                <ChevronLeft className="w-24 h-24 text-blue-600" strokeWidth={3} />
            </button>

            {/* 오른쪽 화살표 버튼 */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-[calc(50%+calc(67.5px+44vh))]
                w-[155px] h-[155px] rounded-full bg-white shadow-lg flex items-center justify-center z-50
                hover:scale-110 transition-transform duration-300 active:scale-95"
            >
                <ChevronRight className="w-24 h-24 text-blue-600" strokeWidth={3} />
            </button>
        </div>
    );
}

export default Carousel;
