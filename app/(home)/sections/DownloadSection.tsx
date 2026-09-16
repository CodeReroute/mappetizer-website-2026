"use client";

import styled from "styled-components";
import Section from "@/components/Section";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import StoreButton, { StoreButtons } from "@/components/StoreButton";
import webConfig from "@/config/webConfig";
import { u } from "@/theme/theme";
import Reveal from "@/components/Reveal";
import homeContent from "../content";
import { sectionIds } from "./ids";

const { download } = homeContent;

const Wrapper = styled(Section)`
  padding-top: 48px;
  gap: 32px;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.midnightMap};

  .bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: url("/images/download/kitchen-background.png") center / cover no-repeat;
  }
  .bg::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(${({ theme }) => theme.colors.overlay}, ${({ theme }) => theme.colors.overlay}),
      radial-gradient(ellipse 50% 50% at 50% 50%, rgba(241, 241, 238, 0) 0%, rgba(241, 241, 238, 0.4) 100%);
  }
  .top {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    width: 100%;
    padding: 0 16px;
  }
  .scan {
    display: none;
  }
  .footer-reveal {
    position: relative;
    z-index: 1;
    width: 100%;
    flex-shrink: 0;
  }

  ${({ theme }) => theme.media.desktop} {
    padding-top: ${u(64)};
    gap: 0;

    .top {
      flex: 1 0 0;
      gap: ${u(8)};
    }
    .top .mobile-only {
      display: none !important;
    }
    .scan {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${u(8)};
      color: ${({ theme }) => theme.colors.softGlow};
    }
    .scan-label {
      font-size: ${u(32)};
      font-weight: 500;
      line-height: 1.2;
      text-transform: uppercase;
    }
    .scan img {
      width: ${u(128)};
      height: ${u(128)};
    }
  }
`;

export default function DownloadSection() {
  return (
    <Wrapper id={sectionIds.download}>
      <div className="bg" aria-hidden />
      <div className="top">
        <Reveal className="scan" from="none">
          <span className="scan-label">{download.scanLabel}</span>
          <img src={webConfig.images.qrCode} alt="QR code to download mappetizer" />
        </Reveal>
        <StoreButtons className="mobile-only" $gap="16px">
          <Reveal>
            <StoreButton store="appStore" tone="light" size="sm" />
          </Reveal>
          <Reveal delay={120}>
            <StoreButton store="googlePlay" tone="light" size="sm" />
          </Reveal>
        </StoreButtons>
        <Reveal className="mobile-only" delay={240}>
          <Logo variant="white" height={24} />
        </Reveal>
      </div>
      <Reveal className="footer-reveal" delay={150}>
        <Footer />
      </Reveal>
    </Wrapper>
  );
}
