"use client";

import Link from "next/link";
import styled from "styled-components";

type LogoProps = {
  variant?: "black" | "white";
  /** Rendered height in px; width follows the 1164x155 aspect ratio. */
  height?: number;
  className?: string;
};

const RATIO = 1164 / 155;

const Anchor = styled(Link)`
  display: inline-flex;
  line-height: 0;
`;

export default function Logo({ variant = "black", height = 32, className }: LogoProps) {
  return (
    <Anchor href="/" aria-label="mappetizer home" className={className}>
      <img
        src={`/mappetizer-${variant}.png`}
        alt="mappetizer"
        height={height}
        width={Math.round(height * RATIO)}
        style={{ height, width: Math.round(height * RATIO) }}
      />
    </Anchor>
  );
}
