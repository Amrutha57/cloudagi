// components/smoothui/ui/PriceFlow.tsx

"use client";

import React from "react";

interface PriceFlowProps {
  value: number | string;
}

const PriceFlow: React.FC<PriceFlowProps> = ({ value }) => {
  return (
    <span>{value}</span> // Simple placeholder that just displays the value
  );
};

export default PriceFlow;
