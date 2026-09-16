"use client";

import { useState } from "react";
import styled from "styled-components";
import webConfig from "@/config/webConfig";
import { detectPlatform } from "@/lib/platform";
import Button from "./Button";
import BottomSheet from "./BottomSheet";
import StoreButton, { StoreButtons } from "./StoreButton";

/** Positioning wrapper so layout transforms applied via `className` don't cancel the button's hover animation. */
const Slot = styled.div`
  display: inline-flex;
`;

const Qr = styled.div`
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.midnightMap};

  img {
    width: 128px;
    height: 128px;
  }
`;

type DownloadButtonProps = {
  label: string;
  sheet: { title: string; description: string };
  className?: string;
};

/**
 * Platform-aware download CTA: opens the App Store on iOS, Google Play on
 * Android, and a bottom sheet with both options (plus QR code) elsewhere.
 */
export default function DownloadButton({ label, sheet, className }: DownloadButtonProps) {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    const platform = detectPlatform();
    if (platform === "ios") return window.open(webConfig.downloads.ios, "_blank", "noopener,noreferrer");
    if (platform === "android") return window.open(webConfig.downloads.android, "_blank", "noopener,noreferrer");
    setOpen(true);
  };

  return (
    <>
      <Slot className={className}>
        <Button type="button" onClick={onClick}>
          {label}
        </Button>
      </Slot>
      <BottomSheet open={open} onClose={() => setOpen(false)} title={sheet.title} description={sheet.description}>
        <Qr>
          <img src={webConfig.images.qrCode} alt="QR code to download mappetizer" />
        </Qr>
        <StoreButtons $direction="row" $gap="16px">
          <StoreButton store="appStore" />
          <StoreButton store="googlePlay" />
        </StoreButtons>
      </BottomSheet>
    </>
  );
}
