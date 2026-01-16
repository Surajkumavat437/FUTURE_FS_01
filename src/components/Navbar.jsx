import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
      <div className="bg-[#0E0E14]/80 backdrop-blur-xl border border-white/10 rounded-xl px-6 py-4 flex items-center justify-between shadow-[0_0_25px_rgba(124,124,255,0.15)]">

        {/* Logo */}
       <div className="w-25 h-8">
         <a
          href="#home"
          className="text-lg font-semibold text-white tracking-wide"
        >
          <img src="/images/mylogo.png" alt="my logo " className="w-full h-full object-contain" />
        </a>
       </div>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-400">
          {["About", "Skills", "Projects", "Education", "Contact"].map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#7C7CFF] hover:after:w-full active:scale-95  after:transition-all duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden text-xl text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-3 transition-all duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="bg-[#0E0E14]/90 backdrop-blur-xl border border-white/10 rounded-xl py-6 shadow-[0_0_25px_rgba(124,124,255,0.12)]">
          <ul className="flex flex-col items-center gap-5 text-gray-400 text-sm">
            {["About", "Skills", "Projects", "Education", "Contact"].map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
