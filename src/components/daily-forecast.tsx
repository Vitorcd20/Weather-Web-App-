import IconRain from '../assets/images/icon-rain.webp';
import IconDrizzle from '../assets/images/icon-drizzle.webp';
import IconFog from '../assets/images/icon-fog.webp';
import IconOvercast from '../assets/images/icon-overcast.webp';
import IconPartlyCloudy from '../assets/images/icon-partly-cloudy.webp';

export function DailyForecastCard() {
  const forecast = [
    { day: 'Tue', icon: IconRain, high: 68, low: 57 },
    { day: 'Wed', icon: IconDrizzle, high: 70, low: 59 },
    { day: 'Thu', icon: IconPartlyCloudy, high: 75, low: 57 },
    { day: 'Fri', icon: IconOvercast, high: 77, low: 55 },
    { day: 'Sat', icon: IconRain, high: 70, low: 59 },
    { day: 'Sun', icon: IconRain, high: 77, low: 61 },
    { day: 'Mon', icon: IconFog, high: 75, low: 69 }
  ];

  return (
    <div className="w-full">
      <h1 className="text-xl font-medium text-white mb-6">Daily forecast</h1>
      <div className="flex gap-4">
        {forecast.map((day, index) => {
          return (
            <div 
              key={index}
              className="flex-1 bg-[#1e2441] rounded-2xl p-4 flex flex-col items-center gap-4"
            >
              <p className="text-base font-normal text-white">{day.day}</p>
              <img src={day.icon} alt="" className="w-12 h-12" />
              <div className="flex gap-3 text-white">
                <span className="text-lg font-medium">{day.high}°</span>
                <span className="text-lg font-normal text-gray-400">{day.low}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}