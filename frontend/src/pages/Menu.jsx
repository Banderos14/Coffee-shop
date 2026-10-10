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


const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="block rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d4e1a]">
    <div className="flex flex-col justify-start items-start gap-3">
      <div className="w-full aspect-square lg:aspect-auto lg:h-72 relative bg-[#1d4e1a] rounded-3xl flex justify-center items-center overflow-hidden">
        <img
          className="w-full h-full object-cover shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        {product.isNew && (
          <div className="px-2 pt-0.5 pb-1 left-3 top-3 sm:left-[16px] sm:top-[16px] absolute bg-[#ffecb8] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center">
            <div className="text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">New</div>
          </div>
        )}
      </div>
      <div className="w-full px-1 sm:px-2 flex flex-wrap justify-between items-baseline gap-x-2">
        <div className="min-w-0 text-[#1d4e1a] text-base sm:text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">{product.name}</div>
        <div className="shrink-0 text-[#1d4e1a] text-base sm:text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">${product.price?.Small?.toFixed(2)}</div>
      </div>
    </div>
  </Link>
);

const Menu = () => {
  const coffeeRef = useRef(null)
  const coldRef = useRef(null)
  const bakeryRef = useRef(null)

  const scrollTo = (ref) => {
    if (!ref.current) return
    const top = ref.current.getBoundingClientRect().top + window.pageYOffset - 96
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <div className="bg-[#1d4e1a]">
        <Navbar />
        {/* Заголовок */}
        <div className="bg-[#1d4e1a] w-full px-4 text-[#ffecb8] flex flex-col justify-start items-center gap-3 mb-8">
          <div className="w-full max-w-[680px] text-center justify-center text-[#ffecb8] heading-hero font-normal font-['Calistoga']">Menu</div>
          <div className="w-full max-w-96 text-center justify-center text-[#ffecb8] text-lg font-normal font-['Cabin_Condensed'] leading-normal tracking-tight">Handcrafted drinks and fresh pastries.</div>
        </div>
        {/* Кнопки */}
        <div className="bg-[#1d4e1a] w-full px-4 flex flex-wrap justify-center items-start gap-2.5 mb-16 md:mb-28 lg:mb-[178px]">
          <div className="px-4 pt-2.5 pb-3 bg-[#ffecb8] rounded-full outline outline-1 outline-offset-[-1px] outline-[#ffecb8] flex justify-center items-center gap-2.5 cursor-default">
            <div className="text-center justify-start text-[#1d4e1a] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Our Locations</div>
          </div>
          <div className="px-4 pt-2.5 pb-3 rounded-full outline outline-1 outline-offset-[-1px] outline-[#ffecb8] flex justify-center items-center gap-2.5 cursor-default">
            <div className="text-center justify-start text-[#ffecb8] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">About Us</div>
          </div>
        </div>
        <Marquee />
        {/* Блок с меню */}
        <div className="w-full bg-[#fcf3d9] self-stretch px-4 sm:px-10 pt-12 md:pt-20 lg:pt-28 pb-20 md:pb-28 lg:pb-40 inline-flex flex-col justify-start items-center">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-start items-stretch lg:items-start gap-8 lg:gap-6">
            <div className="w-full lg:flex-1 lg:max-w-72 inline-flex flex-col justify-start items-center gap-5">
              <div className="self-stretch flex flex-wrap lg:flex-col justify-center lg:justify-start items-center gap-x-6 gap-y-3 lg:gap-5">
                <button onClick={() => scrollTo(coffeeRef)} className="lg:self-stretch inline-flex justify-start items-center gap-3 lg:gap-4">
                  <img src={logo_coffee} alt="coffee" className="w-10 h-10 lg:w-14 lg:h-14" />
                  <div className="text-[#1d4e1a] text-lg lg:text-xl font-['Calistoga']">Coffee</div>
                </button>
                <button onClick={() => scrollTo(coldRef)} className="lg:self-stretch inline-flex justify-start items-center gap-3 lg:gap-4 opacity-70 hover:opacity-100 active:opacity-100">
                  <img src={logo_cold_drinks} alt="cold drinks" className="w-10 h-10 lg:w-14 lg:h-14" />
                  <div className="text-[#1d4e1a] text-lg lg:text-xl font-['Calistoga']">Cold Drinks</div>
                </button>
                <button onClick={() => scrollTo(bakeryRef)} className="lg:self-stretch inline-flex justify-start items-center gap-3 lg:gap-4 opacity-70 hover:opacity-100 active:opacity-100">
                  <img src={logo_bakery} alt="bakery" className="w-10 h-10 lg:w-14 lg:h-14" />
                  <div className="text-[#1d4e1a] text-lg lg:text-xl font-['Calistoga']">Bakery</div>
                </button>
              </div>
            </div>

            <div ref={coffeeRef} className="flex-1 min-w-0 inline-flex flex-col justify-start items-start gap-16">
              {/* ☕ Coffee */}
              <div className="self-stretch flex flex-col justify-start items-start gap-10">
                <div className="self-stretch pt-10 border-t border-[#1d4e1a]/10 inline-flex justify-start items-end gap-5">
                  <div className="flex-1 justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Coffee</div>
                  <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">9 Items</div>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 sm:gap-6">
                  {products
                    .filter((product) => product.category === 'Coffee')
                    .map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
              </div>

              {/* Cold Drinks */}
              <div ref={coldRef} className="self-stretch flex flex-col justify-start items-start gap-10">
                <div className="self-stretch pt-10 border-t border-[#1d4e1a]/10 inline-flex justify-start items-end gap-5">
                  <div className="flex-1 justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Cold Drinks</div>
                  <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">6 Items</div>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 sm:gap-6">
                  {products
                    .filter((product) => product.category === 'Cold Drinks')
                    .map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
              </div>

              {/* Bakery */}
              <div ref={bakeryRef} className="self-stretch flex flex-col justify-start items-start gap-10">
                <div className="self-stretch pt-10 border-t border-[#1d4e1a]/10 inline-flex justify-start items-end gap-5">
                  <div className="flex-1 justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Bakery</div>
                  <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">5 Items</div>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 sm:gap-6">
                  {products
                    .filter((product) => product.category === 'Bakery')
                    .map((product) => <ProductCard key={product.id} product={product} />)}
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
