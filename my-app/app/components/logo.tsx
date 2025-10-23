import React from "react";

export const CloudAgiLogo = (props: React.ComponentProps<"svg">) => (
  <svg
    viewBox="0 0 150 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="150" height="40" fill="transparent" />
    <text
      x="10"
      y="28"
      fill="currentColor"
      fontFamily="Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
      fontWeight="700"
      fontSize="28"
      letterSpacing="1.5"
    >
      CloudAgi
    </text>
    {/* Optional: Add a cloud icon or symbol next to text if desired */}
    <circle cx="130" cy="20" r="12" fill="#4F46E5" />
    <path
      d="M122 20a8 8 0 0116 0 6 6 0 01-12 0z"
      fill="white"
    />
  </svg>
);
