import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navmenu from './Navmenu';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="relative z-50 flex items-center justify-between bg-charcoal px-4 py-3 md:py-1">
      <Logo />

      <Link to="/">
        <img
          className="hidden h-16 translate-x-7 md:block"
          src="/logo.png"
          alt="Logo"
        />
      </Link>

      {showMenu && (
        <div className="absolute left-0 top-full flex w-full flex-col items-center rounded-b-2xl bg-charcoal py-6 shadow-lg md:hidden">
          <Navmenu />
        </div>
      )}

      <button
        className="animate-flip-in-y md:hidden"
        onClick={() => setShowMenu((prev) => !prev)}
        aria-label={showMenu ? 'Close menu' : 'Open menu'}
      >
        {showMenu ? (
          <X color="red" size={21} strokeWidth={3} />
        ) : (
          <Menu color="white" size={20} />
        )}
      </button>

      <div className="hidden md:flex">
        <Navmenu />
      </div>
    </nav>
  );
}
