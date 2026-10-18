"use client";

import { useEffect, useRef } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function InteractiveCompanion() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pupilRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const currentPosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const animatePupils = () => {
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * 0.12;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * 0.12;

      pupilRefs.current.forEach((pupil) => {
        if (!pupil) {
          return;
        }

        const x = clamp(currentPosition.current.x, -8, 8);
        const y = clamp(currentPosition.current.y, -7, 7);
        pupil.style.transform = `translate(${x}px, ${y}px)`;
      });

      if (Math.abs(targetPosition.current.x - currentPosition.current.x) > 0.02 || Math.abs(targetPosition.current.y - currentPosition.current.y) > 0.02) {
        rafRef.current = window.requestAnimationFrame(animatePupils);
      } else {
        rafRef.current = null;
      }
    };

    const updateTargetFromPointer = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      const isInside =
        event.clientX >= bounds.left - 32 &&
        event.clientX <= bounds.right + 32 &&
        event.clientY >= bounds.top - 32 &&
        event.clientY <= bounds.bottom + 32;

      if (!isInside) {
        targetPosition.current = { x: 0, y: 0 };
        if (rafRef.current === null) {
          rafRef.current = window.requestAnimationFrame(animatePupils);
        }
        return;
      }

      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const distance = Math.min(Math.hypot(dx, dy), 56);
      const angle = Math.atan2(dy, dx);

      targetPosition.current = {
        x: Math.cos(angle) * distance * 0.18,
        y: Math.sin(angle) * distance * 0.18,
      };

      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(animatePupils);
      }
    };

    const handlePointerLeave = () => {
      targetPosition.current = { x: 0, y: 0 };
      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(animatePupils);
      }
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      currentPosition.current = { x: 0, y: 0 };
      targetPosition.current = { x: 0, y: 0 };
      pupilRefs.current.forEach((pupil) => {
        if (pupil) {
          pupil.style.transform = "translate(0px, 0px)";
        }
      });
      return;
    }

    window.addEventListener("pointermove", updateTargetFromPointer);
    container.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", updateTargetFromPointer);
      container.removeEventListener("pointerleave", handlePointerLeave);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="hero__visual" ref={containerRef} aria-hidden="true">
      <div className="companion-shell">
        <div className="companion-shell__label">KRISH // SYSTEM</div>

        <div className="companion" role="presentation">
          <div className="companion__halo" />

          <div className="companion__head">
            <div className="companion__ear companion__ear--left" />
            <div className="companion__ear companion__ear--right" />

            <div className="companion__eye-row">
              <div className="companion__eye">
                <span
                  ref={(node) => {
                    pupilRefs.current[0] = node;
                  }}
                  className="companion__pupil"
                />
              </div>

              <div className="companion__eye">
                <span
                  ref={(node) => {
                    pupilRefs.current[1] = node;
                  }}
                  className="companion__pupil"
                />
              </div>
            </div>

            <div className="companion__line companion__line--one" />
            <div className="companion__line companion__line--two" />
            <div className="companion__signal" />
          </div>
        </div>
      </div>
    </div>
  );
}
