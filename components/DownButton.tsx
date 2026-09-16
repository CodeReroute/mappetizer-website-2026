"use client";

import styled, { css, keyframes } from "styled-components";
import webConfig from "@/config/webConfig";
import { u } from "@/theme/theme";
import { scrollToElement } from "@/lib/scroll";
import { ArrowDownIcon } from "./icons";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

const Wrapper = styled.div`
  display: none;
  position: relative;
  ${({ theme }) => theme.media.desktop} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${u(48)};
    width: 100%;
    flex-shrink: 0;
  }
`;

const Circle = styled.button<{ $animate: boolean }>`
  width: ${u(36)};
  height: ${u(36)};

  svg {
    width: ${u(12)};
    height: ${u(12)};
  }
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.midnightMap};
  color: ${({ theme }) => theme.colors.softGlow};
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${bounce} 1.6s ease-in-out infinite;
    `}

  &:hover {
    animation-play-state: paused;
  }
`;

type DownButtonProps = {
  /** id of the section to scroll to */
  targetId: string;
  label?: string;
  className?: string;
};

export default function DownButton({ targetId, label = "Scroll to next section", className }: DownButtonProps) {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target =
      document.getElementById(targetId) ?? e.currentTarget.closest("section")?.nextElementSibling;
    if (!(target instanceof HTMLElement)) return;
    scrollToElement(target);
  };

  return (
    <Wrapper className={className}>
      <Circle type="button" onClick={onClick} aria-label={label} $animate={webConfig.animateDownButton}>
        <ArrowDownIcon size={12} />
      </Circle>
    </Wrapper>
  );
}
