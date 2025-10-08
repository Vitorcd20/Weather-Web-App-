import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import IconDropdown from "../assets/images/icon-dropdown.svg";
import IconUnits from "../assets/images/icon-units.svg";
import { UnitsDropdown, type PreciptationUnit, type TemperatureUnit, type WindSpeedUnit } from "./ui/units-dropdown";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('celsius');
  const [windSpeedUnit, setWindSpeedUnit] = useState<WindSpeedUnit>('kmh');
  const [preciptationUnit, setPreciptationUnit] = useState<PreciptationUnit>('mm');

  return (
    <div className="flex items-center justify-between w-[1216px]">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-[119px] h-[43px] bg-neutral-800 rounded-lg flex items-center justify-between px-4 py-3"
        >
          <img src={IconUnits} alt="units" className="w-4 h-4" />
          <span className="text-white text-sm">Units</span>
          <img src={IconDropdown} alt="dropdown" className="w-4 h-4" />
        </button>
        
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 z-10">
            <UnitsDropdown 
              temperatureUnit={temperatureUnit}
              windSpeedUnit={windSpeedUnit}
              preciptationUnit={preciptationUnit}
              onTemperatureChange={setTemperatureUnit}
              onWindSpeedChange={setWindSpeedUnit}
              onPreciptationChange={setPreciptationUnit}
              onClose={() => setIsDropdownOpen(false)} 
            />
          </div>
        )}
      </div>
    </div>
  );
}