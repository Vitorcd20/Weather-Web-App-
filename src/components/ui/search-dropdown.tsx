import { useEffect, useState } from "react";
import { SearchBar } from "../search-bar";
import { useLocationSearch } from "@/hooks/use-location-search";
import { useDropdown } from "@/hooks/use-dropdown";
import { formatLocationDetails, type Location } from "@/utils/utils";


interface SearchDropdownProps {
  onLocationSelect?: (location: Location) => void;
}

export function SearchDropdown({ onLocationSelect }: SearchDropdownProps) {
  const [searchValue, setSearchValue] = useState("");
  const { locations, isLoading } = useLocationSearch(searchValue);
  const { isOpen, setIsOpen, selected, setSelected, dropdownRef } = useDropdown();

  useEffect(() => {
    setSelected(-1);
    setIsOpen(locations.length > 0 && searchValue.length >= 2);
  }, [searchValue, locations.length, setSelected, setIsOpen]);

  const handleLocationClick = (location: Location, index: number) => {
    setSelected(index);
    setSearchValue(location.name);
    setIsOpen(false);
    onLocationSelect?.(location);
  };


  const showNoResults = isOpen && locations.length === 0 && !isLoading && searchValue.length >= 2;

  return (
    <div className="relative w-[524px]" ref={dropdownRef}>
      <SearchBar
        value={searchValue}
        onChange={setSearchValue}
        onFocus={() => {
          if (locations.length > 0) {
            setIsOpen(true);
          }
        }}
      />

      {isOpen && locations.length > 0 && (
        <div className="absolute top-[52px] w-full bg-neutral-800 rounded-lg p-2 space-y-2 shadow-lg z-50">
          {locations.map((location, index) => (
            <div
              key={location.id}
              onClick={() => handleLocationClick(location, index)}
              className={`
                w-full min-h-[39px] rounded-lg flex flex-col justify-center px-3 cursor-pointer transition-colors
                ${
                  selected === index
                    ? "bg-neutral-700 hover:bg-neutral-600"
                    : "hover:bg-neutral-700"
                }
              `}
            >
              <span className="text-white text-sm font-medium">
                {location.name}
              </span>
              <span className="text-neutral-400 text-xs">
                {formatLocationDetails(location)}
              </span>
            </div>
          ))}
        </div>
      )}

      {showNoResults && (
        <div className="absolute top-[52px] w-full bg-neutral-800 rounded-lg p-4 shadow-lg z-50">
          <span className="text-neutral-400 text-sm">
            No locations found
          </span>
        </div>
      )}
    </div>
  );
}