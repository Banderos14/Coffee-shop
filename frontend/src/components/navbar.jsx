import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

// Only "Menu" has a route for now; the rest are placeholders (same as before).
const leftItems = [{ label: 'Menu', to: '/menu' }, { label: 'Locations' }];
const rightItems = [{ label: 'About Us' }, { label: 'News' }];

const textStyle = "text-[#ffecb8] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight";

const NavItem = ({ item, className, onClick }) =>
  item.to ? (
    <Link to={item.to} className={className} onClick={onClick}>{item.label}</Link>
  ) : (
    <span className={className}>{item.label}</span>
  );

const Navbar = ({ showBanner: bannerEnabled = true, className = "mb-10 lg:mb-[60px]" }) => {
  const [showBanner, setShowBanner] = useState(bannerEnabled);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    // The sticky wrapper spans the full width; let clicks pass through its empty areas.
    <div className={`sticky top-0 z-50 w-full flex flex-col items-center pointer-events-none ${className}`}>
      {/* Block over navbar */}
      {showBanner && (
        <div className="pointer-events-auto w-full bg-[#ffecb8] border-b border-green-900/10 px-2 py-1.5 flex items-center gap-1 relative">
          <div className="flex-1 pl-8 text-center text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-tight sm:leading-none tracking-wide">
            Buy one coffee, get one free — this week only (September 14–20)
          </div>
          <button
            type="button"
            onClick={() => setShowBanner(false)}
            className="shrink-0 w-8 h-8 -my-1 flex items-center justify-center rounded-full"
            aria-label="Close banner"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.64028 9.10969C9.67512 9.14453 9.70276 9.18589 9.72161 9.23142C9.74047 9.27694 9.75017 9.32573 9.75017 9.375C9.75017 9.42427 9.74047 9.47307 9.72161 9.51859C9.70276 9.56411 9.67512 9.60547 9.64028 9.64031C9.60544 9.67516 9.56407 9.70279 9.51855 9.72165C9.47303 9.7405 9.42424 9.75021 9.37497 9.75021C9.32569 9.75021 9.2769 9.7405 9.23138 9.72165C9.18586 9.70279 9.14449 9.67516 9.10965 9.64031L5.99996 6.53016L2.89028 9.64031C2.81991 9.71068 2.72448 9.75021 2.62496 9.75021C2.52545 9.75021 2.43002 9.71068 2.35965 9.64031C2.28929 9.56995 2.24976 9.47451 2.24976 9.375C2.24976 9.27549 2.28929 9.18005 2.35965 9.10969L5.46981 6L2.35965 2.89031C2.28929 2.81995 2.24976 2.72451 2.24976 2.625C2.24976 2.52549 2.28929 2.43005 2.35965 2.35969C2.43002 2.28932 2.52545 2.24979 2.62496 2.24979C2.72448 2.24979 2.81991 2.28932 2.89028 2.35969L5.99996 5.46984L9.10965 2.35969C9.18002 2.28932 9.27545 2.24979 9.37497 2.24979C9.47448 2.24979 9.56991 2.28932 9.64028 2.35969C9.71064 2.43005 9.75017 2.52549 9.75017 2.625C9.75017 2.72451 9.71064 2.81995 9.64028 2.89031L6.53012 6L9.64028 9.10969Z"
                fill="#1D4E1A"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Navbar — desktop / tablet pill */}
      <nav aria-label="Main" className="pointer-events-auto hidden md:flex relative mt-8 p-3 bg-[#1d4e1a] rounded-full justify-start items-center gap-10">
        <div className="flex justify-end items-center gap-8">
          {leftItems.map((item) => (
            <div key={item.label} className="px-2 pt-0.5 pb-1 flex justify-center items-center">
              <NavItem item={item} className={`justify-start ${textStyle}`} />
            </div>
          ))}
        </div>
        <div>
          <Link to="/"><img src={Logo} alt="Logo" width="40" height="40" /></Link>
        </div>
        <div className="flex justify-start items-center gap-8">
          {rightItems.map((item) => (
            <div key={item.label} className="px-2 pt-0.5 pb-1 flex justify-center items-center">
              <NavItem item={item} className={`justify-start ${textStyle}`} />
            </div>
          ))}
        </div>
      </nav>

      {/* Navbar — phone pill: menu toggle · logo · Menu link */}
      <nav aria-label="Main" className="pointer-events-auto md:hidden relative mt-6 p-1.5 bg-[#1d4e1a] rounded-full flex items-center gap-2">
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="w-11 h-11 flex items-center justify-center rounded-full text-[#ffecb8] active:bg-[#ffecb8]/10"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
        <Link to="/" onClick={closeMenu} className="flex items-center justify-center">
          <img src={Logo} alt="Logo" width="40" height="40" />
        </Link>
        <Link
          to="/menu"
          onClick={closeMenu}
          className={`h-11 px-3 flex items-center rounded-full active:bg-[#ffecb8]/10 ${textStyle}`}
        >
          Menu
        </Link>

        {menuOpen && (
          <div
            id="mobile-nav-panel"
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[calc(100vw-2rem)] max-w-xs max-h-[calc(100dvh-7rem)] overflow-y-auto p-2 bg-[#1d4e1a] rounded-3xl outline outline-1 outline-[#ffecb8]/15 shadow-[0_16px_40px_rgba(0,0,0,0.35)] flex flex-col"
          >
            {[{ label: 'Home', to: '/' }, ...leftItems, ...rightItems].map((item) => (
              <NavItem
                key={item.label}
                item={item}
                onClick={closeMenu}
                className={`min-h-12 px-4 flex items-center rounded-2xl ${item.to ? 'active:bg-[#ffecb8]/10' : ''} ${textStyle}`}
              />
            ))}
          </div>
        )}
      </nav>

      {/* Tap outside the open panel to close it */}
      {menuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-0 -z-10" aria-hidden="true" onClick={closeMenu} />
      )}
    </div>
  );
};

export default Navbar;
