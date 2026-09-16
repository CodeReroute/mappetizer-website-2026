"use client";

import styled from "styled-components";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";

type AvatarProps = {
  src: string;
  name: string;
  /** Follower count text, e.g. "400K" — hidden when omitted. */
  followers?: string;
  followersLabel?: string;
  badge: ReactNode;
  size?: number;
  /** Put the details on the left of the picture. */
  reverse?: boolean;
  className?: string;
};

const Wrapper = styled.div<{ $size: number; $reverse: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  color: ${({ theme }) => theme.colors.midnightMap};

  .pic {
    position: relative;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.softGlow};
    flex-shrink: 0;
  }
  .pic img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  .badge {
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: ${({ $size }) => Math.round($size * 0.375)}px;
    height: ${({ $size }) => Math.round($size * 0.375)}px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.midnightMap};
    color: ${({ theme }) => theme.colors.softGlow};
  }
  .badge svg {
    width: 40%;
    height: 40%;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 4px;
    white-space: nowrap;
  }
  .name {
    font-size: ${({ theme }) => theme.fontSizes.bodyLg};
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
  }
  .followers {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 1.2;
  }
  .followers b {
    font-weight: 700;
  }
`;

export default function Avatar({
  src,
  name,
  followers,
  followersLabel = "followers",
  badge,
  size = 80,
  reverse = false,
  className,
}: AvatarProps) {
  return (
    <Wrapper $size={size} $reverse={reverse} className={className}>
      <div className="pic">
        <img src={asset(src)} alt={name} />
        <span className="badge">{badge}</span>
      </div>
      {followers && (
        <div className="details">
          <span className="name">{name}</span>
          <span className="followers">
            <b>{followers}</b> {followersLabel}
          </span>
        </div>
      )}
    </Wrapper>
  );
}
