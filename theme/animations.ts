import { css, keyframes } from "styled-components";

export const floatY = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

/** Slow, gentle vertical float. Disabled for users who prefer reduced motion. */
export const floatAnimation = (duration = "6s", delay = "0s") => css`
  animation: ${floatY} ${duration} ease-in-out ${delay} infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
