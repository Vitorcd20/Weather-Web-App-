import { useState } from "react";
import { SearchBar } from "../search-bar";

export function SearchDropdown() {
  const [selected, setSelected] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative w-[524px]">
      <SearchBar
        value={searchValue}
        onChange={setSearchValue}
        onFocus={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className="absolute top-[52px] w-full bg-neutral-800 rounded-lg p-2 space-y-2 shadow-lg z-10">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(index);
                setSearchValue(`Opção ${item}`);
                setIsOpen(false);
              }}
              className={`
                w-full h-[39px] rounded-lg flex items-center px-3 cursor-pointer transition-colors
                ${
                  selected === index
                    ? "bg-neutral-700 hover:bg-neutral-600"
                    : "hover:bg-neutral-700"
                }
              `}
            >
              <span className="text-white text-sm">Opção {item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
