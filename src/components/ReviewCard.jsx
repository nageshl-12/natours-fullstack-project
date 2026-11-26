import ReviewList from './ReviewList';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ReviewCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [1, 2, 3];

  function nextReview() {
    setActiveIndex((index) => (index + 1) % reviews.length);
  }

  function prevReview() {
    setActiveIndex((index) => (index - 1 + reviews.length) % reviews.length);
  }

  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-green-500 [clip-path:polygon(0_9%,100%_0,100%_90%,0_100%)]
        md:[clip-path:polygon(0_15%,100%_0,100%_85%,0_100%)] "
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <h2 className="mb-10 text-2xl font-bold text-white md:text-3xl">
          WHAT OUR TRAVELERS SAY
        </h2>

        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewList key={review} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {reviews.map((review) => (
                <div key={review} className="w-full shrink-0 px-1">
                  <ReviewList />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              onClick={prevReview}
              className="rounded-full bg-white p-3 text-green-600 shadow-md"
              aria-label="Previous review"
            >
              <ArrowLeft size={20} />
            </button>

            <span className="font-semibold text-white">
              {activeIndex + 1} / {reviews.length}
            </span>

            <button
              onClick={nextReview}
              className="rounded-full bg-white p-3 text-green-600 shadow-md"
              aria-label="Next review"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
