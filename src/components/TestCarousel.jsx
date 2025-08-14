// src/components/TestCarousel.jsx
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FaceSlide from "./FaceSlide";
import ArmSlide from "./ArmSlide";
import SpeechSlide from "./SpeechSlide";
import EndSlide from "./EndSlide";
import TopRightMenu from "./TopRightMenu";

export default function TestCarousel() {
    const slides = [
        <FaceSlide key="face" />,
        <ArmSlide key="arm" />,
        <SpeechSlide key="speech" />,
        <EndSlide key="end" />,
    ];

    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating || index >= slides.length - 1) return;
        setIsAnimating(true);
        setIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isAnimating || index <= 0) return;
        setIsAnimating(true);
        setIndex((prev) => prev - 1);
    };

    // 애니메이션 잠시 비활성화 후 다시 가능하게
    setTimeout(() => {
        setIsAnimating(false);
    }, 700);

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-white relative overflow-hidden">
            <TopRightMenu showHomeButton={true} />

            <div className="w-[133vh] h-[133vh] rounded-full border-[7vw] border-[#f6f6f6] shadow-xl overflow-hidden flex items-center justify-center z-0 relative">
                <div
                    className="flex w-full h-full"
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                        transition: isAnimating ? "transform 700ms ease-in-out" : "none",
                    }}
                >
                    {slides.map((slide, i) => (
                        <div key={i} className="flex-shrink-0 w-full h-full">
                            {slide}
                        </div>
                    ))}
                </div>
            </div>

            {/* 왼쪽 화살표 */}
            {index > 0 && (
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[calc(50%+calc(67.5px+60vh))]
                    w-[155px] h-[155px] rounded-full bg-white shadow-lg flex items-center justify-center z-50
                    hover:scale-110 transition-transform duration-300 active:scale-95"
                >
                    <ChevronLeft className="w-24 h-24 text-blue-600" strokeWidth={3} />
                </button>
            )}

            {/* 오른쪽 화살표 */}
            {index < slides.length - 1 && (
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-[calc(50%+calc(67.5px+44vh))]
                    w-[155px] h-[155px] rounded-full bg-white shadow-lg flex items-center justify-center z-50
                    hover:scale-110 transition-transform duration-300 active:scale-95"
                >
                    <ChevronRight className="w-24 h-24 text-blue-600" strokeWidth={3} />
                </button>
            )}
        </div>
    );
}
