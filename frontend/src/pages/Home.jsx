import Navbar from "../components/navbar";
import cups from "../../public/images/3_cups.png";
import coffee_cup from "../assets/coffee_cup.png";
import cold_drink_cup from "../assets/cold_drinks_cup.png";
import bakery_cup from "../assets/bakery_img.png";
import cold_brew from "../assets/cold_brew.png";
import iced_latte from "../assets/iced_latte.png";  
import macaroons from "../assets/macaroons.png";
import cappuccino from "../assets/cappuccino.png";

import smile from "../assets/Vector.svg";
import crown from "../assets/crown_vector.svg";
import leaf from "../assets/leaf_vector.svg";
import lightning from "../assets/lightning_verctor.svg";
import smile2 from "../assets/smile_vector_2.svg";
import share from "../assets/share_vector.svg";
import instagram from "../assets/inst_vector.svg";

const coffeeImages = [
  { src: leaf, alt: "Great Coffee" },
  { src: smile, alt: "Fast Service" },
  { src: lightning, alt: "Cozy Space" },
  { src: instagram, alt: "Handcrafted Drinks" },
  { src: leaf, alt: "Local Roasts" },
  { src: smile2, alt: "Global Flavor" },
  { src: share, alt: "Friendly Baristas" },
  { src: crown, alt: "Great Coffee" },
  { src: smile, alt: "Fast Service" },
  { src: lightning, alt: "Cozy Space" },
  { src: instagram, alt: "Handcrafted Drinks" },
  { src: leaf, alt: "Great Coffee" },
  { src: leaf, alt: "Local Roasts" },
  { src: smile2, alt: "Global Flavor" },
  { src: share, alt: "Friendly Baristas" },
  
];



