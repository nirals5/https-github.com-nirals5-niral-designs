import React from "react";

interface NiralLogoProps {
  className?: string;
  size?: number | string;
}

export default function NiralLogo({ className = "", size = "100%" }: NiralLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      id="niral-brand-monogram"
    >
      <g clipPath="url(#clip0_192_981)">
        <mask
          id="mask0_192_981"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="32"
          y="32"
          width="448"
          height="448"
        >
          <rect x="32" y="32" width="448" height="448" rx="48" fill="white" />
        </mask>
        <g mask="url(#mask0_192_981)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-66.9937 31.9989L480.001 578.994L578.996 479.999L32.0013 -66.9961L-66.9937 31.9989ZM339.501 200.999L480.001 340.001V31.9989C403.455 31.9989 340.756 93.9317 339.52 170.184L339.501 172.499V200.999ZM32.0013 480.001C108.548 480.001 171.246 418.069 172.483 341.816L172.501 339.501V311.001L32.0013 171.999L32.0013 480.001Z"
            fill="url(#paint0_linear_192_981)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M170.591 31.9964L310.592 171.998L311.503 171.999L311.524 169.73C312.455 112.284 342.381 61.7232 387.191 31.9961L170.591 31.9964ZM32.0014 171.999L33.4075 171.998L32.0005 170.59L32.0014 171.999Z"
            fill="#7C4A35"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M341.602 480.001L201.601 339.999L200.69 339.999L200.67 342.268C199.739 399.713 169.812 450.274 125.002 480.001L341.602 480.001ZM480.192 339.999L478.786 339.999L480.193 341.407L480.192 339.999Z"
            fill="#5E3626"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_192_981"
          x1="-66.9937"
          y1="-66.9961"
          x2="585.456"
          y2="591.914"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.000191215" stopColor="#B4A6AC" />
          <stop offset="0.99918" stopColor="#7C4A35" />
        </linearGradient>
        <clipPath id="clip0_192_981">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
