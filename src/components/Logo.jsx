import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link className="md:text-2xl text-lg text-white font-semibold" to="/">
      NATOURS
    </Link>
  );
}
