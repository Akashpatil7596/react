import { useState } from "react";

export default function Bill({ bill, onBillCharge }) {
  return (
    <>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onBillCharge(e.target.value)}
      />
    </>
  );
}
