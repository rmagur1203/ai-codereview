import { useMemo } from "react";

const Stars = () => {
  const stars = useMemo(() => {
    const starArray = [];

    // 작은 별 (많이)
    for (let i = 0; i < 200; i++) {
      starArray.push({
        id: `small-${i}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 2 + 2}s`,
      });
    }

    // 중간 별
    for (let i = 0; i < 50; i++) {
      starArray.push({
        id: `medium-${i}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 2,
        opacity: Math.random() * 0.4 + 0.2,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 2 + 2}s`,
      });
    }

    return starArray;
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={
            {
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              "--star-opacity": star.opacity,
              "--star-min-opacity": star.opacity * 0.3,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration,
            } as React.CSSProperties & {
              "--star-opacity": number;
              "--star-min-opacity": number;
            }
          }
        />
      ))}
    </div>
  );
};

export default Stars;
