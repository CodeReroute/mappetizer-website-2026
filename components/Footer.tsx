"use client";

import Link from "next/link";
import styled from "styled-components";
import webConfig from "@/config/webConfig";
import siteContent from "@/content/site";
import { designFrame, u } from "@/theme/theme";
import Logo from "./Logo";
import StoreButton, { StoreButtons } from "./StoreButton";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./icons";

const { links } = siteContent.footer;

export const footerLinks = [
  { label: links.about, href: "/about" },
  { label: links.contact, href: "/contact" },
  { label: links.privacyPolicy, href: "/privacy-policy" },
  { label: links.termsOfUse, href: "/terms-of-use" },
] as const;

const socials = [
  { label: "Instagram", href: webConfig.social.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: webConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "Facebook", href: webConfig.social.facebook, Icon: FacebookIcon },
] as const;

const Wrapper = styled.footer`
  position: relative;
  z-index: 1;
  width: 100%;
  background: ${({ theme }) => theme.colors.midnightMap};
  color: ${({ theme }) => theme.colors.softGlow};
  border-radius: 35px 35px 0 0;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-shrink: 0;

  .newsletter {
    display: none;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: 1.2;
    white-space: nowrap;
  }
  .links a {
    opacity: 0.6;
    transition: opacity 0.15s ease;
    &:hover {
      opacity: 1;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    width: 100%;
  }
  .meta {
    display: flex;
    align-items: center;
    gap: 32px;
    width: 100%;
  }
  .copyright {
    flex: 1 0 0;
    min-width: 1px;
    opacity: 0.6;
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: 1.2;
    white-space: nowrap;
  }
  .social {
    display: flex;
    align-items: center;
    gap: 32px;
    flex-shrink: 0;
  }
  .social a {
    display: inline-flex;
    color: ${({ theme }) => theme.colors.whiteMuted};
    transition: color 0.15s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.softGlow};
    }
  }

  ${({ theme }) => theme.media.desktop} {
    padding: ${u(64)} 0;
    gap: ${u(48)};
    border-radius: ${u(35)} ${u(35)} 0 0;

    .newsletter,
    .bottom {
      max-width: ${u(designFrame.width)};
      padding: 0 ${u(48)};
      margin: 0 auto;
    }
    .newsletter {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .newsletter img {
      height: ${u(40)} !important;
      width: auto !important;
    }
    .bottom {
      flex-direction: row;
      justify-content: space-between;
      gap: ${u(32)};
    }
    .links {
      flex-direction: row;
      gap: ${u(32)};
      font-size: ${u(20)};
    }
    .meta {
      flex: 1 0 0;
      min-width: 1px;
      gap: ${u(32)};
    }
    .copyright {
      text-align: center;
      font-size: ${u(20)};
    }
    .social {
      flex: 1 0 0;
      justify-content: flex-end;
      gap: ${u(32)};
    }
    .social svg {
      width: ${u(20)};
      height: ${u(20)};
    }
  }
`;

export default function Footer({ copyright = siteContent.footer.copyright }: { copyright?: string }) {
  return (
    <Wrapper>
      <div className="newsletter">
        <Logo variant="white" height={40} />
        <StoreButtons $direction="row">
          <StoreButton store="appStore" tone="light" />
          <StoreButton store="googlePlay" tone="light" />
        </StoreButtons>
      </div>
      <div className="bottom">
        <nav className="links" aria-label="Footer">
          {footerLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="meta">
          <p className="copyright">{copyright}</p>
          <div className="social">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
