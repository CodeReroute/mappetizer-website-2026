"use client";

import { useEffect, useState, type ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";
import { CloseIcon } from "./icons";

const CLOSE_DURATION_MS = 250;

const fadeIn = keyframes`from { opacity: 0 } to { opacity: 1 }`;
const fadeOut = keyframes`from { opacity: 1 } to { opacity: 0 }`;
const slideUp = keyframes`from { transform: translateY(100%) } to { transform: translateY(0) }`;
const slideDown = keyframes`from { transform: translateY(0) } to { transform: translateY(100%) }`;

const Backdrop = styled.div<{ $closing: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease;
  ${({ $closing }) =>
    $closing &&
    css`
      animation: ${fadeOut} ${CLOSE_DURATION_MS}ms ease forwards;
      pointer-events: none;
    `}
`;

const Panel = styled.div<{ $closing: boolean }>`
  position: relative;
  width: 100%;
  max-width: 560px;
  background: ${({ theme }) => theme.colors.softGlow};
  color: ${({ theme }) => theme.colors.midnightMap};
  border-radius: 35px 35px 0 0;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  animation: ${slideUp} 0.25s ease;
  max-height: 90vh;
  overflow-y: auto;
  ${({ $closing }) =>
    $closing &&
    css`
      animation: ${slideDown} ${CLOSE_DURATION_MS}ms ease forwards;
    `}

  .handle {
    position: absolute;
    top: 12px;
    left: 50%;
    width: 48px;
    height: 4px;
    border-radius: 2px;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.divider};
  }
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover {
      background: ${({ theme }) => theme.colors.linen};
    }
  }
  .title {
    font-size: ${({ theme }) => theme.fontSizes.subtitle};
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
  }
  .description {
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: 1.2;
    text-align: center;
    opacity: 0.7;
  }
`;

type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function BottomSheet({ open, onClose, title, description, children }: BottomSheetProps) {
  // Stay mounted while `open` is false so the closing animation can play.
  const [mounted, setMounted] = useState(open);
  if (open && !mounted) setMounted(true);
  const closing = mounted && !open;

  useEffect(() => {
    if (!closing) return;
    const timer = window.setTimeout(() => setMounted(false), CLOSE_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [closing]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <Backdrop onClick={onClose} $closing={closing}>
      <Panel
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        $closing={closing}
      >
        <span className="handle" />
        <button type="button" className="close" onClick={onClose} aria-label="Close">
          <CloseIcon size={20} />
        </button>
        {title && <h3 className="title">{title}</h3>}
        {description && <p className="description">{description}</p>}
        {children}
      </Panel>
    </Backdrop>
  );
}
