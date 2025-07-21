import { useEffect, useState } from "react";
import TopRightMenu from "./TopRightMenu";

function StrokeCenter() {
    const [location, setLocation] = useState(null);
    const [centers, setCenters] = useState([]);

    useEffect(() => {
        // 더미 위치
        setLocation({ latitude: 37.5665, longitude: 126.9780 });

        // 더미 병원 리스트
        setCenters([
            {
                name: "서울대병원",
                address: "서울 종로구 대학로 101",
                distance: 1.2,
                phone: "02-760-1234",
                website: "https://www.snuh.org",
            },
            {
                name: "삼성서울병원",
                address: "서울 강남구 일원로 81",
                distance: 3.8,
                phone: "02-3410-0200",
                website: "https://www.samsunghospital.com",
            },
            // 필요시 더 추가 가능
        ]);
    }, []);

    return (
        <div className="relative min-h-screen bg-white px-6 py-8">
            {/* ✅ 로그인 버튼 숨기고 메뉴만 보이게 */}
            <TopRightMenu showLoginButton={false} />

            {/* 제목 및 설명 */}
            <h1 className="text-4xl font-bold mb-2 mt-4">뇌졸중 센터 찾기</h1>
            <p className="text-lg text-gray-600 mb-6">
                사용자의 현재 위치를 기반으로 가까운 뇌졸중 센터를 추천합니다
            </p>

            {/* 현재 위치 표시 */}
            {location ? (
                <div className="mb-6 text-gray-700">
                    <p>
                        <strong>현재 위치:</strong> 위도 {location.latitude}, 경도 {location.longitude}
                    </p>
                </div>
            ) : (
                <p className="text-gray-500">위치 정보를 가져오는 중입니다...</p>
            )}

            {/* 병원 리스트 */}
            <div className="space-y-6">
                {centers.map((center, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg p-5 shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{center.name}</h2>
                        <p className="text-gray-700 mb-1">📍 주소: {center.address}</p>
                        <p className="text-gray-700 mb-1">📏 거리: {center.distance} km</p>
                        <p className="text-gray-700 mb-1">📞 연락처: {center.phone}</p>
                        <p className="text-gray-700">
                            🔗 홈페이지:{" "}
                            <a
                                href={center.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:font-semibold"
                            >
                                {center.website}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StrokeCenter;
