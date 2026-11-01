import { useEffect, useRef } from "react";
import GradientText from "./GradientText.jsx";
import "./Eyes.css";

const gradientColors = [
  "#f76b0e",
  "#CC5500",
  "#4ABFB9",
  "#783200",
];

export default function BoonmaEyes() {
  const eyesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        eyesRef.current.forEach((eye) => {
          if (!eye) return;

          const rect = eye.getBoundingClientRect();

          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const dx = event.clientX - centerX;
          const dy = event.clientY - centerY;

          const angle = Math.atan2(dy, dx);

          const maxMove = rect.width * 0.16;
          const distance = Math.min(
            maxMove,
            Math.hypot(dx, dy) * 0.08
          );

          const pupil = eye.querySelector<HTMLElement>(
            ".boonma-eye-iris"
          );

          if (!pupil) return;

          pupil.style.transform = `translate(
            ${Math.cos(angle) * distance}px,
            ${Math.sin(angle) * distance}px
          )`;
        });
      });
    };

    const resetEyes = () => {
      cancelAnimationFrame(frame);

      eyesRef.current.forEach((eye) => {
        const pupil = eye?.querySelector<HTMLElement>(
          ".boonma-eye-iris"
        );

        if (pupil) {
          pupil.style.transform = "translate(0px, 0px)";
        }
      });
    };

    window.addEventListener("pointermove", handleMouseMove);
    document.addEventListener("mouseleave", resetEyes);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMouseMove);
      document.removeEventListener("mouseleave", resetEyes);
    };
  }, []);

  return (
    <span className="boonma-name" aria-label="Boonma">
      <span className="boonma-name-letter" aria-hidden="true">
        <GradientText
          colors={gradientColors}
          animationSpeed={8}
          showBorder={false}
        >
          B
        </GradientText>
      </span>

      <span className="boonma-eyes" aria-hidden="true">
        {[0, 1].map((index) => (
          <span
            key={index}
            ref={(element) => {
              eyesRef.current[index] = element;
            }}
            className="boonma-eye"
          >
            <span className="boonma-eye-iris">
              <span className="boonma-eye-pupil" />
              <span className="boonma-eye-shine" />
            </span>
          </span>
        ))}
      </span>

      <span className="boonma-name-letter" aria-hidden="true">
        <GradientText
          colors={gradientColors}
          animationSpeed={8}
          showBorder={false}
        >
          nma
        </GradientText>
      </span>
    </span>
  );
}