export default function Icon({ icon, children }) {
  const Icon = icon;
  return (
    <span className="text-slate flex gap-2 items-center font-semibold text-sm">
      <Icon size={17} /> {children}
    </span>
  );
}
