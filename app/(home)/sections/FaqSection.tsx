"use client";

import styled from "styled-components";
import Section, { Heading } from "@/components/Section";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import { colors } from "@/theme/colors";
import { designFrame, u } from "@/theme/theme";
import homeContent from "../content";
import faqs from "../faqs";
import { sectionIds } from "./ids";

const { faq } = homeContent;

const Wrapper = styled(Section)`
  padding: 48px;
  gap: 24px;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
  }
  .list {
    width: 100%;
  }
  .title-column {
    width: 100%;
  }

  ${({ theme }) => theme.media.desktop} {
    padding: ${u(64)} 0;

    .content {
      flex-direction: row;
      align-items: center;
      gap: ${u(64)};
      padding: 0 ${u(96)};
      max-width: ${u(designFrame.width)};
      margin: 0 auto;
      /* leave room for section padding so the list can scroll inside the snap section */
      max-height: calc(100vh - ${u(128)});
      max-height: calc(100dvh - ${u(128)});
    }
    .list {
      flex: 1 0 0;
      min-width: 1px;
      max-height: 100%;
      overflow-y: auto;
      overscroll-behavior: contain;
      scrollbar-width: thin;
    }
    .title-column {
      order: 2;
      flex: 1 0 0;
      min-width: 1px;
      padding: 0 ${u(48)};
      display: flex;
      justify-content: center;
    }
    .title-column ${Heading} {
      text-align: center;
    }
  }
`;

export default function FaqSection() {
  return (
    <Wrapper id={sectionIds.faq} $bg={colors.linen}>
      <div className="content">
        <div className="title-column">
          <Reveal from="left">
            <Heading>
              {faq.headingLines.map((line) => (
                <span key={line} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </Heading>
          </Reveal>
        </div>
        <Reveal className="list" from="right" delay={120}>
          <FaqAccordion items={faqs} />
        </Reveal>
      </div>
    </Wrapper>
  );
}
