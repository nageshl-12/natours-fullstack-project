import { X } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, setShowMenu }) {
  const [close, setClose] = useState(false);
  return createPortal(
    <div
      className={`fixed inset-0 z-50 w-full h-full backdrop-blur-xs flex justify-end bg-black/50 ${close && 'animate-fade-out animate-duration-100'}`}
    >
      <button
        onClick={() => {
          setClose(true);
          setTimeout(() => setShowMenu(false), 90);
        }}
        className="fixed z-1000 top-5 right-4 cursor-pointer animate-flip-in-y animate-duration-300"
      >
        <X color="white" size={21} />
      </button>
      <div
        className={`w-[70%] h-full bg-charcoal flex justify-center items-center ${
          close
            ? 'animate-fade-out-left animate-duration-300'
            : 'animate-fade-in-left animate-duration-300'
        }`}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
