"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import webConfig from "@/config/webConfig";
import { scrollToElement } from "@/lib/scroll";
import { u } from "@/theme/theme";

export type IndicatorStep = { id: string; label: string; tone?: "dark" | "light" };

const Nav = styled.nav<{ $tone: "dark" | "light" }>`
  display: none;

  ${({ theme }) => theme.media.desktop} {
    --dot: ${({ theme, $tone }) => ($tone === "light" ? theme.colors.softGlow : theme.colors.midnightMap)};
    position: fixed;
    right: ${u(24)};
    top: 50%;
    transform: translateY(-50%);
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${u(12)};
  }

  .step {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${u(12)};
    padding: ${u(4)} 0;
    color: var(--dot);
  }
  .label {
    font-size: ${u(12)};
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(${u(6)});
    transition: opacity 0.2s ease, transform 0.2s ease;
    pointer-events: none;
  }
  .dot {
    width: ${u(6)};
    height: ${u(6)};
    border-radius: ${u(3)};
    background: var(--dot);
    opacity: 0.35;
    transition: height 0.3s ease, opacity 0.3s ease, background-color 0.3s ease;
  }
  .step:hover .dot {
    opacity: 0.7;
  }
  .step:hover .label {
    opacity: 0.7;
    transform: translateX(0);
  }
  .step[aria-current="true"] .dot {
    height: ${u(28)};
    opacity: 1;
  }
  .step[aria-current="true"] .label {
    opacity: 1;
    transform: translateX(0);
  }
  .count {
    margin-top: ${u(8)};
    font-size: ${u(12)};
    line-height: 1;
    letter-spacing: 0.08em;
    font-variant-numeric: tabular-nums;
    color: var(--dot);
    opacity: 0.6;
  }
`;

type SectionIndicatorProps = { steps: IndicatorStep[] };

/** Fixed right-edge indicator showing the active full-screen section and the total count. */
export default function SectionIndicator({ steps }: SectionIndicatorProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const elements = steps.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el);
    if (!elements.length) return;
    // The section covering the viewport center is the active one.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = steps.findIndex((s) => s.id === entry.target.id);
          if (index >= 0) setActive(index);
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [steps]);

  if (!webConfig.showSectionIndicator) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <Nav aria-label="Page sections" $tone={steps[active]?.tone ?? "dark"}>
      {steps.map((step, i) => (
        <button
          key={step.id}
          type="button"
          className="step"
          aria-current={i === active}
          aria-label={`Go to ${step.label}`}
          onClick={() => {
            const el = document.getElementById(step.id);
            if (el) scrollToElement(el);
          }}
        >
          <span className="label">{step.label}</span>
          <span className="dot" />
        </button>
      ))}
      <span className="count" aria-hidden>
        {pad(active + 1)} / {pad(steps.length)}
      </span>
    </Nav>
  );
}
