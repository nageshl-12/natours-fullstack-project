import GuideList from './GuideList';

export default function GuideCard() {
  return (
    <div className="py-5 space-y-3">
      <h1 className="text-2xl text-green uppercase font-bold">
        Your Tour Guides
      </h1>
      <div className="space-y-3">
        <GuideList name="John" image="/img.jpg" role="Lead Guide" />
        <GuideList name="Jonas" image="/img.jpg" role="Lead Guide" />
        <GuideList name="Jane" image="/img.jpg" role="Lead Guide" />
      </div>
    </div>
  );
}
