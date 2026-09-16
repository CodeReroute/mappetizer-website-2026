"use client";

import styled from "styled-components";
import webConfig from "@/config/webConfig";
import { designFrame, u } from "@/theme/theme";

/**
 * Full-width page section. On desktop it fills the viewport height and (when
 * `webConfig.snapSections` is on) snaps into view while scrolling. On mobile
 * it takes its natural height. Desktop sizes are written in design units
 * (`u()`) so the whole section scales with the viewport.
 */
const Section = styled.section<{ $bg?: string }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ $bg, theme }) => $bg ?? theme.colors.softGlow};
  overflow: hidden;

  ${({ theme }) => theme.media.desktop} {
    height: 100vh;
    height: 100dvh;
    ${webConfig.snapSections ? "scroll-snap-align: start; scroll-snap-stop: always;" : ""}
  }
`;

export default Section;

/** Content container capped at the design width and centered. */
export const Content = styled.div`
  position: relative;
  width: 100%;

  ${({ theme }) => theme.media.desktop} {
    max-width: ${u(designFrame.width)};
    margin: 0 auto;
  }
`;

/** 48px tall bar used at the top of desktop sections (logo) */
export const TopBar = styled(Content)<{ $showOnMobile?: boolean }>`
  display: ${({ $showOnMobile }) => ($showOnMobile ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.layout.topBarHeight};
  flex-shrink: 0;

  ${({ theme }) => theme.media.desktop} {
    display: flex;
    height: ${u(48)};
    padding: 0 ${u(48)};
  }
`;

/** Three-column desktop layout: side | phone | side */
export const Columns = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  .column {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    gap: ${u(64)};
    padding: 0 ${u(48)};

    .column {
      flex: 1 0 0;
      width: auto;
      min-width: 1px;
      padding: 0 ${u(48)};
    }
  }
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headingMobile};
  line-height: 38px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.midnightMap};

  ${({ theme }) => theme.media.desktop} {
    font-size: ${u(64)};
    line-height: ${u(54)};
  }
`;

export const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.midnightMap};

  ${({ theme }) => theme.media.desktop} {
    gap: ${u(16)};
    font-size: ${u(20)};
  }
`;
