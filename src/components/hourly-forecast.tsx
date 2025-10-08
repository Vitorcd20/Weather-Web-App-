import IconOvercast from '../assets/images/icon-overcast.webp';
import IconPartlyCloudy from '../assets/images/icon-partly-cloudy.webp';
import IconRain from '../assets/images/icon-rain.webp';

export function HourlyForecast() {
  const hourlyData = [
    { time: '3 PM', temp: 20, icon: IconOvercast },
    { time: '4 PM', temp: 20, icon: IconPartlyCloudy },
    { time: '5 PM', temp: 20, icon: IconPartlyCloudy },
    { time: '6 PM', temp: 19, icon: IconOvercast },
    { time: '7 PM', temp: 18, icon: IconRain },
    { time: '8 PM', temp: 17, icon: IconRain },
    { time: '9 PM', temp: 16, icon: IconOvercast },
    { time: '10 PM', temp: 16, icon: IconOvercast },
  ];

  return (
    <div className="w-[384px] h-[693px] bg-neutral-800 not-visited:rounded-lg p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-1xl font-medium text-white">Hourly forecast</h2>
        <button className="px-4 py-2 bg-neutral-700 text-white text-base rounded-lg hover:bg-[#5a5f7f] transition-colors flex items-center gap-2">
          Tuesday
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="flex flex-col gap-3">
        {hourlyData.map((hour, index) => (
          <div 
            key={index}
            className="w-full h-[60px] bg-neutral-700 rounded-lg px-4 py-[10px] flex items-center gap-6"
          >
            <img src={hour.icon} alt="" className="w-[40px] h-[40px]" />
            <span className="text-1xl font-medium text-white w-24">{hour.time}</span>
            <span className="text-1xl font-medium text-white ml-auto">{hour.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}