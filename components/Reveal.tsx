"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import styled, { css } from "styled-components";
import webConfig from "@/config/webConfig";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, string> = {
  up: "translate3d(0, 28px, 0)",
  down: "translate3d(0, -28px, 0)",
  left: "translate3d(28px, 0, 0)",
  right: "translate3d(-28px, 0, 0)",
  none: "scale(0.96)",
};

const Box = styled.div<{ $visible: boolean; $delay: number; $from: Direction; $enabled: boolean }>`
  ${({ $enabled, $visible, $delay, $from }) =>
    $enabled &&
    css`
      opacity: ${$visible ? 1 : 0};
      transform: ${$visible ? "none" : offsets[$from]};
      transition:
        opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${$delay}ms,
        transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${$delay}ms;
      will-change: opacity, transform;

      @media (prefers-reduced-motion: reduce) {
        opacity: 1;
        transform: none;
        transition: none;
      }
    `}
`;

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms. */
  delay?: number;
  /** Where the element settles in from. */
  from?: Direction;
  /** Re-run the animation every time the element re-enters the viewport. */
  repeat?: boolean;
  as?: ElementType;
  className?: string;
};

/** Fades/slides its children into place when scrolled into view. */
export default function Reveal({ children, delay = 0, from = "up", repeat = true, as, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = webConfig.animations.revealOnScroll;
  const [visible, setVisible] = useState(!enabled);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else if (repeat) setVisible(false);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled, repeat]);

  return (
    <Box ref={ref} as={as} className={className} $visible={visible} $delay={delay} $from={from} $enabled={enabled}>
      {children}
    </Box>
  );
}
