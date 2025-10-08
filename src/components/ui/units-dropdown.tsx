import CheckmarkIcon from '../../assets/images/icon-checkmark.svg'

type TemperatureUnit = 'celsius' | 'fahrenheit'
type WindSpeedUnit = 'kmh' | 'mph'
type PreciptationUnit = 'mm' | 'in'

interface OptionItemProps {
  label: string
  isSelected: boolean
  onClick: () => void
}

function OptionItem({ label, isSelected, onClick }: OptionItemProps) {
  return (
    <div
      onClick={onClick}
      className={`
        w-[198px] h-[39px] px-2 flex items-center justify-between rounded-[8px] 
        cursor-pointer transition-colors
        ${isSelected 
          ? "bg-neutral-700 hover:bg-neutral-600" 
          : "hover:bg-neutral-700"
        }
      `}
    >
      <p className="text-neutral-0 font-body">{label}</p>
      {isSelected && (
        <img 
          src={CheckmarkIcon}
          alt="selected" 
          className="w-4 h-4" 
        />
      )}
    </div>
  )
}

interface UnitsDropdownProps {
  temperatureUnit: TemperatureUnit
  windSpeedUnit: WindSpeedUnit
  preciptationUnit: PreciptationUnit
  onTemperatureChange: (unit: TemperatureUnit) => void
  onWindSpeedChange: (unit: WindSpeedUnit) => void
  onPreciptationChange: (unit: PreciptationUnit) => void
  onClose?: () => void
}

export function UnitsDropdown({ 
  temperatureUnit,
  windSpeedUnit,
  preciptationUnit,
  onTemperatureChange,
  onWindSpeedChange,
  onPreciptationChange,
  onClose 
}: UnitsDropdownProps) {

  const handleOptionClick = (callback: () => void) => {
    callback()
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className="w-[214px] h-[412px] bg-neutral-800 rounded-[12px] p-2 flex flex-col gap-1">
      
      <div className="w-[198px] h-[39px] px-2 flex items-center">
        <p className="text-neutral-0 font-body">Switch to Imperial</p>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-neutral-300 font-body text-sm px-2 py-1">Temperature</h2>
        <OptionItem
          label="Celsius (°C)"
          isSelected={temperatureUnit === 'celsius'}
          onClick={() => handleOptionClick(() => onTemperatureChange('celsius'))}
        />
        <OptionItem
          label="Fahrenheit (°F)"
          isSelected={temperatureUnit === 'fahrenheit'}
          onClick={() => handleOptionClick(() => onTemperatureChange('fahrenheit'))}
        />
      </div>

      <div className="border-t border-neutral-600"></div>

      <div className="flex flex-col gap-1">
        <h2 className="text-neutral-300 font-body text-sm px-2 py-1">Wind speed</h2>
        <OptionItem
          label="km/h"
          isSelected={windSpeedUnit === 'kmh'}
          onClick={() => handleOptionClick(() => onWindSpeedChange('kmh'))}
        />
        <OptionItem
          label="mph"
          isSelected={windSpeedUnit === 'mph'}
          onClick={() => handleOptionClick(() => onWindSpeedChange('mph'))}
        />
      </div>

      <div className="border-t border-neutral-600"></div>

      <div className="flex flex-col gap-1">
        <h2 className="text-neutral-300 font-body text-sm px-2 py-1">Preciptation</h2>
        <OptionItem
          label="Millimeters (mm)"
          isSelected={preciptationUnit === 'mm'}
          onClick={() => handleOptionClick(() => onPreciptationChange('mm'))}
        />
        <OptionItem
          label="Inches (in)"
          isSelected={preciptationUnit === 'in'}
          onClick={() => handleOptionClick(() => onPreciptationChange('in'))}
        />
      </div>

    </div>
  )
}

export type { TemperatureUnit, WindSpeedUnit, PreciptationUnit }