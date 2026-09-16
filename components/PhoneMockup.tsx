"use client";

import styled from "styled-components";
import webConfig from "@/config/webConfig";
import { floatAnimation } from "@/theme/animations";

type PhoneMockupProps = {
  src: string;
  alt?: string;
  /** Frame/bezel color. */
  frame?: "white" | "dark";
  className?: string;
};

/**
 * Phone frame built from the design: 277x600 screen with 8px bezel, 10px side
 * buttons. Every size is a multiple of `--pu` (phone unit): 0.6633px on mobile
 * (197px wide mockup) and the desktop design unit `--u` on desktop.
 */
const Frame = styled.div<{ $frame: "white" | "dark" }>`
  --pu: 0.6633px;
  --c: ${({ theme, $frame }) => ($frame === "white" ? theme.colors.softGlow : theme.colors.midnightMap)};
  display: flex;
  align-items: flex-start;
  filter: drop-shadow(0 0 calc(40 * var(--pu)) ${({ theme }) => theme.colors.shadow});
  flex-shrink: 0;

  ${({ theme }) => theme.media.desktop} {
    --pu: var(--u);
  }
  ${webConfig.animations.floatPhone && floatAnimation("7s")}

  .buttons {
    display: flex;
    flex-direction: column;
    gap: calc(20 * var(--pu));
    padding: calc(72 * var(--pu)) 0;
  }
  .buttons.right {
    padding: calc(146 * var(--pu)) 0;
  }
  .button {
    width: calc(10 * var(--pu));
    background: var(--c);
    border-radius: calc(12 * var(--pu)) 0 0 calc(12 * var(--pu));
  }
  .right .button {
    border-radius: 0 calc(12 * var(--pu)) calc(12 * var(--pu)) 0;
    height: calc(90 * var(--pu));
  }
  .button.small { height: calc(30 * var(--pu)); }
  .button.large { height: calc(60 * var(--pu)); }

  .screen {
    width: calc(277 * var(--pu));
    height: calc(600 * var(--pu));
    border: calc(8 * var(--pu)) solid var(--c);
    border-radius: calc(35 * var(--pu));
    overflow: hidden;
    background: var(--c);
  }
  .screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: calc(27 * var(--pu));
  }
`;

export default function PhoneMockup({ src, alt = "", frame = "white", className }: PhoneMockupProps) {
  return (
    <Frame $frame={frame} className={className} aria-hidden={alt === ""}>
      <div className="buttons left">
        <span className="button small" />
        <span className="button large" />
        <span className="button large" />
      </div>
      <div className="screen">
        <img src={src} alt={alt} />
      </div>
      <div className="buttons right">
        <span className="button" />
      </div>
    </Frame>
  );
}
