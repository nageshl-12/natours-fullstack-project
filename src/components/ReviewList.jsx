import { Star } from 'lucide-react';

export default function ReviewList() {
  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <div className="mb-5 flex items-center gap-4">
        <img
          src="/users/user-1.jpg"
          alt="Eliana Stout"
          className="h-12 w-12 rounded-full object-cover"
        />

        <h3 className="font-semibold text-gray-800">Eliana Stout</h3>
      </div>

      <p className="mb-6 text-sm italic leading-6 text-gray-500">
        An amazing experience! The views were beautiful and the tour was
        perfectly organized. I would definitely recommend this trip to everyone.
      </p>

      <div className="flex justify-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={22} className="text-green-500" />
        ))}
      </div>
    </div>
  );
}
