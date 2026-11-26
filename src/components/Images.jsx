import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Images({ imageData }) {
  const [position, setPosition] = useState(0);

  if (!imageData?.length) return null;

  const currentImage = imageData[position];

  function prevImage() {
    setPosition((pos) => Math.max(0, pos - 1));
  }

  function nextImage() {
    setPosition((pos) => Math.min(imageData.length - 1, pos + 1));
  }

  return (
    <>
      <div className="px-2 md:hidden">
        <div className="relative h-80 overflow-hidden rounded-lg">
          {/* Image slider */}
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${position * 100}%)`,
            }}
          >
            {imageData.map((data) => (
              <img
                key={data.image}
                src={data.image}
                alt={data.name}
                className="h-full w-full shrink-0 object-cover"
              />
            ))}
          </div>

          {/* Previous button */}
          <button
            onClick={prevImage}
            disabled={position === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2
        rounded-full bg-white p-2 shadow
        disabled:opacity-40"
          >
            <ArrowLeft />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            disabled={position === imageData.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2
        rounded-full bg-white p-2 shadow
        disabled:opacity-40"
          >
            <ArrowRight />
          </button>

          {/* Image counter */}
          <div
            className="absolute bottom-3 right-3 rounded-full
      bg-black/60 px-3 py-1 text-sm text-white"
          >
            {position + 1} / {imageData.length}
          </div>
        </div>
      </div>
    </>
  );
}
