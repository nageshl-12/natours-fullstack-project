import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function Applayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] font-poppins w-full h-dvh">
      <header>
        <Navbar />
      </header>

      <main className="overflow-y-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}
