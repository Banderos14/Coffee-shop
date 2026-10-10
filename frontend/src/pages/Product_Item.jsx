import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/productData';
import Navbar from '../components/navbar';
import Order from '../components/order';
import Footer from '../components/footer';
import Marquee from '../components/marquee';
import AddToCartButton from '../components/button/AddToCartButton';

function getRelatedProducts(currentProduct, allProducts) {
  if (!currentProduct || !currentProduct.tags) return [];
  return allProducts
    .filter((p) => p.id !== currentProduct.id)
    .map((p) => {
      const matchCount = p.tags?.filter(tag => currentProduct.tags.includes(tag)).length || 0;
      return { ...p, matchCount };
    })
    .filter((p) => p.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 3);
}

export default function ProductItem() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  const milkOpts = Array.isArray(product?.milkOptions) ? product.milkOptions : [];
  const milkUp = typeof product?.milkPrice === 'number' ? product.milkPrice : null;
  const syrupOpts = Array.isArray(product?.syrupOptions) ? product.syrupOptions : [];
  const syrupUp = typeof product?.syrupPrice === 'number' ? product.syrupPrice : null;

  const [selectedMilk, setSelectedMilk] = useState(null);
  const [selectedSyrup, setSelectedSyrup] = useState(null);
  const [selectedSize, setSelectedSize] = useState("Small");

  const sizePrice = product?.price?.[selectedSize] ?? product?.price?.Small ?? 0;
  const milkExtra = selectedMilk && milkUp ? milkUp : 0;
  const syrupExtra = selectedSyrup && syrupUp ? syrupUp : 0;
  const totalPrice = useMemo(() => sizePrice + milkExtra + syrupExtra, [sizePrice, milkExtra, syrupExtra]);

  const related = product ? getRelatedProducts(product, products) : [];

  useEffect(() => {
    setSelectedMilk(null);
    setSelectedSyrup(null);
    setSelectedSize("Small");
  }, [product?.id]);

  if (!product) {
    return <div className="p-10 text-[#1d4e1a]">Product not found.</div>;
  }

  return (
    <div className="flex flex-col items-center bg-[#fcf3d9]">
      {/* Navbar adds its own 32px top offset in flow, so 58px here matches the original 90px gap */}
      <Navbar showBanner={false} className="mb-12 lg:mb-[58px]" />

      {/* Product Details */}
      {/* Phone: image → details → add to cart. md+: image and button on the left, details on the right. */}
      <div className="w-full max-w-[960px] px-4 sm:px-10 grid grid-cols-1 md:grid-cols-[auto_minmax(0,1fr)] md:grid-rows-[auto_1fr] gap-x-12 gap-y-8 md:gap-y-6">
        <div className="md:col-start-1 md:row-start-1 flex justify-center">
          <div className="w-full max-w-96 md:w-72 lg:w-96 aspect-square bg-[#1d4e1a] rounded-3xl flex justify-center items-center overflow-hidden">
            <img className="w-full h-full object-cover shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={product.image} alt={product.name} />
          </div>
        </div>
        <div className="order-last md:order-none md:col-start-1 md:row-start-2 self-start flex justify-center">
            <AddToCartButton
              label="Add to cart"
              onAdd={async () => {
                await new Promise(r => setTimeout(r, 300));
              }}
              disabled={false}
            />
        </div>
        <div className="md:col-start-2 md:row-start-1 md:row-span-2 min-w-0 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <h1 className="self-stretch justify-start text-[#1d4e1a] heading-product font-normal font-['Calistoga'] break-words">{product.name}</h1>
              <div className="self-stretch justify-start text-[#1d4e1a]/70 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">${totalPrice.toFixed(2)}</div>
            </div>
            <div className="w-full max-w-96 justify-start text-[#1d4e1a] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">{product.description}</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">

            {/* Milk Options */}
            {milkOpts.length > 0 && (
              <div className="self-stretch pt-5 border-t border-[#1d4e1a]/10 flex flex-col justify-start items-start gap-3">
                <div className="self-stretch flex items-center justify-between">
                  <div className="text-[#1d4e1a]/70 text-base font-['Calistoga'] leading-snug">Milk Options</div>
                  {selectedMilk && milkUp != null && (
                    <div className="text-[#1d4e1a]/70 text-sm font-['Cabin_Condensed']">+${milkUp.toFixed(2)}</div>
                  )}
                </div>
                <div className="self-stretch inline-flex flex-wrap gap-1.5">
                  {milkOpts.map((milk) => (
                    <button
                      key={milk}
                      type="button"
                      onClick={() => setSelectedMilk(prev => prev === milk ? null : milk)}
                      className={
                        "px-2 py-1 touch:min-h-10 touch:px-3 rounded-md outline outline-1 outline-offset-[-1px] flex items-center gap-1 " +
                        (selectedMilk === milk
                          ? "bg-[#1d4e1a] outline-[#1d4e1a] text-[#ffecb8]"
                          : "bg-[#1d4e1a]/5 outline-[#1d4e1a]/10 text-[#1d4e1a]")
                      }
                    >
                      <span className="text-sm font-['Cabin_Condensed']">{milk}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Syrup Options */}
            {syrupOpts.length > 0 && (
              <div className="self-stretch pt-5 border-t border-[#1d4e1a]/10 flex flex-col justify-start items-start gap-3">
                <div className="self-stretch flex items-center justify-between">
                  <div className="text-[#1d4e1a]/70 text-base font-['Calistoga'] leading-snug">Syrup Options</div>
                  {selectedSyrup && syrupUp != null && (
                    <div className="text-[#1d4e1a]/70 text-sm font-['Cabin_Condensed']">+${syrupUp.toFixed(2)}</div>
                  )}
                </div>
                <div className="self-stretch inline-flex flex-wrap gap-1.5">
                  {syrupOpts.map((syrup) => (
                    <button
                      key={syrup}
                      type="button"
                      onClick={() => setSelectedSyrup(prev => prev === syrup ? null : syrup)}
                      className={
                        "px-2 py-1 touch:min-h-10 touch:px-3 rounded-md outline outline-1 outline-offset-[-1px] flex items-center gap-1 " +
                        (selectedSyrup === syrup
                          ? "bg-[#1d4e1a] outline-[#1d4e1a] text-[#ffecb8]"
                          : "bg-[#1d4e1a]/5 outline-[#1d4e1a]/10 text-[#1d4e1a]")
                      }
                    >
                      <span className="text-sm font-['Cabin_Condensed']">{syrup}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Options */}
            {Object.keys(product.price).length > 1 && (
              <div className="self-stretch pt-5 border-t border-[#1d4e1a]/10 flex flex-col justify-start items-start gap-3">
                <div className="self-stretch flex items-center justify-between">
                  <div className="text-[#1d4e1a]/70 text-base font-['Calistoga'] leading-snug">Available Sizes</div>
                  {selectedSize && (
                    <div className="text-[#1d4e1a]/70 text-sm font-['Cabin_Condensed']">
                      ${product.price[selectedSize].toFixed(2)}
                    </div>
                  )}
                </div>
                <div className="self-stretch inline-flex flex-wrap gap-1.5">
                  {Object.entries(product.price).map(([size, price]) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={
                        "px-2 py-1 touch:min-h-10 touch:px-3 rounded-md outline outline-1 outline-offset-[-1px] flex items-center gap-1 " +
                        (selectedSize === size
                          ? "bg-[#1d4e1a] outline-[#1d4e1a] text-[#ffecb8]"
                          : "bg-[#1d4e1a]/5 outline-[#1d4e1a]/10 text-[#1d4e1a]")
                      }
                    >
                      <span className="text-sm font-['Cabin_Condensed']">{size}</span>
                      {size !== "Small" && (
                        <span className="text-[#1d4e1a]/70 text-xs font-['Cabin_Condensed']">
                          (+${(price - product.price.Small).toFixed(2)})
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Allergens */}
            <div className="self-stretch pt-5 border-t border-[#1d4e1a]/10 flex flex-col justify-start items-start gap-4">
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="self-stretch justify-start text-[#1d4e1a]/70 text-base font-normal font-['Calistoga'] leading-snug tracking-tight">
                  Allergen Risks*
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-1.5 flex-wrap content-center">
                  {product.allergens.length === 1 && product.allergens[0] === 'None' ? (
                    <div className="px-2 py-1 bg-[#1d4e1a]/5 rounded-md outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center gap-1">
                      <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">None</div>
                    </div>
                  ) : (
                    product.allergens.map((allergen, index) => (
                      <div
                        key={index}
                        className="px-2 py-1 bg-[#1d4e1a]/5 rounded-md outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center gap-1"
                      >
                        <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">{allergen}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="self-stretch justify-start text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">
                * Let our team know if you have any allergies before ordering.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="self-stretch px-4 sm:px-10 py-20 lg:py-[140px] inline-flex flex-col justify-start items-center">
          <div className="w-full max-w-[960px] flex flex-col justify-start items-center gap-8 lg:gap-12">
            <div className="self-stretch inline-flex justify-between items-center gap-4">
              <div className="flex-1 max-w-80 justify-start text-[#1d4e1a] text-2xl sm:text-3xl font-normal font-['Calistoga'] leading-tight sm:leading-9 tracking-tight">You'll Love These Too</div>
              <Link to="/menu" className="shrink-0 px-4 pt-2.5 pb-3 bg-[#1d4e1a] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a] flex justify-center items-center gap-2.5 text-center text-[#ffecb8] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Explore Menu</Link>
            </div>
            {/* Phone: swipeable row (scrolls inside itself); sm+: three-column grid */}
            <div className="self-stretch flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-2 sm:pb-0">
              {related.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className="shrink-0 w-[72%] sm:w-auto snap-start">
                  <div className="flex flex-col gap-3">
                    <div className="aspect-square lg:aspect-auto lg:h-72 bg-[#1d4e1a] rounded-3xl flex justify-center items-center overflow-hidden relative">
                      <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                      {item.isNew && (
                        <div className="px-2 pt-0.5 pb-1 left-[16px] top-[16px] absolute bg-[#ffecb8] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center">
                          <div className="text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">New</div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-baseline gap-2 px-2">
                      <div className="min-w-0 text-[#1d4e1a] text-lg sm:text-xl font-['Calistoga']">{item.name}</div>
                      <div className="shrink-0 text-[#1d4e1a]/70 text-lg sm:text-xl font-['Calistoga']">${item.price?.Small.toFixed(2)}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Order />
      <Marquee />
      <Footer />
    </div>
  );
}
