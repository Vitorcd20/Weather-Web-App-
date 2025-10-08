import TempetureCardImg from "../assets/images/bg-today-large.svg";

export function TempetureCard() {
  return (
    <div className="w-[800px] h-[286px] relative rounded-xl overflow-hidden">
      <img 
        src={TempetureCardImg} 
        alt="background" 
        className="w-full h-full object-cover absolute inset-0"
      />
      
      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-white text-3xl font-semibold mb-2">Berlin, Germany</h2>
            <p className="text-white/80 text-base">Tuesday, Aug 5, 2025</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-4xl"></span>
            </div>
            <div className="text-white text-8xl font-light">20°</div>
          </div>
        </div>
      </div>
    </div>
  );
}