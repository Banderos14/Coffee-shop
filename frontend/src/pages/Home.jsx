import Navbar from "../components/navbar";
import cups from "../../public/images/3_cups.png";

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
    </>
  );
};

export default Home;