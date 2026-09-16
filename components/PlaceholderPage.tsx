"use client";

import styled from "styled-components";
import Logo from "./Logo";
import Footer from "./Footer";
import { Heading } from "./Section";

const Wrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.softGlow};

  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ theme }) => theme.layout.topBarHeight};
    margin: 48px 0 0;
  }
  .body {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 48px;
    text-align: center;
  }
  .body p {
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: 1.2;
    opacity: 0.7;
    max-width: 560px;
  }

  ${({ theme }) => theme.media.desktop} {
    .top {
      margin-top: 64px;
    }
    .body p {
      font-size: ${({ theme }) => theme.fontSizes.bodyLg};
    }
  }
`;

type PlaceholderPageProps = { title: string; description: string };

/** Simple centered-heading page used until real content is added. */
export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Wrapper>
      <div className="top">
        <Logo height={32} />
      </div>
      <div className="body">
        <Heading as="h1">{title}</Heading>
        <p>{description}</p>
      </div>
      <Footer />
    </Wrapper>
  );
}
