import { useState } from "react"

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

export function DaysDropdown() {
  const [selected, setSelected] = useState<number>(0) 

  return (
    <div className="w-[214px] h-[314px] bg-neutral-800 rounded-[12px] p-2 space-y-1">
      {DAYS.map((day, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`
            w-[198px] h-[39px] flex items-center px-3 rounded-[8px] cursor-pointer
            ${selected === index
              ? "bg-neutral-700 hover:bg-neutral-600"
              : "bg-neutral-800"
            }
          `}
        >
          {day}
        </div>
      ))}
    </div>
  )
}
