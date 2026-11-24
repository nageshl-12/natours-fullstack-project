import { ArrowRight, CalendarRange, Flag, MapPin, Users2 } from 'lucide-react';
import Icon from './Icon';
import { format } from 'date-fns';
import { formatCurrency } from '../utils/helpers';
import { Link, useNavigate } from 'react-router-dom';
export default function TourCard({ tour }) {
  const {
    description,
    difficulty,
    duration,
    locations,
    _id,
    imageCover,
    images,
    maxGroupSize,
    name,
    price,
    ratingsAverage,
    ratingsQuantity,
    startDates,
    startLocation: { description: location },
    summary,
  } = tour;
  const navigate = useNavigate();
  return (
    <div className="border border-gray-200 rounded-2xl md:w-88 w-80 overflow-hidden animate-fade-in-up animate-duration-500">
      <div
        onClick={() => navigate(`/tour/${_id}`)}
        className="relative rounded-tr-2xl rounded-tl-2xl cursor-pointer"
      >
        <img
          className="md:h-60 h-50 rounded-tr-2xl rounded-tl-2xl"
          src={'/img.jpg'}
          alt={name}
        />
        <span className="absolute bg-green/30 inset-0"></span>
        <div className="absolute z-10 bottom-1 right-1.5 gap-1 flex flex-col py-2 uppercase text-lg text-white font-semibold rounded-sm">
          <span className="flex gap-1 bg-green w-fit px-2">
            <p>{name.split(' ').at(0)}</p>
            <p>{name.split(' ').at(1)}</p>
          </span>
          <span className="bg-green  w-fit px-2">{name.split(' ').at(2)}</span>
        </div>
      </div>
      <div className="px-4 py-2 ">
        <span className="flex font-semibold uppercase text-charcoal/90 gap-1 text-sm">
          <p>{difficulty}</p>
          <p>
            {duration}-{duration > 1 ? 'days' : 'day'}
          </p>

          <p>Tour</p>
        </span>
        <div className="md:py-3 py-2">
          <p className="text-xs font-semibold text-slate italic">{summary}</p>
        </div>
        <div className="text-slate grid grid-cols-2 gap-2 py-4">
          <Icon icon={MapPin}>{location}</Icon>
          <Icon icon={CalendarRange}>
            {format(startDates.at(0), 'dd MMM yyy')}{' '}
          </Icon>
          <Icon icon={Users2}>{maxGroupSize} People</Icon>
          <Icon icon={Flag}>{locations.length} Stops</Icon>
        </div>
        <div className="border-t border-gray-300 md:py-4 py-3 flex justify-between items-center md:mt-1">
          <span className="space-y-1">
            <span className="flex gap-1 items-center">
              <p className="font-semibold">{formatCurrency(price)}</p>
              <p className="text-xs">/ Person</p>
            </span>
            <span className="flex gap-1 text-sm">
              <p className="font-semibold">{ratingsAverage}</p> rating
              <p>({ratingsQuantity})</p>
            </span>
          </span>
          <Link to={`tour/${_id}`}>
            <button className="px-2 flex gap-1 py-1.5 items-center cursor-pointer hover:scale-102 hover:-translate-y-0.5 transition-all duration-300 hover:bg-green bg-forest text-white rounded-md">
              Details <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
