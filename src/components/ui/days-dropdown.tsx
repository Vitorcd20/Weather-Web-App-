import { useState } from "react";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface DaysDropdownProps {
  onSelect?: (day: string, index: number) => void;
}

export function DaysDropdown({ onSelect }: DaysDropdownProps) {
  const [selected, setSelected] = useState<number>(0);

  const handleSelect = (index: number) => {
    setSelected(index);
    if (onSelect) {
      onSelect(DAYS[index], index);
    }
  };

  return (
    <div className="w-[214px] h-[314px] bg-neutral-800 rounded-[12px] p-2 space-y-1">
      {DAYS.map((day, index) => (
        <div
          key={index}
          onClick={() => handleSelect(index)}
          className={`
            w-[198px] h-[39px] flex items-center px-3 rounded-[8px] cursor-pointer
            ${
              selected === index
                ? "bg-neutral-700 hover:bg-neutral-600"
                : "hover:bg-neutral-700"
            }
          `}
        >
          {day}
        </div>
      ))}
    </div>
  );
}
