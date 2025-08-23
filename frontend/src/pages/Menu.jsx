import { Link } from 'react-router-dom';
import { products } from '../data/productData';
import { useRef } from 'react'

import Navbar from "../components/navbar";
import Order from "../components/order";
import Marquee from "../components/marquee";
import Footer from "../components/footer";


import logo_coffee from "../assets/menu/logo_coffee.png";
import logo_bakery from "../assets/menu/logo_bakery.png";
import logo_cold_drinks from "../assets/menu/logo_cold_drinks.png";



const Menu = () => {

  const coffeeRef = useRef(null)
  const coldRef = useRef(null)
  const bakeryRef = useRef(null)

  const scrollTo = (ref) => {
    if (!ref.current) return
    // Если есть фиксированный navbar, можно учесть оффсет:
    const top = ref.current.getBoundingClientRect().top + window.pageYOffset - 96 // 96px — высота хедера
    window.scrollTo({ top, behavior: 'smooth' })
  }


  
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
                <button onClick={() => scrollTo(coffeeRef)} className="self-stretch inline-flex justify-start items-center gap-4">
                  <img src={logo_coffee} alt="coffee" />
                  <div className="text-[#1d4e1a] text-xl font-['Calistoga']">Coffee</div>
                </button>

                <button onClick={() => scrollTo(coldRef)} className="self-stretch inline-flex justify-start items-center gap-4 opacity-70 hover:opacity-100">
                  <img src={logo_cold_drinks} alt="cold drinks" />
                  <div className="text-[#1d4e1a] text-xl font-['Calistoga']">Cold Drinks</div>
                </button>

                <button onClick={() => scrollTo(bakeryRef)} className="self-stretch inline-flex justify-start items-center gap-4 opacity-70 hover:opacity-100">
                  <img src={logo_bakery} alt="bakery" />
                  <div className="text-[#1d4e1a] text-xl font-['Calistoga']">Bakery</div>
                </button>
              </div>
            </div>

            {/* ☕️ COFFEE */}
          <div ref={coffeeRef}>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-16">
              <div className="self-stretch flex flex-col justify-start items-start gap-10">
                <div className="self-stretch pt-10 border-t border-[#1d4e1a]/10 inline-flex justify-start items-end gap-5">
                  <div className="flex-1 justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Coffee</div>
                  <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">9 Items</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-10">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products
                      .filter((product) => product.category === 'Coffee')
                      .map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                          <div className="inline-flex flex-col justify-start items-start gap-3">
                            <div className="w-full h-72 relative bg-[#1d4e1a] rounded-3xl flex justify-center items-center overflow-hidden">
                              <img
                                className="w-full h-72 object-cover shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]"
                                src={product.image}
                                alt={product.name}
                              />
                              {product.isNew && (
                                <div className="px-2 pt-0.5 pb-1 left-[16px] top-[16px] absolute bg-[#ffecb8] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center">
                                  <div className="text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">New</div>
                                </div>
                              )}
                            </div>
                            <div className="w-full px-2 flex justify-between items-center">
                              <div className="text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">{product.name}</div>
                              <div className="text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">${product.price?.Small}</div>
                            </div>
                          </div>
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

              {/* ☕️ COLD DRINKS */}
            <div ref={coldRef}>
              <div className="self-stretch flex flex-col justify-start items-start gap-10">
                <div className="self-stretch pt-10 border-t border-[#1d4e1a]/10 inline-flex justify-start items-end gap-5">
                  <div className="flex-1 justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Cold Drinks</div>
                  <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">6 Items</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-10">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products
                      .filter((product) => product.category === 'Cold Drinks')
                      .map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                          <div className="inline-flex flex-col justify-start items-start gap-3">
                            <div className="w-full h-72 relative bg-[#1d4e1a] rounded-3xl flex justify-center items-center overflow-hidden">
                              <img
                                className="w-full h-72 object-cover shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]"
                                src={product.image}
                                alt={product.name}
                              />
                            {product.isNew && (
                              <div className="px-2 pt-0.5 pb-1 left-[16px] top-[16px] absolute bg-[#ffecb8] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center">
                                <div className="text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">New</div>
                              </div>
                            )}
                            </div>
                            <div className="w-full px-2 flex justify-between items-center">
                              <div className="text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">{product.name}</div>
                              <div className="text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">${product.price?.Small}</div>
                            </div>
                          </div>
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

              {/* 🥐 BAKERY */}
            <div ref={bakeryRef}>
              <div className="self-stretch flex flex-col justify-start items-start gap-10">
                <div className="self-stretch pt-10 border-t border-[#1d4e1a]/10 inline-flex justify-start items-end gap-5">
                  <div className="flex-1 justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Bakery</div>
                  <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">5 Items</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-10">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products
                      .filter((product) => product.category === 'Bakery')
                      .map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                          <div className="inline-flex flex-col justify-start items-start gap-3">
                            <div className="w-full h-72 relative bg-[#1d4e1a] rounded-3xl flex justify-center items-center overflow-hidden">
                              <img
                                className="w-full h-72 object-cover shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]"
                                src={product.image}
                                alt={product.name}
                              />
                            {product.isNew && (
                              <div className="px-2 pt-0.5 pb-1 left-[16px] top-[16px] absolute bg-[#ffecb8] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center">
                                <div className="text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">New</div>
                              </div>
                            )}
                            </div>
                            <div className="w-full px-2 flex justify-between items-center">
                              <div className="text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">{product.name}</div>
                              <div className="text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">${product.price?.Small}</div>
                            </div>
                          </div>
                        </Link>
                    ))}
                    <div className="flex-1 self-stretch" />
                  </div>
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