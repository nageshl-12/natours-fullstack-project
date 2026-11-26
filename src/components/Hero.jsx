import { Clock, MapPin } from 'lucide-react';
export default function Hero() {
  return (
    <div
      className={`w-full bg-[url('/img.jpg')] bg-cover [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_60%,0_100%)] h-fit bg-center flex flex-col justify-center items-center py-26 `}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col uppercase text-white font-bold text-4xl gap-2">
          <span className="bg-green/40 px-4 py-1">The forest</span>
          <span className="bg-green/40 px-4 py-1">Hiker tour</span>
        </div>
        <div className="flex gap-10 font-bold text-white">
          <span className="flex gap-1">
            <Clock color="white" />5 days
          </span>
          <span className="flex gap-1">
            <MapPin color="white" /> Banff, CAN
          </span>
        </div>
      </div>
    </div>
  );
}
