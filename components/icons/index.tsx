import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };

const base = (size: IconProps["size"]) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
});

export function ArrowDownIcon({ size = 12, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 3a1.25 1.25 0 0 1 1.25 1.25v12.19l4.87-4.87a1.25 1.25 0 1 1 1.76 1.76l-7 7a1.25 1.25 0 0 1-1.76 0l-7-7a1.25 1.25 0 1 1 1.76-1.76l4.87 4.87V4.25A1.25 1.25 0 0 1 12 3Z" />
    </svg>
  );
}

export function PlusIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 4.5a.9.9 0 0 1 .9.9v5.7h5.7a.9.9 0 1 1 0 1.8h-5.7v5.7a.9.9 0 1 1-1.8 0v-5.7H5.4a.9.9 0 1 1 0-1.8h5.7V5.4a.9.9 0 0 1 .9-.9Z" />
    </svg>
  );
}

export function MinusIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4.5 12a.9.9 0 0 1 .9-.9h13.2a.9.9 0 1 1 0 1.8H5.4a.9.9 0 0 1-.9-.9Z" />
    </svg>
  );
}

export function ThumbsUpIcon({ size = 12, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M2 10.5A1.5 1.5 0 0 1 3.5 9h2A1.5 1.5 0 0 1 7 10.5v9A1.5 1.5 0 0 1 5.5 21h-2A1.5 1.5 0 0 1 2 19.5v-9Zm7 0c0-.6.3-1.1.7-1.5l4.1-5.3c.4-.5 1-.7 1.6-.7 1.4 0 2.4 1.3 2 2.6L16.6 9H20a2 2 0 0 1 2 2.3l-1.2 7.3A3 3 0 0 1 17.8 21H11a2 2 0 0 1-2-2v-8.5Z" />
    </svg>
  );
}

export function ClapIcon({ size = 12, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M9.6 1.6a1 1 0 0 1 1.2.7l.8 2.6-1.5 1.6-1.2-3.7a1 1 0 0 1 .7-1.2Zm4.6.4a1 1 0 0 1 1.3.6l1.1 3.1-1.5 1.5-1.5-4a1 1 0 0 1 .6-1.2ZM5.2 5.3a1.1 1.1 0 0 1 1.6 0l4.9 5.2-1.1 1.2-4.6-4.9A1.1 1.1 0 0 1 5.2 5.3Zm12.8.5a1.1 1.1 0 0 1 1.5 0l1.6 1.7c2.1 2.3 2.5 5.5 1.3 8.4l-1.5 3.5c-1.4 3-5.1 4-7.9 2.3l-1.3-.8c.6-.2 1.2-.5 1.7-1l3.7-3.9a1.1 1.1 0 0 0 0-1.6L14 11.2l1.1-1.2 3.4 3.6c.9.9.9 2.4 0 3.4l-3.7 3.9c-.1.1-.2.2-.3.2l.1.1c2 1.2 4.6.4 5.6-1.6l1.5-3.5c.9-2.1.6-4.5-.9-6.2l-1.6-1.7a1.1 1.1 0 0 1 0-1.6Zm-15.7 2a1.1 1.1 0 0 1 1.6 0l5.5 5.8a1.1 1.1 0 0 1 0 1.6L5.6 19a1.1 1.1 0 0 1-1.6 0L1 15.8c-1.4-1.5-1.4-3.9 0-5.4l1.3-2.6Zm7.5-1.5a1.1 1.1 0 0 1 1.6 0l4.8 5a1.1 1.1 0 0 1 0 1.6l-.4.4-5.9-6.2.1-.1-.2-.7Z" />
    </svg>
  );
}

export function PaperPlaneIcon({ size = 12, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M21.4 2.6c.5.3.7.9.5 1.5l-6 16.5a1.3 1.3 0 0 1-2.4.1l-2.7-6.2-6.2-2.7a1.3 1.3 0 0 1 .1-2.4L20.2 3.4c.4-.2.9-.1 1.2.2Zm-9.3 10.8 1.9 4.4 3.6-9.9-5.5 5.5Zm3.7-7.3-9.9 3.6 4.4 1.9 5.5-5.5Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21 8.3c-.1-1.4-.4-2.7-1.5-3.8C18.4 3.4 17.1 3.1 15.7 3 14.2 2.9 9.8 2.9 8.3 3 6.9 3.1 5.6 3.4 4.5 4.5 3.4 5.6 3.1 6.9 3 8.3c-.1 1.5-.1 5.9 0 7.4.1 1.4.4 2.7 1.5 3.8 1.1 1.1 2.4 1.4 3.8 1.5 1.5.1 5.9.1 7.4 0 1.4-.1 2.7-.4 3.8-1.5 1.1-1.1 1.4-2.4 1.5-3.8.1-1.5.1-5.9 0-7.4Zm-2 9c-.3.8-.9 1.4-1.7 1.7-1.2.5-3.9.4-5.3.4s-4.1.1-5.3-.4c-.8-.3-1.4-.9-1.7-1.7-.5-1.2-.4-3.9-.4-5.3s-.1-4.1.4-5.3c.3-.8.9-1.4 1.7-1.7 1.2-.5 3.9-.4 5.3-.4s4.1-.1 5.3.4c.8.3 1.4.9 1.7 1.7.5 1.2.4 3.9.4 5.3s.1 4.1-.4 5.3Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M20.5 2H3.5A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9.5h3V19ZM6.5 8.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5S12.7 13 12.7 14.3V19h-3V9.5h2.9v1.3c.4-.8 1.4-1.5 2.8-1.5 3 0 3.6 2 3.6 4.6V19Z" />
    </svg>
  );
}

export function FacebookIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.25 22 17.08 22 12.06Z" />
    </svg>
  );
}

export function CloseIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M6.2 5a.9.9 0 0 0-1.3 1.3L10.7 12l-5.8 5.7A.9.9 0 1 0 6.2 19l5.8-5.7 5.8 5.7a.9.9 0 1 0 1.3-1.3L13.3 12l5.8-5.7A.9.9 0 1 0 17.8 5L12 10.7 6.2 5Z" />
    </svg>
  );
}
