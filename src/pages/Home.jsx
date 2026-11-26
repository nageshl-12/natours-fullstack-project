import { useQuery } from '@tanstack/react-query';
import TourCard from '../components/TourCard';
import { getTours } from '../utils/api';
import Spinner from '../components/Spinner';

export default function Home() {
  const { data: tours, isPending } = useQuery({
    queryKey: ['tours'],
    queryFn: getTours,
  });
  if (isPending) return <Spinner />;
  return (
    <div className="px-5 py-15 md:grid md:grid-cols-3 md:gap-15 justify-items-center space-y-6 w-full max-w-7xl mx-auto">
      {tours?.tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}
