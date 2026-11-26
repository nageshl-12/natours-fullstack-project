export default function GuideList({ name, image, role }) {
  return (
    <span className="grid grid-cols-[auto_1fr_1fr] items-center gap-3">
      <img className="h-10 w-10  rounded-full" src={image} alt={name} />
      <h1 className="font-semibold text-charcoal">{name}</h1>
      <p>{role}</p>
    </span>
  );
}
