"use client";

import styled from "styled-components";
import webConfig from "@/config/webConfig";
import siteContent from "@/content/site";
import { pillStyles, type ButtonTone } from "./Button";
import { u } from "@/theme/theme";

export type Store = "appStore" | "googlePlay";

const STORES: Record<Store, { label: string; icon: string; href: string }> = {
  appStore: { label: siteContent.stores.appStore, icon: "/icons/apple.svg", href: webConfig.downloads.ios },
  googlePlay: { label: siteContent.stores.googlePlay, icon: "/icons/google-play.svg", href: webConfig.downloads.android },
};

const Anchor = styled.a<{ $tone?: ButtonTone; $size: "md" | "sm" }>`
  ${pillStyles}
  font-weight: 500;
  line-height: 1;
  /* "md" is the 220x64 desktop button, expressed in design units so it scales with the frame. */
  width: ${({ $size }) => ($size === "md" ? u(220) : "165px")};
  height: ${({ $size }) => ($size === "md" ? u(64) : "48px")};
  font-size: ${({ $size }) => ($size === "md" ? u(20) : "15px")};
  gap: ${({ $size }) => ($size === "md" ? u(12) : "12px")};

  .icon {
    width: ${({ $size }) => ($size === "md" ? u(18) : "13.75px")};
    height: ${({ $size }) => ($size === "md" ? u(22) : "16.5px")};
    /* Icons are exported white; invert them on light buttons. */
    filter: ${({ $tone = "dark" }) => ($tone === "dark" ? "none" : "invert(1)")};
  }
`;

type StoreButtonProps = {
  store: Store;
  tone?: ButtonTone;
  size?: "md" | "sm";
  className?: string;
};

export default function StoreButton({ store, tone = "dark", size = "md", className }: StoreButtonProps) {
  const { label, icon, href } = STORES[store];
  return (
    <Anchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      $tone={tone}
      $size={size}
      className={className}
      aria-label={`Download on ${label}`}
    >
      <img className="icon" src={icon} alt="" />
      <span>{label}</span>
    </Anchor>
  );
}

export const StoreButtons = styled.div<{ $direction?: "row" | "column"; $gap?: string }>`
  display: flex;
  flex-direction: ${({ $direction = "column" }) => $direction};
  align-items: center;
  justify-content: center;
  gap: ${({ $gap = u(32) }) => $gap};
`;
