"use client";

import styled from "styled-components";
import Section, { Columns, Heading, Paragraphs, TopBar } from "@/components/Section";
import Logo from "@/components/Logo";
import PhoneMockup from "@/components/PhoneMockup";
import DownButton from "@/components/DownButton";
import StoreButton, { StoreButtons } from "@/components/StoreButton";
import type { ButtonTone } from "@/components/Button";
import { u } from "@/theme/theme";
import Reveal from "@/components/Reveal";

const Wrapper = styled(Section)`
  padding: 48px;
  gap: 24px;
  justify-content: space-between;

  .text {
    gap: 16px;
  }
  ${StoreButtons}.stores-mobile {
    display: flex;
    order: 3;
  }
  .column.stores-desktop {
    display: none;
  }
  .text {
    order: 1;
  }
  .phone {
    order: 2;
  }

  ${({ theme }) => theme.media.desktop} {
    padding: ${u(64)} 0;
    gap: ${u(64)};

    .text,
    .phone {
      order: 0;
    }
    .text {
      gap: ${u(32)};
    }
    .text ${Heading} {
      width: min-content;
      min-width: 100%;
    }
    ${StoreButtons}.stores-mobile {
      display: none;
    }
    .column.stores-desktop {
      display: flex;
      align-items: center;
    }
  }
`;

type FeatureSectionProps = {
  id: string;
  nextId?: string;
  background: string;
  heading: string;
  paragraphs: readonly string[];
  phoneSrc: string;
  phoneFrame: "white" | "dark";
  /** Which side of the phone the text sits on (desktop). */
  textSide: "left" | "right";
  /** Store button style on desktop / mobile. */
  storeTone: { desktop: ButtonTone; mobile: ButtonTone };
  logoVariant?: "black" | "white";
};

/** Shared layout for the "Teasers" and "Restaurants" sections. */
export default function FeatureSection({
  id,
  nextId,
  background,
  heading,
  paragraphs,
  phoneSrc,
  phoneFrame,
  textSide,
  storeTone,
  logoVariant = "black",
}: FeatureSectionProps) {
  const textFrom = textSide === "left" ? "right" : "left";
  const text = (
    <div className="column text" key="text">
      <Reveal from={textFrom}>
        <Heading>{heading}</Heading>
      </Reveal>
      <Paragraphs>
        {paragraphs.map((p, i) => (
          <Reveal key={p} as="p" delay={150 + i * 100}>
            {p}
          </Reveal>
        ))}
      </Paragraphs>
    </div>
  );
  const stores = (
    <div className="column stores-desktop" key="stores">
      <StoreButtons>
        <Reveal delay={300}>
          <StoreButton store="appStore" tone={storeTone.desktop} />
        </Reveal>
        <Reveal delay={420}>
          <StoreButton store="googlePlay" tone={storeTone.desktop} />
        </Reveal>
      </StoreButtons>
    </div>
  );

  return (
    <Wrapper id={id} $bg={background}>
      <TopBar>
        <Logo variant={logoVariant} height={32} />
      </TopBar>

      <Columns>
        {textSide === "left" ? text : stores}
        <Reveal className="phone" from="none" delay={100}>
          <PhoneMockup src={phoneSrc} frame={phoneFrame} />
        </Reveal>
        {textSide === "left" ? stores : text}
        <StoreButtons className="stores-mobile" $gap="16px">
          <Reveal delay={300}>
            <StoreButton store="appStore" tone={storeTone.mobile} size="sm" />
          </Reveal>
          <Reveal delay={420}>
            <StoreButton store="googlePlay" tone={storeTone.mobile} size="sm" />
          </Reveal>
        </StoreButtons>
      </Columns>

      {nextId && <DownButton targetId={nextId} />}
    </Wrapper>
  );
}
