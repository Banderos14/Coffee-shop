import Navbar from "../components/navbar";
import Order from "../components/order";
import Marquee from "../components/marquee";
import Footer from "../components/footer";


import logo_coffee from "../assets/menu/logo_coffee.png";
import logo_bakery from "../assets/menu/logo_bakery.png";
import logo_cold_drinks from "../assets/menu/logo_cold_drinks.png";
import cold_brew from "../assets/menu/cold_brew.png";
import macchiato from "../assets/menu/macchiato.png";
import espresso from "../assets/menu/espresso.png";
import black_coffee from "../assets/menu/black_coffee.png";
import cappuccino from "../assets/menu/cappuccino.png";
import flat_white from "../assets/menu/Flat_White.png";
import latte from "../assets/menu/latte.png";
import mocha from "../assets/menu/mocha.png";
import americano from "../assets/menu/americano.png";
import virgin_mojito from "../assets/menu/virgin_mojito.png";
import iced_latte from "../assets/menu/iced_latte.png";
import iced_americano from "../assets/menu/iced_americano.png";
import iced_mocha from "../assets/menu/iced_mocha.png";
import iced_tea from "../assets/menu/iced_tea.png";
import bubble_tea from "../assets/menu/bubble_tea.png";
import brownie from "../assets/menu/brownie.png";
import macaroon from "../assets/menu/macaroon.png";
import donut from "../assets/menu/donut.png";
import muffin from "../assets/menu/muffin.png";
import biscotti from "../assets/menu/biscotti.png";



const Menu = () => {
  return (
    <>
    {/* Блок с зеленым фоном */}
      <div className="bg-[#1d4e1a]">
        <Navbar />
          {/* Блок с текстом */}
          <div className="bg-[#1d4e1a] w-full text-[#ffecb8] flex flex-col justify-start items-center gap-3 mb-8">
            <div className="w-full max-w-[680px] text-center justify-center text-[#ffecb8] text-8xl font-normal font-['Calistoga'] leading-[107.52px]">Menu</div>
            <div className="w-full max-w-96 text-center justify-center text-[#ffecb8] text-lg font-normal font-['Cabin_Condensed'] leading-normal tracking-tight">Handcrafted drinks and fresh pastries.</div>
          </div>
          {/* Блок с кнопками */}
          <div className="bg-[#1d4e1a] w-full flex justify-center items-start gap-2.5 mb-[178px]">
            <a href="">
              <div className="px-4 pt-2.5 pb-3 bg-[#ffecb8] rounded-full outline outline-1 outline-offset-[-1px] outline-[#ffecb8] flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-[#1d4e1a] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Our Locations</div>
              </div>
            </a>
            <a href="">
              <div className="px-4 pt-2.5 pb-3 rounded-full outline outline-1 outline-offset-[-1px] outline-[#ffecb8] flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-[#ffecb8] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">About Us</div>
              </div>
            </a>
          </div>
        <Marquee />
        {/* Блок с меню */}
        <div className="w-full bg-[#fcf3d9] self-stretch px-10 pt-28 pb-40 inline-flex flex-col justify-start items-center">
          <div className="w-full max-w-[1200px] inline-flex justify-start items-start gap-6">
            <div className="flex-1 max-w-72 inline-flex flex-col justify-start items-center gap-5">
              <div className="self-stretch inline-flex flex-col justify-start items-center gap-5">
                <div className="self-stretch inline-flex justify-start items-center gap-4">
                    <div className="flex items-center justify-center">
                        <img src={logo_coffee} alt="coffee" />
                    </div>
                    <div className="text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Coffee</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-4 opacity-70">
                    <div className="flex items-center justify-center">
                        <img src={logo_cold_drinks} alt="cold drinks" />
                    </div>
                    <div className="text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Cold Drinks</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-4 opacity-70">
                    <div className="flex items-center justify-center">
                        <img src={logo_bakery} alt="bakery" />
                    </div>
                    <div className="text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Bakery</div>
                </div>
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-16">
              <div className="self-stretch flex flex-col justify-start items-start gap-10">
                <div className="self-stretch pt-10 border-t border-[#1d4e1a]/10 inline-flex justify-start items-end gap-5">
                  <div className="flex-1 justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Coffee</div>
                  <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">9 Items</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-10">
                  <div className="self-stretch inline-flex justify-start items-center gap-6">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 relative bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={cold_brew} />
                        <div className="px-2 pt-0.5 pb-1 left-[16px] top-[16px] absolute bg-amber-100 rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center">
                          <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">New</div>
                        </div>
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Cold Brew</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$6.75</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 relative bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={macchiato} />
                        <div className="px-2 pt-0.5 pb-1 left-[16px] top-[16px] absolute bg-amber-100 rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center">
                          <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">New</div>
                        </div>
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Macchiato</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$6.10</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={espresso} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Espresso</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$4.25</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-6">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={black_coffee} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Black Coffee</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$4.90</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={cappuccino} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Cappuccino</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$5.25</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={flat_white} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Flat White</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$5.50</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-6">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={latte} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Latte</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$4.80</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={mocha} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Mocha</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$7.15</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={americano} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Americano</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$5.30</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-10">
                <div className="self-stretch pt-10 border-t border-[#1d4e1a]/10 inline-flex justify-start items-end gap-5">
                  <div className="flex-1 justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Cold Drinks</div>
                  <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">6 Items</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-10">
                  <div className="self-stretch inline-flex justify-start items-center gap-6">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 relative bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={virgin_mojito} />
                        <div className="px-2 pt-0.5 pb-1 left-[16px] top-[16px] absolute bg-amber-100 rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center">
                          <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">New</div>
                        </div>
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Virgin Mojito</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$6.20</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={iced_latte} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Iced Latte</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$4.45</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={iced_americano} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Iced Americano</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$3.95</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-6">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={iced_mocha} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Iced Mocha</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$5.75</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={iced_tea} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Iced Tea</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$4.35</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={bubble_tea} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Bubble Tea</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$6.75</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-10">
                <div className="self-stretch pt-10 border-t border-[#1d4e1a]/10 inline-flex justify-start items-end gap-5">
                  <div className="flex-1 justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Bakery</div>
                  <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">5 Items</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-10">
                  <div className="self-stretch inline-flex justify-start items-center gap-6">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 relative bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={brownie} />
                        <div className="px-2 pt-0.5 pb-1 left-[16px] top-[16px] absolute bg-amber-100 rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center">
                          <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">New</div>
                        </div>
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Brownie</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$2.15</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={macaroon} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Macaroon</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$2.60</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={donut} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Donut</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$1.40</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-6">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={muffin} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Muffin</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$1.80</div>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                        <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={biscotti} />
                      </div>
                      <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                        <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Biscotti</div>
                        <div className="justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$1.50</div>
                      </div>
                    </div>
                    <div className="flex-1 self-stretch" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Блок с заказом */}
        <Order />
        <Marquee />
      <Footer />
    </div>
    </>
  );
}

export default Menu;