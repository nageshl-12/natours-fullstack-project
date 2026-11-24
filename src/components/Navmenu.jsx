import { Link } from 'react-router-dom';

export default function Navmenu() {
  return (
    <>
      <Link
        className="text-white flex gap-3 md:gap-5 items-center text-sm md:text-lg"
        to="/login"
      >
        <button className="cursor-pointer">Login</button>
        <button className="md:px-4 md:py-2 px-3 py-1 rounded-full border border-gray cursor-pointer">
          Sign Up
        </button>
      </Link>
    </>
  );
}
