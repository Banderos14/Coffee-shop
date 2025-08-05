import Logo from '../assets/Logo.svg';



const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex flex-col items-center gap-8 mb-[60px]">
        {/* Block over navbar */}
        <div className="w-full bg-[#ffecb8] border-b border-green-900/10 px-1 py-1.5 flex items-center relative">    
          <div className="flex-1 text-center text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">
            Buy one coffee, get one free — this week only (September 14–20)
          </div>
          <a href="" className="p-1 ml-auto">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.64028 9.10969C9.67512 9.14453 9.70276 9.18589 9.72161 9.23142C9.74047 9.27694 9.75017 9.32573 9.75017 9.375C9.75017 9.42427 9.74047 9.47307 9.72161 9.51859C9.70276 9.56411 9.67512 9.60547 9.64028 9.64031C9.60544 9.67516 9.56407 9.70279 9.51855 9.72165C9.47303 9.7405 9.42424 9.75021 9.37497 9.75021C9.32569 9.75021 9.2769 9.7405 9.23138 9.72165C9.18586 9.70279 9.14449 9.67516 9.10965 9.64031L5.99996 6.53016L2.89028 9.64031C2.81991 9.71068 2.72448 9.75021 2.62496 9.75021C2.52545 9.75021 2.43002 9.71068 2.35965 9.64031C2.28929 9.56995 2.24976 9.47451 2.24976 9.375C2.24976 9.27549 2.28929 9.18005 2.35965 9.10969L5.46981 6L2.35965 2.89031C2.28929 2.81995 2.24976 2.72451 2.24976 2.625C2.24976 2.52549 2.28929 2.43005 2.35965 2.35969C2.43002 2.28932 2.52545 2.24979 2.62496 2.24979C2.72448 2.24979 2.81991 2.28932 2.89028 2.35969L5.99996 5.46984L9.10965 2.35969C9.18002 2.28932 9.27545 2.24979 9.37497 2.24979C9.47448 2.24979 9.56991 2.28932 9.64028 2.35969C9.71064 2.43005 9.75017 2.52549 9.75017 2.625C9.75017 2.72451 9.71064 2.81995 9.64028 2.89031L6.53012 6L9.64028 9.10969Z" fill="#1D4E1A"/>
            </svg>
          </a>
        </div>

         {/* Navbar */}
         <div className="relative p-3 t-3 bg-[#1d4e1a] rounded-full flex justify-start items-center gap-10">
            <div className="flex justify-end items-center gap-8">
              <div className="px-2 pt-0.5 pb-1 flex justify-center items-center">
                <a href="/menu" className="justify-start text-[#ffecb8] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Menu</a>
              </div>
              <div className="px-2 pt-0.5 pb-1 flex justify-center items-center">
                <div className="justify-start text-[#ffecb8] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Locations</div>
              </div>
            </div>
            <div><a href="/"><img src={Logo} alt="Logo" /></a></div>
            <div className="flex justify-start items-center gap-8">
              <div className="px-2 pt-0.5 pb-1 flex justify-center items-center">
                <div className="justify-start text-[#ffecb8] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">About Us</div>
              </div>
              <div className="px-2 pt-0.5 pb-1 flex justify-center items-center">
                <div className="justify-start text-[#ffecb8] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">News</div>
              </div>
            </div>
          </div>
      </div>
  );
};

export default Navbar;