const Home = () => {
  return (
    <>
      {/* Блок с зеленым фоном */}
    <div className="bg-[#1d4e1a]">
      <Navbar />
      {/* Блок с текстом */}
        <div className="bg-[#1d4e1a] w-full text-[#ffecb8] flex flex-col justify-start items-center gap-3 mb-8">
          <div className="w-full max-w-[680px] text-center justify-center text-[#ffecb8] text-8xl font-normal font-['Calistoga'] leading-[107.52px]">Life Begins After Coffee</div>
          <div className="w-full max-w-96 text-center justify-center text-[#ffecb8] text-lg font-normal font-['Cabin_Condensed'] leading-normal tracking-tight">Because great coffee is the start of something even greater.</div>
        </div>
        {/* Блок с кнопками */}
        <div className="bg-[#1d4e1a] w-full flex justify-center items-start gap-2.5 mb-12">
          <a href="">
            <div className="px-4 pt-2.5 pb-3 bg-[#ffecb8] rounded-full outline outline-1 outline-offset-[-1px] outline-[#ffecb8] flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-[#1d4e1a] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Explore Menu</div>
            </div>
          </a>
          <a href="">
            <div className="px-4 pt-2.5 pb-3 rounded-full outline outline-1 outline-offset-[-1px] outline-[#ffecb8] flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-[#ffecb8] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Our Locations</div>
            </div>
          </a>
        </div>
        {/* Блок с cups */}
        <div className="bg-[#1d4e1a] w-full flex justify-center items-center ">
          <img src={cups} alt="Cups" />
        </div>
        {/* Блок с лентой */} 
        <div className="marquee-wrapper w-full flex justify-start items-center bg-[#ffecb8] py-3 px-6 overflow-hidden">
          <div className="flex animate-marquee gap-10 px-6">
            {[...coffeeImages, ...coffeeImages].map((image, index) => (
              <div key={index} className="flex items-center gap-3 whitespace-nowrap">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-6 h-6 object-contain"
                />
                <span className="font-normal text-lg  text-[#1d4e1a] flex flex-row justify-start font-['Cabin_Condensed'] leading-normal tracking-tight ">{image.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Блок с текстом под лентой */}
      <div className="w-full bg-[#fcf3d9] flex justify-center items-center py-40 px-[120px]">
        <div className="w-full max-w-[1200px] inline-flex flex-col justify-start items-center gap-20">
          <div className="w-full max-w-[480px] text-center justify-start text-green-900 text-6xl font-normal font-['Calistoga'] leading-[74.24px]">Find and Get What You Love</div>
          <div className="self-stretch inline-flex justify-center items-start gap-6">
            <div data-adaptation="Desktop" data-show-text="true" data-size="Big" data-state="Default" className="flex-1 px-12 inline-flex flex-col justify-start items-center gap-8">
              <div className="self-stretch h-72 bg-green-900 rounded-full inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={coffee_cup} />
              </div>
              <div className="self-stretch text-center justify-start text-green-900 text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Coffee</div>
            </div>
            <div data-adaptation="Desktop" data-show-text="true" data-size="Big" data-state="Default" className="flex-1 px-12 inline-flex flex-col justify-start items-center gap-8">
              <div className="self-stretch h-72 bg-green-900 rounded-full inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={cold_drink_cup} />
              </div>
              <div className="self-stretch text-center justify-start text-green-900 text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Cold Drinks</div>
            </div>
            <div data-adaptation="Desktop" data-show-text="true" data-size="Big" data-state="Default" className="flex-1 px-12 inline-flex flex-col justify-start items-center gap-8">
              <div className="self-stretch h-72 bg-green-900 rounded-full inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={bakery_cup} />
              </div>
              <div className="self-stretch text-center justify-start text-green-900 text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Bakery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Блок с карточками товаров и ценами */}
      <div className="w-full bg-[#fcf3d9] flex justify-center items-center py-40 px-[120px]">
        <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-16">
          <div className="self-stretch flex flex-col justify-start items-center gap-3">
            <div className="w-full max-w-[480px] text-center justify-start text-green-900 text-6xl font-normal font-['Calistoga'] leading-[74.24px]">Loved by Locals</div>
            <div className="w-full max-w-96 text-center justify-start text-green-900 text-lg font-normal font-['Cabin_Condensed'] leading-normal tracking-tight">Local go-to’s everyone loves — handpicked and always fresh.</div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-6">
            <div data-show-badge="true" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-72 relative bg-green-900 rounded-3xl inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={cold_brew} />
                <div className="px-2 pt-0.5 pb-1 left-[16px] top-[16px] absolute bg-amber-100 rounded-full outline outline-1 outline-offset-[-1px] outline-green-900/10 flex justify-center items-center">
                  <div className="justify-start text-green-900 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">New</div>
                </div>
              </div>
              <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                <div className="flex-1 justify-start text-green-900 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Cold Brew</div>
                <div className="justify-start text-green-900/70 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$6.75</div>
              </div>
            </div>
            <div data-show-badge="false" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-72 bg-green-900 rounded-3xl inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={iced_latte} />
              </div>
              <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                <div className="flex-1 justify-start text-green-900 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Iced Latte</div>
                <div className="justify-start text-green-900/70 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$4.45</div>
              </div>
            </div>
            <div data-show-badge="false" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-72 bg-green-900 rounded-3xl inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={macaroons} />
              </div>
              <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                <div className="flex-1 justify-start text-green-900 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Macaroons</div>
                <div className="justify-start text-green-900/70 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$2.60</div>
              </div>
            </div>
            <div data-show-badge="false" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-72 bg-green-900 rounded-3xl inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={cappuccino} />
              </div>
              <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                <div className="flex-1 justify-start text-green-900 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Cappuccino</div>
                <div className="justify-start text-green-900/70 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$5.25</div>
              </div>
            </div>
          </div>
          <div data-color="Green" data-state="Default" data-type="Primary" className="px-4 pt-2.5 pb-3 bg-green-900 rounded-full outline outline-1 outline-offset-[-1px] outline-green-900 inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-amber-100 text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Explore Menu</div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;