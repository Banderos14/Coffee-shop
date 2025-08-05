import Navbar from "../components/navbar";
import Order from "../components/order";
import Marquee from "../components/marquee";
import Footer from "../components/footer";
import Map from "../components/Map";

import cups from "../../public/images/3_cups.png";
import coffee_cup from "../assets/coffee_cup.png";
import cold_drink_cup from "../assets/cold_drinks_cup.png";
import bakery_cup from "../assets/bakery_img.png";
import cold_brew from "../assets/cold_brew.png";
import iced_latte from "../assets/iced_latte.png";  
import macaroons from "../assets/macaroons.png";
import cappuccino from "../assets/cappuccino.png";
import barista from "../assets/barista_blok_4.png";
import matcha from "../assets/matcha_blok_4.png"
import hall from "../assets/hall_blok_4.png"; 
import coffee_left_block_5 from "../assets/coffee_left_block_5.png";
import coffee_center_block_5 from "../assets/coffee_center_block_5.png";
import coffee_right_block_5 from "../assets/coffee_right_block_5.png";
// import map from "../assets/map.png";
import what_new_left_block_6 from "../assets/what_new_left_block_6.png";
import what_new_center_block_6 from "../assets/what_new_center_block_6.png";
import what_new_right_block_6 from "../assets/what_new_right_block_6.png";

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
        <Marquee />
      

      {/* Блок с текстом под лентой */}
      <div className="w-full bg-[#fcf3d9] flex justify-center items-center py-40 px-[120px]">
        <div className="w-full max-w-[1200px] inline-flex flex-col justify-start items-center gap-20">
          <div className="w-full max-w-[480px] text-center justify-start text-[#1d4e1a] text-6xl font-normal font-['Calistoga'] leading-[74.24px]">Find and Get What You Love</div>
          <div className="self-stretch inline-flex justify-center items-start gap-6">
            <div data-adaptation="Desktop" data-show-text="true" data-size="Big" data-state="Default" className="flex-1 px-12 inline-flex flex-col justify-start items-center gap-8">
              <div className="self-stretch h-72 bg-[#1d4e1a] rounded-full inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={coffee_cup} />
              </div>
              <div className="self-stretch text-center justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Coffee</div>
            </div>
            <div data-adaptation="Desktop" data-show-text="true" data-size="Big" data-state="Default" className="flex-1 px-12 inline-flex flex-col justify-start items-center gap-8">
              <div className="self-stretch h-72 bg-[#1d4e1a] rounded-full inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={cold_drink_cup} />
              </div>
              <div className="self-stretch text-center justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Cold Drinks</div>
            </div>
            <div data-adaptation="Desktop" data-show-text="true" data-size="Big" data-state="Default" className="flex-1 px-12 inline-flex flex-col justify-start items-center gap-8">
              <div className="self-stretch h-72 bg-[#1d4e1a] rounded-full inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={bakery_cup} />
              </div>
              <div className="self-stretch text-center justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Bakery</div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Блок с карточками товаров и ценами */}
      <div className="w-full bg-[#fcf3d9] border-opacity-10 border-t border-b border-[#1d4e1a] flex justify-center items-center py-40 px-[120px]">
        <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-16">
          <div className="self-stretch flex flex-col justify-start items-center gap-3">
            <div className="w-full max-w-[480px] text-center justify-start text-[#1d4e1a] text-6xl font-normal font-['Calistoga'] leading-[74.24px]">Loved by Locals</div>
            <div className="w-full max-w-96 text-center justify-start text-[#1d4e1a] text-lg font-normal font-['Cabin_Condensed'] leading-normal tracking-tight">Local go-to’s everyone loves — handpicked and always fresh.</div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-6">
            <div data-show-badge="true" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-72 relative bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={cold_brew} />
                <div className="px-2 pt-0.5 pb-1 left-[16px] top-[16px] absolute bg-[#fcf3d9] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center">
                  <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">New</div>
                </div>
              </div>
              <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Cold Brew</div>
                <div className="justify-start text-[#1d4e1a]/70 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$6.75</div>
              </div>
            </div>
            <div data-show-badge="false" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={iced_latte} />
              </div>
              <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Iced Latte</div>
                <div className="justify-start text-[#1d4e1a]/70 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$4.45</div>
              </div>
            </div>
            <div data-show-badge="false" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={macaroons} />
              </div>
              <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Macaroons</div>
                <div className="justify-start text-[#1d4e1a]/70 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$2.60</div>
              </div>
            </div>
            <div data-show-badge="false" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-72 bg-[#1d4e1a] rounded-3xl inline-flex justify-center items-center overflow-hidden">
                <img className="flex-1 h-72 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={cappuccino} />
              </div>
              <div className="self-stretch px-2 inline-flex justify-start items-center gap-5">
                <div className="flex-1 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Cappuccino</div>
                <div className="justify-start text-[#1d4e1a]/70 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$5.25</div>
              </div>
            </div>
          </div>
          <a href=""><div data-color="Green" data-state="Default" data-type="Primary" className="px-4 pt-2.5 pb-3 bg-[#1d4e1a] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a] inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-[#fcf3d9] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Explore Menu</div>
          </div></a>
        </div>
      </div>

      {/* Блок с описанием кофе и картинками справа*/}
      <div className="bg-[#fcf3d9] w-full self-stretch px-10 pt-40 inline-flex flex-col justify-start items-center">
        <div className="w-full max-w-[1200px] inline-flex justify-start items-center gap-6">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-20">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="w-full max-w-[470px] justify-start text-[#1d4e1a] text-6xl font-normal font-['Calistoga'] leading-[74.24px]">Good Vibes. Great Coffee.</div>
              <div className="w-full max-w-[440px] justify-start text-[#1d4e1a] text-lg font-normal font-['Cabin_Condensed'] leading-normal tracking-tight">At Brewhaus, we serve great coffee and fresh pastries with care and passion, creating a warm, cozy space that feels like home.</div>
            </div>
            <div className="w-full max-w-[486px] flex flex-col justify-start items-start">
              <div className="self-stretch inline-flex justify-start items-center">
                <div data-adaptation="Desktop" className="flex-1 p-6 inline-flex flex-col justify-start items-center gap-4">
                  <div className="p-2 bg-[#1d4e1a] rounded-full inline-flex justify-start items-center">
                    <div data-svg-wrapper className="relative">
                      <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6231 6.24748C7.34553 7.26812 5.77865 11.2645 6.77055 16.0372C7.08681 17.5466 8.33747 17.5897 9.86127 16.641C11.4713 15.6202 13.3688 13.4783 14.7633 10.7326C16.2583 7.75689 13.9152 5.21244 10.6231 6.24748ZM12.1613 7.57C13.7858 8.53316 13.3688 10.1864 10.6519 13.3633L9.07062 15.2178L9.02751 13.8234C8.89815 9.41006 10.35 6.49185 12.1613 7.57ZM19.9528 8.92131C17.7247 9.95633 14.3177 14.3839 14.3177 16.2528C14.3177 17.4747 15.1946 17.4316 19.5072 15.994C22.9142 14.8584 24.553 14.2114 25.2861 13.3058C27.7155 10.3301 23.6042 7.22499 19.9528 8.92131ZM23.3167 10.2726C24.0786 11.437 22.2098 13.8377 19.9816 14.5708C18.1559 15.1747 16.9052 15.5052 17.0346 15.3184C17.1065 15.2322 17.5521 14.6427 18.0265 14.0103C20.269 11.0345 22.6986 9.32382 23.3167 10.2726ZM14.8064 19.1853C11.6582 19.7316 10.5225 21.8879 14.3032 23.1817C14.9645 23.4118 16.3877 24.073 17.4659 24.6481C20.6141 26.3587 22.181 26.3874 23.5036 24.7774C24.5242 23.5412 24.2654 21.5573 23.2879 20.0911C20.8872 16.4828 16.5027 18.8835 14.8064 19.1853ZM22.0804 20.666C22.8999 21.083 22.8711 22.0317 22.0085 22.9948C20.8441 24.2886 19.8666 24.2167 17.0921 22.6212L15.0796 21.4711C15.3957 21.4136 16.5315 21.2267 18.429 20.781C20.1685 20.3497 21.3904 20.321 22.0804 20.666Z" fill="#FCF3D9"/>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full max-w-40 text-center justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Great Coffee, Tasty Sips</div>
                </div>
                <div className="w-px self-stretch bg-[#1d4e1a]/10" />
                <div data-adaptation="Desktop" className="flex-1 p-6 inline-flex flex-col justify-start items-center gap-4">
                  <div className="p-2 bg-[#1d4e1a] rounded-full inline-flex justify-start items-center">
                    <div data-svg-wrapper className="relative">
                      <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.74222 20.6078C3.72512 14.1239 4.47517 7.94001 10.4757 6.42322C12.3092 5.95651 14.6595 6.48989 15.9596 7.65666L16.6263 8.25671L17.6097 7.67332C23.2935 4.23969 30.2941 10.5736 27.3272 16.4574C24.6269 21.8079 15.8429 27.5584 14.0427 25.1582C13.5094 24.4415 13.776 24.3414 15.1928 24.6915C16.5429 25.0248 22.7768 19.491 24.3269 16.5741C26.1937 13.0738 25.8271 11.1736 22.8435 8.77342C21.61 7.79 19.6932 8.22337 18.1931 9.85684C17.0096 11.1236 15.7762 11.2236 14.7594 9.6235C11.8758 5.1231 7.14208 8.69008 8.4922 14.3406C9.05892 16.6741 9.67567 17.8409 12.0259 20.9411C13.626 23.0413 13.676 23.1413 13.1426 23.4247C12.1258 23.9747 10.5424 22.958 8.74222 20.6078Z" fill="#FCF3D9"/>
                      <path d="M21.1267 10.9738C20.3099 10.8238 20.9933 9.90701 21.76 10.1737C22.3934 10.4071 23.2769 10.7904 23.6269 11.7738C24.0103 12.8073 23.2435 13.8073 22.8101 13.6907C22.4267 13.5907 22.3101 13.1573 22.3601 12.2739C22.4101 11.3905 21.9434 11.1238 21.1267 10.9738Z" fill="#FCF3D9"/>
                      <path d="M22.9936 16.2574C21.9101 16.5074 21.0934 15.6906 21.5768 15.1406C21.9435 14.7406 23.3269 14.7072 23.7269 15.1073C24.0603 15.4573 23.8436 16.0573 22.9936 16.2574Z" fill="#FCF3D9"/>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full max-w-40 text-center justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Warm, Cozy Atmosphere</div>
                </div>
              </div>
              <div className="self-stretch h-px bg-[#1d4e1a]/10" />
              <div className="self-stretch inline-flex justify-start items-center">
                <div data-adaptation="Desktop" className="flex-1 p-6 inline-flex flex-col justify-start items-center gap-4">
                  <div className="p-2 bg-[#1d4e1a] rounded-full inline-flex justify-start items-center">
                    <div data-svg-wrapper className="relative">
                      <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.0131 7.33581C19.4071 5.50419 17.1748 7.09254 19.8507 7.72216C26.6334 9.32482 27.5635 17.6959 21.0527 22.3751C13.3256 27.9128 3.62374 20.4147 8.5462 12.7162C10.6354 9.45361 12.9965 7.69354 15.3575 7.622C17.4324 7.56476 16.7742 6.52016 14.6564 6.52016C9.43342 6.52016 3.80979 13.1741 4.85438 18.1251C5.69864 22.1747 9.01846 24.8077 14.0983 25.4373C25.9323 26.9112 33.0583 12.43 23.0131 7.33581Z" fill="#FCF3D9"/>
                      <path d="M14.2556 18.44C13.626 17.4384 13.5688 17.3954 12.9392 17.4384C11.2936 17.5672 12.3811 19.9139 14.456 20.6866C16.1732 21.3305 18.8347 20.9871 19.7362 20.0284C21.0956 18.5831 20.7664 16.2936 19.3355 17.238C19.2496 17.2953 19.0494 17.6387 18.892 17.9821C17.8331 20.3289 15.5578 20.5435 14.2556 18.44Z" fill="#FCF3D9"/>
                      <path d="M20.4804 13.8611C19.9652 12.6305 19.1639 12.33 18.5915 13.1599C17.9047 14.1759 18.2911 15.1203 19.3929 15.1203C20.4947 15.1203 20.8381 14.734 20.4804 13.8611Z" fill="#FCF3D9"/>
                      <path d="M14.5419 14.0614C14.5419 13.0597 13.898 12.6018 13.0108 12.9739C12.2095 13.303 11.8374 14.8198 12.4098 15.3492C13.3113 16.1649 14.5419 15.4065 14.5419 14.0614Z" fill="#FCF3D9"/>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full max-w-40 text-center justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Speedy Service with a Smile</div>
                </div>
                <div className="w-px self-stretch bg-[#1d4e1a]/10" />
                <div data-adaptation="Desktop" className="flex-1 p-6 inline-flex flex-col justify-start items-center gap-4">
                  <div className="p-2 bg-[#1d4e1a] rounded-full inline-flex justify-start items-center">
                    <div data-svg-wrapper className="relative">
                      <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27.7495 13.8429C24.0139 10.1631 20.9334 7.45896 18.9123 6.23234C17.2118 5.20088 15.8597 5.04754 14.2427 6.30204C12.5283 7.64017 10.1727 10.0516 7.34308 12.4629C3.78868 15.5017 4.68075 17.913 7.12005 18.15L8.23515 18.2615C8.27697 19.1258 8.45816 24.1577 8.56967 24.8964C8.61149 25.2031 8.5697 25.5515 8.45819 25.663C7.6358 26.4854 10.3539 26.7641 15.5669 26.4018C25.4914 25.7049 26.2859 25.5795 25.5889 24.7988C25.3381 24.5201 25.561 17.6482 25.561 17.6482L26.1883 17.4392C28.4882 16.7004 29.1295 15.195 27.7495 13.8429ZM15.1906 24.8407C14.9954 23.3073 14.7445 21.2166 15.1488 20.0178C15.7622 18.7633 16.7796 18.3731 17.7414 19.0003C18.6055 19.5718 18.9401 20.5615 18.9541 22.6383L18.9681 24.5201C18.9681 24.5061 15.9851 24.743 15.1906 24.8407ZM23.7072 24.3667L20.5013 24.4504C20.5013 24.4504 20.4734 23.5723 20.3898 22.3595C20.1946 19.1955 19.2887 18.0664 16.933 18.0803C14.0198 18.0942 13.1834 19.6554 13.7688 24.0183L13.8943 24.9522H10.9114L10.3678 18.5263C10.2423 17.0628 10.6326 16.561 14.4101 13.2017C16.8353 11.0552 16.3336 11.1388 17.9365 12.5884C19.0795 13.6199 23.6933 17.6063 23.6933 17.6063V24.3667H23.7072ZM25.7702 16.2962C25.0453 17.021 24.446 16.7004 21.5607 13.9823C16.1803 8.93645 16.9469 8.96433 12.0544 13.6757C10.4375 15.2228 9.48966 16.1289 8.87635 16.6028C7.59398 17.5785 6.71584 16.087 7.41278 15.0277C7.92851 14.2332 9.18298 12.9648 11.6362 10.4558C16.1106 5.86994 16.1803 5.81417 17.2257 6.60869C17.5044 6.81777 18.5499 7.76561 19.5255 8.69951C19.5396 8.71344 25.3938 14.1078 25.5054 14.2053C26.3556 14.9302 26.4392 15.6271 25.7702 16.2962Z" fill="#FCF3D9"/>
                      <path d="M15.344 13.4387C14.2009 13.9405 13.9222 15.6829 14.8561 16.561C15.79 17.4392 18.0759 17.1883 18.7171 16.1428C19.9297 14.1636 17.7275 12.4073 15.344 13.4387ZM17.4208 14.1636C18.1735 14.6932 17.6019 16.2125 16.6402 16.2125C15.8039 16.2125 15.7203 14.7211 16.5147 14.1078C16.8911 13.815 16.9329 13.829 17.4208 14.1636Z" fill="#FCF3D9"/>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full max-w-40 text-center justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Local & Sustainable</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 self-stretch flex justify-start items-start gap-6">
            <img className="flex-1 w-[282px] self-stretch rounded-[32px] border border-[#1d4e1a]/10" src={barista} />
            <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-6">
              <img className="self-stretch flex-1 rounded-[32px] border border-[#1d4e1a]/10" src={hall} />
              <img className="self-stretch flex-1 rounded-[32px] border border-[#1d4e1a]/10" src={matcha} />
            </div>
          </div>
        </div>
      </div>

      {/* Блок с отзывами */}
      <div className="bg-[#fcf3d9] w-full self-stretch px-[120px] py-40 inline-flex flex-col justify-start items-center">
        <div className="w-full max-w-[1200px] inline-flex flex-col justify-start items-center gap-16">
          <div className="w-full max-w-[480px] text-center justify-start text-[#1d4e1a] text-6xl font-normal font-['Calistoga'] leading-[74.24px]">What People Love About Us</div>
          <div className="self-stretch h-[640px] inline-flex justify-start items-center gap-6">
            <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-6">
              <div className="self-stretch px-6 py-8 bg-[#1d4e1a]/5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex flex-col justify-start items-start gap-5">
                <div data-svg-wrapper className="relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.9556 4.92139V5.0016C18.9556 5.16202 18.8888 5.40264 18.7551 5.72348C18.6214 6.01758 18.461 6.33841 18.2738 6.68599C18.1134 7.00682 17.9396 7.31429 17.7525 7.60839C17.5921 7.90249 17.4851 8.10301 17.4316 8.20995C17.298 8.42385 17.1643 8.63774 17.0306 8.85163C16.8969 9.03878 16.8301 9.18583 16.8301 9.29278C16.8301 9.50667 16.8835 9.70719 16.9905 9.89434C17.0974 10.0815 17.1509 10.3221 17.1509 10.6162C17.0707 10.643 16.9905 10.7766 16.9103 11.0173C16.8568 11.2312 16.8301 11.4049 16.8301 11.5386C16.8301 11.8862 16.9103 12.1669 17.0707 12.3808C17.2579 12.568 17.3782 12.7819 17.4316 13.0225C17.4851 13.2364 17.5386 13.5171 17.5921 13.8647C17.6723 14.2123 17.7391 14.5732 17.7926 14.9475C17.8728 15.3218 17.9396 15.6827 17.9931 16.0303C18.0466 16.3779 18.0733 16.672 18.0733 16.9126C18.0733 17.2067 17.9931 17.4874 17.8327 17.7548C17.699 18.0222 17.5119 18.2628 17.2712 18.4767C17.0573 18.6906 16.8301 18.8777 16.5894 19.0382C16.3488 19.1718 16.1349 19.252 15.9478 19.2788H15.9879C15.9879 19.3055 15.8141 19.3857 15.4665 19.5194C15.1457 19.6264 14.8382 19.6798 14.5441 19.6798C14.4639 19.6798 14.3436 19.6531 14.1832 19.5996H14.2233C14.2233 19.5729 14.1698 19.5194 14.0629 19.4392C13.9559 19.3323 13.8356 19.2253 13.7019 19.1184C13.595 18.9847 13.488 18.8644 13.3811 18.7574C13.2741 18.6505 13.2207 18.5703 13.2207 18.5168C13.2207 18.4099 13.2207 18.3163 13.2207 18.2361C13.2474 18.1291 13.2608 18.0355 13.2608 17.9553C13.2608 17.9821 13.1672 17.7548 12.9801 17.2736C12.8196 16.7923 12.7127 16.1774 12.6592 15.4288C12.7127 15.4288 12.7662 15.3886 12.8196 15.3084C12.8998 15.2282 12.9399 15.1614 12.9399 15.1079C12.9399 14.9475 12.8865 14.7871 12.7795 14.6267C12.6993 14.4395 12.6592 14.1989 12.6592 13.9048C12.6592 13.5305 12.7394 13.076 12.8998 12.5412C13.0603 11.9798 13.1806 11.4317 13.2608 10.897C13.2875 10.8167 13.3677 10.6697 13.5014 10.4558C13.6351 10.2152 13.7821 9.96118 13.9426 9.69382C14.103 9.42646 14.25 9.18583 14.3837 8.97194C14.5174 8.73131 14.5976 8.57089 14.6243 8.49069C14.7045 8.06291 14.7981 7.75544 14.9051 7.56828C15.0387 7.38113 15.1724 7.23408 15.3061 7.12714C15.4398 7.02019 15.6002 6.91324 15.7874 6.8063C15.9745 6.67262 16.1884 6.44536 16.429 6.12452V6.08442C16.429 6.03095 16.4157 5.96411 16.3889 5.8839C16.3889 5.80369 16.3889 5.72348 16.3889 5.64327C16.3889 5.56306 16.4023 5.50959 16.429 5.48285C16.4825 5.45612 16.5627 5.38928 16.6697 5.28233C16.7766 5.14865 16.8969 5.01497 17.0306 4.88129C17.191 4.72087 17.3381 4.58719 17.4717 4.48024C17.6322 4.3733 17.7792 4.31982 17.9129 4.31982C18.0198 4.31982 18.1936 4.38666 18.4343 4.52035C18.7016 4.65403 18.8754 4.78771 18.9556 4.92139ZM11.5764 4.92139V5.0016C11.5764 5.16202 11.5096 5.40264 11.3759 5.72348C11.2422 6.01758 11.0818 6.33841 10.8946 6.68599C10.7342 7.00682 10.5604 7.31429 10.3733 7.60839C10.2128 7.90249 10.1059 8.10301 10.0524 8.20995C9.91875 8.42385 9.78506 8.63774 9.65138 8.85163C9.5177 9.03878 9.45086 9.18583 9.45086 9.29278C9.45086 9.50667 9.50433 9.70719 9.61128 9.89434C9.71822 10.0815 9.7717 10.3221 9.7717 10.6162C9.69149 10.643 9.61128 10.7766 9.53107 11.0173C9.4776 11.2312 9.45086 11.4049 9.45086 11.5386C9.45086 11.8862 9.53107 12.1669 9.69149 12.3808C9.87864 12.568 9.99895 12.7819 10.0524 13.0225C10.1059 13.2364 10.1594 13.5171 10.2128 13.8647C10.2931 14.2123 10.3599 14.5732 10.4134 14.9475C10.4936 15.3218 10.5604 15.6827 10.6139 16.0303C10.6674 16.3779 10.6941 16.672 10.6941 16.9126C10.6941 17.2067 10.6139 17.4874 10.4535 17.7548C10.3198 18.0222 10.1326 18.2628 9.89201 18.4767C9.67812 18.6906 9.45086 18.8777 9.21023 19.0382C8.96961 19.1718 8.75572 19.252 8.56856 19.2788H8.60867C8.60867 19.3055 8.43488 19.3857 8.08731 19.5194C7.76647 19.6264 7.45901 19.6798 7.16491 19.6798C7.0847 19.6798 6.96439 19.6531 6.80397 19.5996H6.84407C6.84407 19.5729 6.7906 19.5194 6.68365 19.4392C6.57671 19.3323 6.4564 19.2253 6.32271 19.1184C6.21577 18.9847 6.10882 18.8644 6.00188 18.7574C5.89493 18.6505 5.84146 18.5703 5.84146 18.5168C5.84146 18.4099 5.84146 18.3163 5.84146 18.2361C5.8682 18.1291 5.88157 18.0355 5.88157 17.9553C5.88157 17.9821 5.78799 17.7548 5.60083 17.2736C5.44042 16.7923 5.33347 16.1774 5.28 15.4288C5.33347 15.4288 5.38694 15.3886 5.44042 15.3084C5.52063 15.2282 5.56073 15.1614 5.56073 15.1079C5.56073 14.9475 5.50726 14.7871 5.40031 14.6267C5.3201 14.4395 5.28 14.1989 5.28 13.9048C5.28 13.5305 5.36021 13.076 5.52063 12.5412C5.68104 11.9798 5.80136 11.4317 5.88157 10.897C5.9083 10.8167 5.98851 10.6697 6.12219 10.4558C6.25587 10.2152 6.40292 9.96118 6.56334 9.69382C6.72376 9.42646 6.87081 9.18583 7.00449 8.97194C7.13817 8.73131 7.21838 8.57089 7.24512 8.49069C7.32533 8.06291 7.4189 7.75544 7.52585 7.56828C7.65953 7.38113 7.79321 7.23408 7.92689 7.12714C8.06057 7.02019 8.22099 6.91324 8.40814 6.8063C8.5953 6.67262 8.80919 6.44536 9.04982 6.12452V6.08442C9.04982 6.03095 9.03645 5.96411 9.00971 5.8839C9.00971 5.80369 9.00971 5.72348 9.00971 5.64327C9.00971 5.56306 9.02308 5.50959 9.04982 5.48285C9.10329 5.45612 9.1835 5.38928 9.29044 5.28233C9.39739 5.14865 9.5177 5.01497 9.65138 4.88129C9.8118 4.72087 9.95885 4.58719 10.0925 4.48024C10.2529 4.3733 10.4 4.31982 10.5337 4.31982C10.6406 4.31982 10.8144 4.38666 11.055 4.52035C11.3224 4.65403 11.4962 4.78771 11.5764 4.92139Z" fill="#1D4E1A"/>
                  </svg>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="w-full max-w-80 justify-start text-[#1d4e1a] text-base font-normal font-['Calistoga'] leading-snug tracking-tight">Brewhaus has spoiled other coffee shops for me – in the best way. Great espresso, fresh pastries, and a team that makes you feel like a regular from day one.</div>
                  <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Patrick M. – Espresso lover</div>
                </div>
              </div>
              <img className="self-stretch flex-1 rounded-3xl border border-[#1d4e1a]/10" src={coffee_left_block_5} />
            </div>
            <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-6">
              <img className="self-stretch flex-1 rounded-3xl border border-[#1d4e1a]/10" src={coffee_center_block_5} />
              <div className="self-stretch px-6 py-8 bg-[#1d4e1a]/5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex flex-col justify-start items-start gap-5">
                <div data-svg-wrapper className="relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.9556 4.92139V5.0016C18.9556 5.16202 18.8888 5.40264 18.7551 5.72348C18.6214 6.01758 18.461 6.33841 18.2739 6.68599C18.1135 7.00682 17.9397 7.31429 17.7525 7.60839C17.5921 7.90249 17.4851 8.10301 17.4317 8.20995C17.298 8.42385 17.1643 8.63774 17.0306 8.85163C16.8969 9.03878 16.8301 9.18583 16.8301 9.29278C16.8301 9.50667 16.8836 9.70719 16.9905 9.89434C17.0975 10.0815 17.1509 10.3221 17.1509 10.6162C17.0707 10.643 16.9905 10.7766 16.9103 11.0173C16.8568 11.2312 16.8301 11.4049 16.8301 11.5386C16.8301 11.8862 16.9103 12.1669 17.0707 12.3808C17.2579 12.568 17.3782 12.7819 17.4317 13.0225C17.4851 13.2364 17.5386 13.5171 17.5921 13.8647C17.6723 14.2123 17.7391 14.5732 17.7926 14.9475C17.8728 15.3218 17.9397 15.6827 17.9931 16.0303C18.0466 16.3779 18.0733 16.672 18.0733 16.9126C18.0733 17.2067 17.9931 17.4874 17.8327 17.7548C17.699 18.0222 17.5119 18.2628 17.2713 18.4767C17.0574 18.6906 16.8301 18.8777 16.5895 19.0382C16.3489 19.1718 16.135 19.252 15.9478 19.2788H15.9879C15.9879 19.3055 15.8141 19.3857 15.4666 19.5194C15.1457 19.6264 14.8383 19.6798 14.5442 19.6798C14.4639 19.6798 14.3436 19.6531 14.1832 19.5996H14.2233C14.2233 19.5729 14.1698 19.5194 14.0629 19.4392C13.956 19.3323 13.8356 19.2253 13.702 19.1184C13.595 18.9847 13.4881 18.8644 13.3811 18.7574C13.2742 18.6505 13.2207 18.5703 13.2207 18.5168C13.2207 18.4099 13.2207 18.3163 13.2207 18.2361C13.2474 18.1291 13.2608 18.0355 13.2608 17.9553C13.2608 17.9821 13.1672 17.7548 12.9801 17.2736C12.8197 16.7923 12.7127 16.1774 12.6592 15.4288C12.7127 15.4288 12.7662 15.3886 12.8197 15.3084C12.8999 15.2282 12.94 15.1614 12.94 15.1079C12.94 14.9475 12.8865 14.7871 12.7796 14.6267C12.6994 14.4395 12.6592 14.1989 12.6592 13.9048C12.6592 13.5305 12.7395 13.076 12.8999 12.5412C13.0603 11.9798 13.1806 11.4317 13.2608 10.897C13.2875 10.8167 13.3678 10.6697 13.5014 10.4558C13.6351 10.2152 13.7822 9.96118 13.9426 9.69382C14.103 9.42646 14.2501 9.18583 14.3837 8.97194C14.5174 8.73131 14.5976 8.57089 14.6244 8.49069C14.7046 8.06291 14.7981 7.75544 14.9051 7.56828C15.0388 7.38113 15.1725 7.23408 15.3061 7.12714C15.4398 7.02019 15.6002 6.91324 15.7874 6.8063C15.9745 6.67262 16.1884 6.44536 16.4291 6.12452V6.08442C16.4291 6.03095 16.4157 5.96411 16.389 5.8839C16.389 5.80369 16.389 5.72348 16.389 5.64327C16.389 5.56306 16.4023 5.50959 16.4291 5.48285C16.4825 5.45612 16.5627 5.38928 16.6697 5.28233C16.7766 5.14865 16.8969 5.01497 17.0306 4.88129C17.191 4.72087 17.3381 4.58719 17.4718 4.48024C17.6322 4.3733 17.7792 4.31982 17.9129 4.31982C18.0199 4.31982 18.1937 4.38666 18.4343 4.52035C18.7016 4.65403 18.8754 4.78771 18.9556 4.92139ZM11.5764 4.92139V5.0016C11.5764 5.16202 11.5096 5.40264 11.3759 5.72348C11.2422 6.01758 11.0818 6.33841 10.8947 6.68599C10.7342 7.00682 10.5604 7.31429 10.3733 7.60839C10.2129 7.90249 10.1059 8.10301 10.0525 8.20995C9.91878 8.42385 9.78509 8.63774 9.65141 8.85163C9.51773 9.03878 9.45089 9.18583 9.45089 9.29278C9.45089 9.50667 9.50436 9.70719 9.61131 9.89434C9.71825 10.0815 9.77173 10.3221 9.77173 10.6162C9.69152 10.643 9.61131 10.7766 9.5311 11.0173C9.47763 11.2312 9.45089 11.4049 9.45089 11.5386C9.45089 11.8862 9.5311 12.1669 9.69152 12.3808C9.87867 12.568 9.99898 12.7819 10.0525 13.0225C10.1059 13.2364 10.1594 13.5171 10.2129 13.8647C10.2931 14.2123 10.3599 14.5732 10.4134 14.9475C10.4936 15.3218 10.5604 15.6827 10.6139 16.0303C10.6674 16.3779 10.6941 16.672 10.6941 16.9126C10.6941 17.2067 10.6139 17.4874 10.4535 17.7548C10.3198 18.0222 10.1327 18.2628 9.89204 18.4767C9.67815 18.6906 9.45089 18.8777 9.21026 19.0382C8.96964 19.1718 8.75575 19.252 8.56859 19.2788H8.6087C8.6087 19.3055 8.43491 19.3857 8.08734 19.5194C7.7665 19.6264 7.45904 19.6798 7.16494 19.6798C7.08473 19.6798 6.96442 19.6531 6.804 19.5996H6.8441C6.8441 19.5729 6.79063 19.5194 6.68368 19.4392C6.57674 19.3323 6.45643 19.2253 6.32274 19.1184C6.2158 18.9847 6.10885 18.8644 6.00191 18.7574C5.89496 18.6505 5.84149 18.5703 5.84149 18.5168C5.84149 18.4099 5.84149 18.3163 5.84149 18.2361C5.86823 18.1291 5.8816 18.0355 5.8816 17.9553C5.8816 17.9821 5.78802 17.7548 5.60086 17.2736C5.44045 16.7923 5.3335 16.1774 5.28003 15.4288C5.3335 15.4288 5.38697 15.3886 5.44045 15.3084C5.52066 15.2282 5.56076 15.1614 5.56076 15.1079C5.56076 14.9475 5.50729 14.7871 5.40034 14.6267C5.32013 14.4395 5.28003 14.1989 5.28003 13.9048C5.28003 13.5305 5.36024 13.076 5.52066 12.5412C5.68107 11.9798 5.80139 11.4317 5.8816 10.897C5.90833 10.8167 5.98854 10.6697 6.12222 10.4558C6.2559 10.2152 6.40295 9.96118 6.56337 9.69382C6.72379 9.42646 6.87084 9.18583 7.00452 8.97194C7.1382 8.73131 7.21841 8.57089 7.24515 8.49069C7.32536 8.06291 7.41893 7.75544 7.52588 7.56828C7.65956 7.38113 7.79324 7.23408 7.92692 7.12714C8.0606 7.02019 8.22102 6.91324 8.40818 6.8063C8.59533 6.67262 8.80922 6.44536 9.04985 6.12452V6.08442C9.04985 6.03095 9.03648 5.96411 9.00974 5.8839C9.00974 5.80369 9.00974 5.72348 9.00974 5.64327C9.00974 5.56306 9.02311 5.50959 9.04985 5.48285C9.10332 5.45612 9.18353 5.38928 9.29047 5.28233C9.39742 5.14865 9.51773 5.01497 9.65141 4.88129C9.81183 4.72087 9.95888 4.58719 10.0926 4.48024C10.253 4.3733 10.4 4.31982 10.5337 4.31982C10.6407 4.31982 10.8144 4.38666 11.0551 4.52035C11.3224 4.65403 11.4962 4.78771 11.5764 4.92139Z" fill="#1D4E1A"/>
                  </svg>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="w-full max-w-80 justify-start text-[#1d4e1a] text-base font-normal font-['Calistoga'] leading-snug tracking-tight">I stop by every morning before work, and it’s the best part of my day. The iced latte is my go-to, but I’ve honestly never had a bad drink here. Everything tastes handcrafted and full of care.</div>
                  <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Jordan T. – Iced latte addict</div>
                </div>
              </div>
            </div>
            <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-6">
              <div className="self-stretch px-6 py-8 bg-[#1d4e1a]/5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex flex-col justify-start items-start gap-5">
                <div data-svg-wrapper className="relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.9556 4.92139V5.0016C18.9556 5.16202 18.8888 5.40264 18.7551 5.72348C18.6214 6.01758 18.461 6.33841 18.2739 6.68599C18.1135 7.00682 17.9397 7.31429 17.7525 7.60839C17.5921 7.90249 17.4851 8.10301 17.4317 8.20995C17.298 8.42385 17.1643 8.63774 17.0306 8.85163C16.8969 9.03878 16.8301 9.18583 16.8301 9.29278C16.8301 9.50667 16.8836 9.70719 16.9905 9.89434C17.0975 10.0815 17.1509 10.3221 17.1509 10.6162C17.0707 10.643 16.9905 10.7766 16.9103 11.0173C16.8568 11.2312 16.8301 11.4049 16.8301 11.5386C16.8301 11.8862 16.9103 12.1669 17.0707 12.3808C17.2579 12.568 17.3782 12.7819 17.4317 13.0225C17.4851 13.2364 17.5386 13.5171 17.5921 13.8647C17.6723 14.2123 17.7391 14.5732 17.7926 14.9475C17.8728 15.3218 17.9397 15.6827 17.9931 16.0303C18.0466 16.3779 18.0733 16.672 18.0733 16.9126C18.0733 17.2067 17.9931 17.4874 17.8327 17.7548C17.699 18.0222 17.5119 18.2628 17.2713 18.4767C17.0574 18.6906 16.8301 18.8777 16.5895 19.0382C16.3489 19.1718 16.135 19.252 15.9478 19.2788H15.9879C15.9879 19.3055 15.8141 19.3857 15.4666 19.5194C15.1457 19.6264 14.8383 19.6798 14.5442 19.6798C14.4639 19.6798 14.3436 19.6531 14.1832 19.5996H14.2233C14.2233 19.5729 14.1698 19.5194 14.0629 19.4392C13.956 19.3323 13.8356 19.2253 13.702 19.1184C13.595 18.9847 13.4881 18.8644 13.3811 18.7574C13.2742 18.6505 13.2207 18.5703 13.2207 18.5168C13.2207 18.4099 13.2207 18.3163 13.2207 18.2361C13.2474 18.1291 13.2608 18.0355 13.2608 17.9553C13.2608 17.9821 13.1672 17.7548 12.9801 17.2736C12.8197 16.7923 12.7127 16.1774 12.6592 15.4288C12.7127 15.4288 12.7662 15.3886 12.8197 15.3084C12.8999 15.2282 12.94 15.1614 12.94 15.1079C12.94 14.9475 12.8865 14.7871 12.7796 14.6267C12.6994 14.4395 12.6592 14.1989 12.6592 13.9048C12.6592 13.5305 12.7395 13.076 12.8999 12.5412C13.0603 11.9798 13.1806 11.4317 13.2608 10.897C13.2875 10.8167 13.3678 10.6697 13.5014 10.4558C13.6351 10.2152 13.7822 9.96118 13.9426 9.69382C14.103 9.42646 14.2501 9.18583 14.3837 8.97194C14.5174 8.73131 14.5976 8.57089 14.6244 8.49069C14.7046 8.06291 14.7981 7.75544 14.9051 7.56828C15.0388 7.38113 15.1725 7.23408 15.3061 7.12714C15.4398 7.02019 15.6002 6.91324 15.7874 6.8063C15.9745 6.67262 16.1884 6.44536 16.4291 6.12452V6.08442C16.4291 6.03095 16.4157 5.96411 16.389 5.8839C16.389 5.80369 16.389 5.72348 16.389 5.64327C16.389 5.56306 16.4023 5.50959 16.4291 5.48285C16.4825 5.45612 16.5627 5.38928 16.6697 5.28233C16.7766 5.14865 16.8969 5.01497 17.0306 4.88129C17.191 4.72087 17.3381 4.58719 17.4718 4.48024C17.6322 4.3733 17.7792 4.31982 17.9129 4.31982C18.0199 4.31982 18.1937 4.38666 18.4343 4.52035C18.7016 4.65403 18.8754 4.78771 18.9556 4.92139ZM11.5764 4.92139V5.0016C11.5764 5.16202 11.5096 5.40264 11.3759 5.72348C11.2422 6.01758 11.0818 6.33841 10.8947 6.68599C10.7342 7.00682 10.5604 7.31429 10.3733 7.60839C10.2129 7.90249 10.1059 8.10301 10.0525 8.20995C9.91878 8.42385 9.78509 8.63774 9.65141 8.85163C9.51773 9.03878 9.45089 9.18583 9.45089 9.29278C9.45089 9.50667 9.50436 9.70719 9.61131 9.89434C9.71825 10.0815 9.77173 10.3221 9.77173 10.6162C9.69152 10.643 9.61131 10.7766 9.5311 11.0173C9.47763 11.2312 9.45089 11.4049 9.45089 11.5386C9.45089 11.8862 9.5311 12.1669 9.69152 12.3808C9.87867 12.568 9.99898 12.7819 10.0525 13.0225C10.1059 13.2364 10.1594 13.5171 10.2129 13.8647C10.2931 14.2123 10.3599 14.5732 10.4134 14.9475C10.4936 15.3218 10.5604 15.6827 10.6139 16.0303C10.6674 16.3779 10.6941 16.672 10.6941 16.9126C10.6941 17.2067 10.6139 17.4874 10.4535 17.7548C10.3198 18.0222 10.1327 18.2628 9.89204 18.4767C9.67815 18.6906 9.45089 18.8777 9.21026 19.0382C8.96964 19.1718 8.75575 19.252 8.56859 19.2788H8.6087C8.6087 19.3055 8.43491 19.3857 8.08734 19.5194C7.7665 19.6264 7.45904 19.6798 7.16494 19.6798C7.08473 19.6798 6.96442 19.6531 6.804 19.5996H6.8441C6.8441 19.5729 6.79063 19.5194 6.68368 19.4392C6.57674 19.3323 6.45643 19.2253 6.32274 19.1184C6.2158 18.9847 6.10885 18.8644 6.00191 18.7574C5.89496 18.6505 5.84149 18.5703 5.84149 18.5168C5.84149 18.4099 5.84149 18.3163 5.84149 18.2361C5.86823 18.1291 5.8816 18.0355 5.8816 17.9553C5.8816 17.9821 5.78802 17.7548 5.60086 17.2736C5.44045 16.7923 5.3335 16.1774 5.28003 15.4288C5.3335 15.4288 5.38697 15.3886 5.44045 15.3084C5.52066 15.2282 5.56076 15.1614 5.56076 15.1079C5.56076 14.9475 5.50729 14.7871 5.40034 14.6267C5.32013 14.4395 5.28003 14.1989 5.28003 13.9048C5.28003 13.5305 5.36024 13.076 5.52066 12.5412C5.68107 11.9798 5.80139 11.4317 5.8816 10.897C5.90833 10.8167 5.98854 10.6697 6.12222 10.4558C6.2559 10.2152 6.40295 9.96118 6.56337 9.69382C6.72379 9.42646 6.87084 9.18583 7.00452 8.97194C7.1382 8.73131 7.21841 8.57089 7.24515 8.49069C7.32536 8.06291 7.41893 7.75544 7.52588 7.56828C7.65956 7.38113 7.79324 7.23408 7.92692 7.12714C8.0606 7.02019 8.22102 6.91324 8.40818 6.8063C8.59533 6.67262 8.80922 6.44536 9.04985 6.12452V6.08442C9.04985 6.03095 9.03648 5.96411 9.00974 5.8839C9.00974 5.80369 9.00974 5.72348 9.00974 5.64327C9.00974 5.56306 9.02311 5.50959 9.04985 5.48285C9.10332 5.45612 9.18353 5.38928 9.29047 5.28233C9.39742 5.14865 9.51773 5.01497 9.65141 4.88129C9.81183 4.72087 9.95888 4.58719 10.0926 4.48024C10.253 4.3733 10.4 4.31982 10.5337 4.31982C10.6407 4.31982 10.8144 4.38666 11.0551 4.52035C11.3224 4.65403 11.4962 4.78771 11.5764 4.92139Z" fill="#1D4E1A"/>
                  </svg>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="w-full max-w-80 justify-start text-[#1d4e1a] text-base font-normal font-['Calistoga'] leading-snug tracking-tight">Always a warm, welcoming vibe — perfect for a quick coffee or a quiet read. The banana bread? Totally addictive.</div>
                  <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Sofia R. – Coffee fan</div>
                </div>
              </div>
              <img className="self-stretch flex-1 rounded-3xl border border-[#1d4e1a]/10" src={coffee_right_block_5} />
            </div>
          </div>
          <a href=""><div data-color="Green" data-state="Default" data-type="Primary" className="px-4 pt-2.5 pb-3 bg-[#1d4e1a] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a] inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-[#fcf3d9] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Our Locations</div>
          </div></a>
        </div>
      </div>


      { /* Блок с картой */ }
      <div className="w-full self-stretch px-10 py-40 bg-[#1d4e1a] inline-flex flex-col justify-start items-center gap-28">
        <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-[104px]">
          <div className="self-stretch flex flex-col justify-start items-start gap-16">
            <div className="self-stretch flex flex-col justify-start items-center gap-3">
              <div className="w-full max-w-[480px] text-center justify-start text-[#fcf3d9] text-6xl font-normal font-['Calistoga'] leading-[74.24px]">Nearby Cafés</div>
              <div className="w-full max-w-96 text-center justify-start text-[#fcf3d9] text-lg font-normal font-['Cabin_Condensed'] leading-normal tracking-tight">Find a Brewhaus nearby and stop in for your favorite drink.</div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-6">
              {/* <img className="flex-1 self-stretch rounded-3xl border border-[#1d4e1a]/10" src={map} /> */}
              <Map />
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
                <div className="self-stretch inline-flex justify-start items-center gap-6">
                  <div className="flex-1 p-6 bg-[#fcf3d9] rounded-3xl inline-flex flex-col justify-start items-start gap-5">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                      <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Nice</div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                        <div className="w-full max-w-40 justify-start text-[#1d4e1a] text-base font-normal font-['Calistoga'] leading-snug tracking-tight">47 Rue de France, 06000 Nice</div>
                        <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Open daily: 7AM – 7PM</div>
                      </div>
                    </div>
                    <a href="" data-color="Green" data-state="Default" data-type="Primary" className="self-stretch px-4 pt-2.5 pb-3 bg-[#1d4e1a] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a] inline-flex justify-center items-center gap-2.5">
                      <div className="text-center justify-start text-[#fcf3d9] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Get Directions</div>
                    </a>
                  </div>
                  <div className="flex-1 p-6 bg-[#fcf3d9] rounded-3xl inline-flex flex-col justify-start items-start gap-5">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                      <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Nice</div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                        <div className="w-full max-w-40 justify-start text-[#1d4e1a] text-base font-normal font-['Calistoga'] leading-snug tracking-tight">2 Rue Amiral de Grasse, 06000 Nice</div>
                        <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Open daily: 8AM – 7PM</div>
                      </div>
                    </div>
                    <a href="" data-color="Green" data-state="Default" data-type="Primary" className="self-stretch px-4 pt-2.5 pb-3 bg-[#1d4e1a] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a] inline-flex justify-center items-center gap-2.5">
                      <div className="text-center justify-start text-[#fcf3d9] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Get Directions</div>
                    </a>
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-6">
                  <div className="flex-1 p-6 bg-[#fcf3d9] rounded-3xl inline-flex flex-col justify-start items-start gap-5">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                      <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Nice</div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                        <div className="w-full max-w-40 justify-start text-[#1d4e1a] text-base font-normal font-['Calistoga'] leading-snug tracking-tight">3 Pl. Franklin, 06000 Nice</div>
                        <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Open daily: 6AM – 8PM</div>
                      </div>
                    </div>
                    <a href="" data-color="Green" data-state="Default" data-type="Primary" className="self-stretch px-4 pt-2.5 pb-3 bg-[#1d4e1a] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a] inline-flex justify-center items-center gap-2.5">
                      <div className="text-center justify-start text-[#fcf3d9] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Get Directions</div>
                    </a>
                  </div>
                  <div className="flex-1 p-6 bg-[#fcf3d9] rounded-3xl inline-flex flex-col justify-start items-start gap-5">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                      <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Nice</div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                        <div className="w-full max-w-40 justify-start text-[#1d4e1a] text-base font-normal font-['Calistoga'] leading-snug tracking-tight">39 Av. Jean Médecin, 06000 Nice</div>
                        <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Open daily: 8AM – 7PM</div>
                      </div>
                    </div>
                    <a href="" data-color="Green" data-state="Default" data-type="Primary" className="self-stretch px-4 pt-2.5 pb-3 bg-[#1d4e1a] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a] inline-flex justify-center items-center gap-2.5">
                      <div className="text-center justify-start text-[#fcf3d9] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Get Directions</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-center gap-10">
            <div className="w-full max-w-64 text-center justify-start text-[#fcf3d9] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">Need Help?</div>
            <div className="self-stretch inline-flex justify-start items-center gap-6">
              <div data-state="Default" className="flex-1 p-6 bg-[#fcf3d9]/5 rounded-[20px] inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-[#fcf3d9] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">General Inquiries</div>
                <div className="self-stretch justify-start text-[#fcf3d9] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">+1 (212) 555-0198</div>
              </div>
              <div data-state="Default" className="flex-1 p-6 bg-[#fcf3d9]/5 rounded-[20px] inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-[#fcf3d9] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Customer Support</div>
                <div className="self-stretch justify-start text-[#fcf3d9] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">+1 (718) 555-0243</div>
              </div>
              <div data-state="Default" className="flex-1 p-6 bg-[#fcf3d9]/5 rounded-[20px] inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-[#fcf3d9] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">General Email</div>
                <div className="self-stretch justify-start text-[#fcf3d9] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">hello@bhaus.com</div>
              </div>
              <div data-state="Default" className="flex-1 p-6 bg-[#fcf3d9]/5 rounded-[20px] inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-[#fcf3d9] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Support Email</div>
                <div className="self-stretch justify-start text-[#fcf3d9] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">support@bhaus.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      { /* Блок с "Что нового?" */ }
      <div className="w-full bg-[#fcf3d9] self-stretch px-10 py-40 inline-flex flex-col justify-start items-center">
        <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-16">
          <div className="self-stretch inline-flex justify-between items-end">
            <div className="flex-1 max-w-[480px] justify-start text-[#1d4e1a] text-6xl font-normal font-['Calistoga'] leading-[74.24px]">What’s New at Our Coffee Shop</div>
            <a href="" data-color="Green" data-state="Default" data-type="Primary" className="px-4 pt-2.5 pb-3 bg-[#1d4e1a] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a] flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-[#fcf3d9] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">View All</div>
            </a>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-6">
            <div data-adaptation="Desktop" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-4">
              <img className="self-stretch h-72 rounded-3xl border border-[#1d4e1a]/10" src={what_new_left_block_6} />
              <div className="self-stretch px-2 flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Apr 10, 2025</div>
                <div className="w-full max-w-80 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Celebrate the Season with Our New Spring Drink Specials Today</div>
              </div>
            </div>
            <div data-adaptation="Desktop" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-4">
              <img className="self-stretch h-72 rounded-3xl border border-[#1d4e1a]/10" src={what_new_center_block_6} />
              <div className="self-stretch px-2 flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Apr 2, 2025</div>
                <div className="w-full max-w-80 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Our New Brewhaus Flushing Location Is Now Officially Open</div>
              </div>
            </div>
            <div data-adaptation="Desktop" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-4">
              <img className="self-stretch h-72 rounded-3xl border border-[#1d4e1a]/10" src={what_new_right_block_6} />
              <div className="self-stretch px-2 flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">Mar 23, 2025</div>
                <div className="w-full max-w-80 justify-start text-[#1d4e1a] text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">Introducing Our Exciting New Loyalty Program for Coffee Lovers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Order />
      <Marquee />
      <Footer />
      </div>
    </>
  );
};

export default Home;