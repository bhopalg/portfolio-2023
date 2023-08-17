"use client";

import type { SVGProps } from "react";

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_236_1049)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M200 2.62268e-06V60L200 200H140V130.033C139.982 168.678 108.649 200 70 200C31.3401 200 0 168.66 0 130C0 91.3401 31.3401 60 70 60C108.649 60 139.982 91.3222 140 129.967V60H70H0V2.62268e-06L140 0L200 2.62268e-06Z"
          fill="url(#paint0_linear_236_1049)"
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_236_1049" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse">
          <stop offset="0.0509862" stopColor="#ffffff" /> <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <clipPath id="clip0_236_1049">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
