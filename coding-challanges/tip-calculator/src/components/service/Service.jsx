import { useState } from "react";

export default function Service({
  onSelectServiceCharge,
  text,
  serviceCharge,
}) {
  const arr = [0, 10, 20];

  return (
    <div>
      <label>{text}</label>
      <select
        value={serviceCharge}
        onChange={(e) => onSelectServiceCharge(Number(e.target.value))}
      >
        {arr.map((num) => (
          <option value={num} key={num}>
            {num === 0 && `I Don't like it ${num}`}
            {num === 10 && `It was good ${num}`}
            {num === 20 && `Amazing ${num}`}
          </option>
        ))}
      </select>
    </div>
  );
}
