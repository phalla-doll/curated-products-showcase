import type React from 'react';

const IconWrapper = (props: React.SVGProps<SVGSVGElement> & { children: React.ReactNode }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
    >
        {props.children}
    </svg>
);

export const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
    </IconWrapper>
);
export const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
    </IconWrapper>
);
export const TagIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
    </IconWrapper>
);
export const SmartphoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
    </IconWrapper>
);
export const DesktopIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </IconWrapper>
);
export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </IconWrapper>
);
export const BackpackIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <path d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2" />
        <path d="M4 10v10a2 2 0 002 2h12a2 2 0 002-2V10" />
        <path d="M10 21v-5a2 2 0 012-2h0a2 2 0 012 2v5" />
        <path d="M8 8a2 2 0 012-2h4a2 2 0 012 2v2H8V8z" />
    </IconWrapper>
);
export const BookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </IconWrapper>
);
export const MixIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="m3.27 6.96 8.73 5.05 8.73-5.05" />
        <path d="m12 22.08V12" />
    </IconWrapper>
);
export const HeadphonesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </IconWrapper>
);
export const GamepadIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <line x1="6" y1="12" x2="4" y2="10" />
        <line x1="4" y1="6" x2="6" y2="8" />
        <line x1="18" y1="8" x2="20" y2="6" />
        <line x1="20" y1="12" x2="18" y2="10" />
        <line x1="12" y1="4" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="20" />
        <circle cx="12" cy="12" r="3" />
    </IconWrapper>
);
export const CameraIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
    </IconWrapper>
);
export const ShirtIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </IconWrapper>
);
