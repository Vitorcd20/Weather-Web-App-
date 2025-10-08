export function WeatherParameterCard() {
  return (
    <div className="w-[800px] h-[118px] flex gap-6">
      <div className="w-[182px] h-[118px] rounded-lg bg-neutral-600 p-5">
        <span className="text-neutral-200 text-sm block mb-2">Feels Like</span>
        <span className="text-white text-3xl font-semibold">18°</span>
      </div>
      <div className="w-[182px] h-[118px] rounded-lg bg-neutral-600 p-5">
        <span className="text-neutral-200 text-sm block mb-2">Humidity</span>
        <span className="text-white text-3xl font-semibold">46%</span>
      </div>
      <div className="w-[182px] h-[118px] rounded-lg bg-neutral-600 p-5">
        <span className="text-neutral-200 text-sm block mb-2">Wind</span>
        <span className="text-white text-3xl font-semibold">9 mph</span>
      </div>
      <div className="w-[182px] h-[118px] rounded-lg bg-neutral-600 p-5">
        <span className="text-neutral-200 text-sm block mb-2">Precipitation</span>
        <span className="text-white text-3xl font-semibold">0 in</span>
      </div>
    </div>
  );
}