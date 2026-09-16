"use client";

import styled, { css } from "styled-components";
import { u } from "@/theme/theme";

export type ButtonTone = "dark" | "light";

export const pillStyles = css<{ $tone?: ButtonTone }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.pill};
  transition: transform 0.15s ease, opacity 0.15s ease;
  background: ${({ theme, $tone = "dark" }) =>
    $tone === "dark" ? theme.colors.midnightMap : theme.colors.softGlow};
  color: ${({ theme, $tone = "dark" }) =>
    $tone === "dark" ? theme.colors.softGlow : theme.colors.midnightMap};

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
    opacity: 0.9;
  }
`;

const Button = styled.button<{ $tone?: ButtonTone }>`
  ${pillStyles}
  padding: ${u(12)} ${u(24)};
  font-size: ${u(20)};
  line-height: 1.2;
  min-width: ${u(186)};
`;

export default Button;
