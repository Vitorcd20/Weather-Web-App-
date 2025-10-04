import Logo from "../assets/images/logo.svg";
import IconDropdown from "../assets/images/icon-dropdown.svg";
import IconUnits from "../assets/images/icon-units.svg";

export function Header() {
  return (
    <div className="flex items-center justify-between w-[1216px]">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Units Dropdown */}
      <div className="w-[119px] h-[43px] bg-neutral-800 rounded-lg flex items-center justify-between px-4 py-3">
        <img src={IconUnits} alt="units" className="w-4 h-4" />
        <button className="text-white text-sm">Units</button>
        <img src={IconDropdown} alt="dropdown" className="w-4 h-4" />
      </div>
    </div>
  );
}