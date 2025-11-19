import { useState } from "react";
import Stars from "./components/Stars";
import GlitchText from "./components/GlitchText";
import FeatureCard from "./components/FeatureCard";
import CTAButton from "./components/CTAButton";
import Notification from "./components/Notification";
import FlagDisplay from "./components/FlagDisplay";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

function App() {
  const [showNotification, setShowNotification] = useState(false);

  const features: Feature[] = [
    {
      icon: "🔐",
      title: "보안 챌린지",
      description: "다양한 분야의 보안 문제",
    },
    {
      icon: "🏆",
      title: "경쟁과 성장",
      description: "실력을 겨루고 배우세요",
    },
    {
      icon: "🚀",
      title: "새로운 도전",
      description: "2025년 새로운 시작",
    },
  ];

  const handleCTAClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3500);
  };

  return (
    <div className="min-h-screen relative flex justify-center items-center bg-gradient-to-br from-[#000000] via-[#0a0a1a] to-[#0d1117] overflow-hidden">
      <Stars />

      {showNotification && (
        <Notification message="🎉 2026 KKnock CTF에 오신 것을 환영합니다!" />
      )}

      <div className="text-center z-10 p-8 max-w-4xl animate-fade-in-up">
        <GlitchText text="Welcome To" />

        <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-shift [text-shadow:0_0_30px_rgba(0,245,255,0.5)]">
          2026 KKnock CTF
        </h2>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 my-8 max-w-2xl mx-auto shadow-[0_8px_32px_rgba(0,245,255,0.1)]">
          <p className="text-xl text-gray-200 my-2 leading-relaxed">
            경기대학교 정보보안 동아리 KKnock에서 주최하는
          </p>
          <p className="text-xl text-gray-200 my-2 leading-relaxed">
            해킹 대회에 오신 것을 환영합니다!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <CTAButton onClick={handleCTAClick} />

        <FlagDisplay />
      </div>
    </div>
  );
}

export default App;
