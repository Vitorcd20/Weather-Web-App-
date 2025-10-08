import SearchIcon from "../assets/images/icon-search.svg";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  onFocus,
  placeholder = "Search for a place",
}: SearchBarProps) {
  return (
    <div className="w-full h-[48px] bg-neutral-800 hover:bg-neutral-700 rounded-lg flex items-center px-4 gap-3">
      <img src={SearchIcon} alt="search" className="w-5 h-5" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-neutral-400"
      />
    </div>
  );
}
