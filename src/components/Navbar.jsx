import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navmenu from './Navmenu';
import Modal from './Modal';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="bg-charcoal px-4 py-3 md:py-1 flex justify-between items-center">
      <Logo />
      <Link to="/">
        <img
          className="h-16 md:block hidden translate-x-7"
          src="/logo.png"
          alt=""
        />
      </Link>
      {!showMenu && (
        <button
          onClick={() => setShowMenu(true)}
          className="md:hidden block cursor-pointer animate-flip-in-y animate-duration-300"
        >
          <Menu color="white" size={21} />
        </button>
      )}
      {showMenu && (
        <Modal setShowMenu={setShowMenu}>
          <Navmenu />
        </Modal>
      )}
      <div className="hidden md:flex ">
        <Navmenu />
      </div>
    </nav>
  );
}
