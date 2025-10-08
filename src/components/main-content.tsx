import { DailyForecastCard } from "./daily-forecast";
import { TempetureCard } from "./tempeture-card";
import { SearchDropdown } from "./ui/search-dropdown";
import { WeatherParameterCard } from "./weather-parameter-card";
import { HourlyForecast } from "./hourly-forecast";

export function MainContent() {
  return (
    <div className="flex flex-col items-center gap-12 w-full max-w-[1216px] mx-auto px-4">
      <div className="flex justify-center gap-4 w-full">
        <SearchDropdown />
        <button className="w-[114px] h-[46px] bg-blue-500 rounded-xl px-6 text-white text-base font-medium hover:bg-blue-600 transition-colors flex items-center justify-center cursor-pointer">
          Search
        </button>
      </div>
      
      <div className="flex gap-8 w-full">
        <div className="flex-1 max-w-[800px] flex flex-col gap-8">
          <TempetureCard />
          
          <div className="gap-1">
            <WeatherParameterCard />
          </div>
          
          <div>
            <DailyForecastCard />
          </div>
        </div>
        
        <div>
          <HourlyForecast />
        </div>
      </div>
    </div>
  );
}