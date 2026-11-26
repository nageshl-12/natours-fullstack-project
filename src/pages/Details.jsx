import FactCard from '../components/FactCard';
import GuideCard from '../components/GuideCard';
import AboutTour from '../components/AboutTour';
import Images from '../components/Images';
import ReviewCard from '../components/ReviewCard';
import Hero from '../components/Hero';

function Details() {
  return (
    <div className="w-full overflow-y-auto pb-20 space-y-6">
      <Hero />
      <div className="w-full md:grid md:grid-cols-[1fr_1fr] flex flex-col md:px-10 px-1 py-8 md:divide-x md:divide-charcoal/30 md:max-w-400 mx-auto">
        <div className="md:px-5 px-2 py-2 md:w-120">
          <FactCard />
          <GuideCard />
        </div>
        <AboutTour />
      </div>
      <Images
        imageData={[
          { image: '/img.jpg', name: 'NA' },
          { image: '/img.jpg', name: 'NA' },
          { image: '/img.jpg', name: 'NA' },
        ]}
      />

      <div className=" w-full h-70"></div>
      <ReviewCard />
      <div></div>
      {/* footer */}
      <footer></footer>
    </div>
  );
}

export default Details;
