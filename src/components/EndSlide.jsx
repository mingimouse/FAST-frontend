// src/components/EndSlide.jsx
export default function EndSlide() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">
            {/* 타이틀 */}
            <h1 className="text-9xl font-bold text-gray-400 mb-2">
                F.A.S.T
            </h1>
            <p className="text-3xl text-black mb-14">Brain Scan</p>

            {/* 중앙 내용 */}
                <div className="text-center text-3xl text-gray-800 mt-24 mb-60 leading-relaxed">
                    <p>FAST 검사가 모두 끝났습니다.</p>
                    <p>결과는 <strong>'My 검사결과'</strong> 에서 확인할 수 있습니다.</p>
                </div>


            {/* 검사 시작 버튼 */}
            <button
                className="bg-blue-600 text-white text-4xl font-normal font-sans px-7 py-4 rounded-full shadow-lg
                   hover:scale-110 hover:bg-blue-700 hover:font-semibold hover:shadow-xl transition-transform duration-300"
            >
                홈으로 돌아가기
            </button>
        </div>
    );
}
