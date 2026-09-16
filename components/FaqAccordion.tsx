"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MinusIcon, PlusIcon } from "./icons";
import { u } from "@/theme/theme";

export type FaqItem = { title: string; description: string };

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.midnightMap};

  .item {
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
    padding: 16px 0;
  }
  .item:first-child {
    padding-top: 0;
  }
  .trigger {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: 500;
    line-height: 1.2;
  }
  .trigger span {
    flex: 1;
  }
  .trigger svg {
    flex-shrink: 0;
  }
  .trigger svg {
    transition: transform 0.3s ease;
  }
  .trigger[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
  .panel {
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;
  }
  .answer {
    padding-top: 16px;
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: 1.2;
    opacity: 0;
    transform: translateY(-6px);
    transition: opacity 0.25s ease, transform 0.3s ease;
  }
  .panel[data-open="true"] .answer {
    opacity: 1;
    transform: translateY(0);
  }

  ${({ theme }) => theme.media.desktop} {
    .item {
      padding: ${u(16)} 0;
    }
    .trigger,
    .answer {
      font-size: ${u(20)};
    }
    .trigger {
      gap: ${u(16)};
    }
    .trigger svg {
      width: ${u(20)};
      height: ${u(20)};
    }
    .answer {
      padding-top: ${u(16)};
    }
  }
`;

type FaqAccordionProps = { items: FaqItem[]; defaultOpen?: number; className?: string };

/** Accordion that keeps only one answer open at a time. */
export default function FaqAccordion({ items, defaultOpen = 0, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <List className={className}>
      {items.map((item, i) => (
        <FaqRow
          key={item.title}
          index={i}
          item={item}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </List>
  );
}

type FaqRowProps = { index: number; item: FaqItem; open: boolean; onToggle: () => void };

function FaqRow({ index, item, open, onToggle }: FaqRowProps) {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState<number>(0);
  const panelId = `faq-panel-${index}`;

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => setHeight(open ? el.scrollHeight : 0);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [open]);

  return (
    <div className="item">
      <button type="button" className="trigger" aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
        <span>{item.title}</span>
        {open ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
      </button>
      <div className="panel" id={panelId} data-open={open} role="region" aria-hidden={!open} style={{ height }}>
        <p className="answer" ref={contentRef}>
          {item.description}
        </p>
      </div>
    </div>
  );
}
