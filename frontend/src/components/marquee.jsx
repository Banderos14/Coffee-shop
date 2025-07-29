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


const Marquee = () => {
  return (
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
  );
}
export default Marquee;