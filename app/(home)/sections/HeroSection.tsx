"use client";

import styled, { css } from "styled-components";
import webConfig from "@/config/webConfig";
import { asset } from "@/lib/asset";
import Reveal from "@/components/Reveal";
import { floatAnimation } from "@/theme/animations";
import Section, { Columns, Heading, Paragraphs, TopBar } from "@/components/Section";
import Logo from "@/components/Logo";
import DownloadButton from "@/components/DownloadButton";
import PhoneMockup from "@/components/PhoneMockup";
import DownButton from "@/components/DownButton";
import Avatar from "@/components/Avatar";
import { ClapIcon, PaperPlaneIcon, ThumbsUpIcon } from "@/components/icons";
import siteContent from "@/content/site";
import homeContent from "../content";
import { sectionIds } from "./ids";
import { u } from "@/theme/theme";

const { hero } = homeContent;

const Wrapper = styled(Section)`
  padding: 48px 48px 48px;
  gap: 24px;
  justify-content: space-between;

  .bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: url("${asset("/images/hero/map-background.png")}") center / cover no-repeat;
  }
  .bg::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 130% 55% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  }
  .download {
    display: none;
  }
  .logo img {
    height: 24px !important;
    width: auto !important;
  }
  .heading-row {
    width: 100%;
  }
  .heading-row ${Heading} {
    width: 100%;
  }
  .line {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }
  .plus {
    font: inherit;
  }
  .text {
    position: relative;
    gap: 16px;
  }
  .stage {
    position: relative;
  }
  ${webConfig.animations.floatAvatars &&
  css`
    .creator.dapo > div { ${floatAnimation("5.5s", "0s")} }
    .creator.danielle > div { ${floatAnimation("6.5s", "-2s")} }
    .creator.liam > div { ${floatAnimation("6s", "-4s")} }
  `}
  ${({ theme }) => theme.media.mobile} {
    .creators {
      display: contents;
    }
    .creator {
      position: absolute;
      z-index: 1;
    }
    .creator .details {
      display: none;
    }
    .creator.dapo { left: -57px; top: 122px; }
    .creator.danielle { right: -65px; top: 197px; }
    .creator.liam { left: -65px; top: 372px; }
    .creator.dapo .pic { width: 50px; height: 50px; }
    .creator.dapo .badge { width: 20px; height: 20px; }
    .creator.danielle .pic { width: 60px; height: 60px; }
    .creator.danielle .badge { width: 24px; height: 24px; }
    .creator.liam .pic { width: 40px; height: 40px; }
    .creator.liam .badge { width: 16px; height: 16px; }
  }

  ${({ theme }) => theme.media.desktop} {
    padding: ${u(64)} 0;
    gap: ${u(64)};

    .logo img {
      height: ${u(32)} !important;
    }
    .heading-row ${Heading} {
      /* Heading is as wide as its longest word so the "+" sits just past the text, like the design. */
      width: max-content;
      max-width: 100%;
    }
    .line {
      gap: ${u(24)};
    }
    .text {
      gap: ${u(32)};
    }
    .download {
      display: inline-flex;
      position: absolute;
      right: ${u(48)};
      top: 50%;
      transform: translateY(-50%);
    }
    .stage {
      display: contents;
    }
    .creators {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: ${u(96)};
    }
    .creator {
      gap: ${u(8)};
    }
    .creator .pic {
      width: ${u(80)};
      height: ${u(80)};
    }
    .creator .badge {
      width: ${u(30)};
      height: ${u(30)};
    }
    .creator .details {
      gap: ${u(4)};
    }
    .creator .name {
      font-size: ${u(20)};
    }
    .creator .followers {
      font-size: ${u(14)};
    }
    .creator.danielle {
      align-self: flex-end;
    }
  }
`;

export default function HeroSection() {
  return (
    <Wrapper id={sectionIds.hero}>
      <div className="bg" aria-hidden />
      <TopBar $showOnMobile>
        <Logo height={32} className="logo" />
        <DownloadButton className="download" label={hero.downloadButton} sheet={siteContent.downloadSheet} />
      </TopBar>

      <Columns>
        <div className="column text">
          <Reveal className="heading-row" from="right">
            <Heading as="h1">
              {hero.headingLines.map((line, i) => (
                <span key={line} className="line">
                  {line}
                  {i === hero.headingPlus.line && (
                    <span className="plus" aria-hidden>
                      {hero.headingPlus.symbol}
                    </span>
                  )}
                </span>
              ))}
            </Heading>
          </Reveal>
          <Paragraphs>
            {hero.paragraphs.map((p, i) => (
              <Reveal key={p} as="p" delay={150 + i * 100}>
                {p}
              </Reveal>
            ))}
          </Paragraphs>
        </div>

        <div className="stage">
          <Reveal from="none" delay={100}>
            <PhoneMockup src="/images/mockups/hero-screen.png" frame="white" />
          </Reveal>
          <div className="creators column">
            <Reveal className="creator dapo" from="left" delay={300}>
              <Avatar
                src="/images/hero/avatar-dapo-abi.png"
                name={hero.creators.dapo.name}
                followers={hero.creators.dapo.followers}
                followersLabel={hero.creators.followersLabel}
                badge={<ThumbsUpIcon />}
              />
            </Reveal>
            <Reveal className="creator danielle" from="left" delay={450}>
              <Avatar
                reverse
                src="/images/hero/avatar-danielle-dufour.png"
                name={hero.creators.danielle.name}
                followers={hero.creators.danielle.followers}
                followersLabel={hero.creators.followersLabel}
                badge={<ClapIcon />}
              />
            </Reveal>
            <Reveal className="creator liam" from="left" delay={600}>
              <Avatar
                src="/images/hero/avatar-liam-smith.png"
                name={hero.creators.liam.name}
                followers={hero.creators.liam.followers}
                followersLabel={hero.creators.followersLabel}
                badge={<PaperPlaneIcon />}
              />
            </Reveal>
          </div>
        </div>
      </Columns>

      <DownButton targetId={sectionIds.teasers} />
    </Wrapper>
  );
}
