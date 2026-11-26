export default function FactsList({ label, value, icon }) {
  const Icon = icon;
  return (
    <span className="flex items-center">
      <p className="grow font-semibold text-charcoal uppercase flex gap-1 items-center">
        <Icon color="green" /> {label}
      </p>
      <p className="flex-start">{value}</p>
    </span>
  );
}
