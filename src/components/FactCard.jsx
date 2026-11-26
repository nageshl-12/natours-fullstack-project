import { Calendar, GraphPath } from 'lucide-react';
import FactsList from './FactList';

export default function FactCard() {
  return (
    <div className="border-b border-charcoal/30 py-5">
      <h1 className="text-2xl font-bold text-green uppercase">Quick facts</h1>
      <div className="py-3 px-2 space-y-5">
        <FactsList icon={Calendar} label="Next date" value="24 apr 2027" />
        <FactsList icon={GraphPath} label="Difficulty" value="Easy" />
        <FactsList icon={Calendar} label="Participants" value="25 People" />
        <FactsList icon={Calendar} label="Rating" value="4.6/5" />
      </div>
    </div>
  );
}
