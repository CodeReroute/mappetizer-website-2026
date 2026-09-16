"use client";

import { createGlobalStyle } from "styled-components";
import webConfig from "@/config/webConfig";
import { designFrame } from "./theme";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.softGlow};
    color: ${({ theme }) => theme.colors.midnightMap};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    --u: 1px;
    scroll-behavior: smooth;
    ${({ theme }) => theme.media.desktop} {
      --u: min(1px, calc(100vh / ${designFrame.height}), calc(100vw / ${designFrame.width}));
      --u: min(1px, calc(100dvh / ${designFrame.height}), calc(100vw / ${designFrame.width}));
      ${webConfig.snapSections ? "scroll-snap-type: y mandatory;" : ""}
    }
  }

  h1, h2, h3, h4, p {
    margin: 0;
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  img {
    display: block;
  }
`;

export default GlobalStyles;
