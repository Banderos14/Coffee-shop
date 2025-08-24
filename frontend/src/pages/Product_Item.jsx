import Logo from '../assets/Logo.svg';
import React, { useState, useEffect, useMemo } from 'react';

import { useParams, Link} from 'react-router-dom';
import { products } from '../data/productData';
import Order from '../components/order';
import Footer from '../components/footer';
import Marquee from '../components/marquee';
import AddToCartButton from '../components/button/AddToCartButton';

export default function ProductItem() {
    const { productId } = useParams();
    const product = products.find((p) => p.id === productId);
    const related = getRelatedProducts(product, products);

    const milkOpts = Array.isArray(product.milkOptions) ? product.milkOptions : [];
    const milkUp = typeof product.milkPrice === 'number' ? product.milkPrice : null;
    const [selectedMilk, setSelectedMilk] = useState(null);

    const syrupOpts = Array.isArray(product.syrupOptions) ? product.syrupOptions : [];
    const syrupUp = typeof product.syrupPrice === 'number' ? product.syrupPrice : null;
    const [selectedSyrup, setSelectedSyrup] = useState(null);

    const [selectedSize, setSelectedSize] = useState("Small");


    {/* Price Calculation */}
    const sizePrice = product.price?.[selectedSize] ?? product.price?.Small ?? 0;
    const milkExtra = selectedMilk && milkUp ? milkUp : 0;
    const syrupExtra = selectedSyrup && syrupUp ? syrupUp : 0;

    const totalPrice = useMemo(() => sizePrice + milkExtra + syrupExtra, [
      sizePrice, milkExtra, syrupExtra
    ]);



  if (!product) {
    return <div className="p-10">Product not found.</div>;
  }

  function getRelatedProducts(currentProduct, allProducts) {
    if (!currentProduct || !currentProduct.tags) return [];

    const related = allProducts
      .filter((p) => p.id !== currentProduct.id)
      .map((p) => {
        const matchCount = p.tags?.filter(tag => currentProduct.tags.includes(tag)).length || 0;
        return { ...p, matchCount };
      })
      .filter((p) => p.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, 3); // max 3 recommendations

    return related;
  }
  useEffect(() => {
     // Смена товара — сбросить всё выбранное
     setSelectedMilk(null);
     setSelectedSyrup(null);
     setSelectedSize("Small");
  }, [product.id]);

  return (
    <div className="flex flex-col items-center bg-[#fcf3d9]">
      {/* Navbar */}
      <div className="sticky top-8 z-50 flex flex-col items-center gap-8 mb-[90px]">
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
      {/* Product Details */}
      <div className="w-full max-w-[960px] inline-flex justify-start items-start gap-12 px-10">
        <div className='flex flex-col justify-start items-center gap-6'>
          <div className="flex-1 h-96 max-w-96 max-h-96 bg-[#1d4e1a] rounded-3xl flex justify-center items-center overflow-hidden">
            <img className="flex-1 h-96 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={product.image} alt={product.name} />
          </div>
          <div className="flex justify-center">
            <AddToCartButton
              label="Add to cart"
              onAdd={async () => {
                // здесь твоя логика добавления товара в корзину
                // пример: cart.add({ product, size: selectedSize, milk: selectedMilk, syrup: selectedSyrup, price: totalPrice });
                await new Promise(r => setTimeout(r, 300)); // имитация запроса
              }}
              disabled={false /* например: !selectedSize */}
            />
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch justify-start text-[#1d4e1a] text-5xl font-normal font-['Calistoga'] leading-[51.04px]">{product.name}</div>
              <div className="self-stretch justify-start text-[#1d4e1a]/70 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">${totalPrice.toFixed(2)}</div>
            </div>
            <div className="w-full max-w-96 justify-start text-[#1d4e1a] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">{product.description}</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">

            {/* Milk Options */}
          {milkOpts.length > 0 && (
            <div className="self-stretch pt-5 border-t border-[#1d4e1a]/10 flex flex-col justify-start items-start gap-3">
              {/* Заголовок с правой частью как у Sizes */}
              <div className="self-stretch flex items-center justify-between">
                <div className="text-[#1d4e1a]/70 text-base font-['Calistoga'] leading-snug">
                  Milk Options
                </div>
                {/* Правый ценник — появляется при выборе молока */}
                {selectedMilk && milkUp != null && (
                  <div className="text-[#1d4e1a]/70 text-sm font-['Cabin_Condensed']">
                    +$ {milkUp.toFixed(2)}
                  </div>
                )}
              </div>
                    
              <div className="self-stretch inline-flex flex-wrap gap-1.5">
                {milkOpts.includes('Almond') && (
                  <button
                    type="button"
                    onClick={() => setSelectedMilk(prev => prev === 'Almond' ? null : 'Almond')}
                    className={
                      "px-2 py-1 rounded-md outline outline-1 outline-offset-[-1px] flex items-center gap-1 " +
                      (selectedMilk === 'Almond'
                        ? "bg-[#1d4e1a] outline-[#1d4e1a] text-[#ffecb8]"
                        : "bg-[#1d4e1a]/5 outline-[#1d4e1a]/10 text-[#1d4e1a]")
                    }
                  >
                    <span className="text-sm font-['Cabin_Condensed']">Almond</span>
                  </button>
                )}
          
                {milkOpts.includes('Oat') && (
                  <button
                    type="button"
                    onClick={() => setSelectedMilk(prev => prev === 'Oat' ? null : 'Oat')}
                    className={
                      "px-2 py-1 rounded-md outline outline-1 outline-offset-[-1px] flex items-center gap-1 " +
                      (selectedMilk === 'Oat'
                        ? "bg-[#1d4e1a] outline-[#1d4e1a] text-[#ffecb8]"
                        : "bg-[#1d4e1a]/5 outline-[#1d4e1a]/10 text-[#1d4e1a]")
                    }
                  >
                    <span className="text-sm font-['Cabin_Condensed']">Oat</span>
                  </button>
                )}
          
                {milkOpts.includes('Coconut') && (
                  <button
                    type="button"
                    onClick={() => setSelectedMilk(prev => prev === 'Coconut' ? null : 'Coconut')}
                    className={
                      "px-2 py-1 rounded-md outline outline-1 outline-offset-[-1px] flex items-center gap-1 " +
                      (selectedMilk === 'Coconut'
                        ? "bg-[#1d4e1a] outline-[#1d4e1a] text-[#ffecb8]"
                        : "bg-[#1d4e1a]/5 outline-[#1d4e1a]/10 text-[#1d4e1a]")
                    }
                  >
                    <span className="text-sm font-['Cabin_Condensed']">Coconut</span>
                  </button>
                )}
          
                {milkOpts.includes('Soy') && (
                  <button
                    type="button"
                    onClick={() => setSelectedMilk(prev => prev === 'Soy' ? null : 'Soy')}
                    className={
                      "px-2 py-1 rounded-md outline outline-1 outline-offset-[-1px] flex items-center gap-1 " +
                      (selectedMilk === 'Soy'
                        ? "bg-[#1d4e1a] outline-[#1d4e1a] text-[#ffecb8]"
                        : "bg-[#1d4e1a]/5 outline-[#1d4e1a]/10 text-[#1d4e1a]")
                    }
                  >
                    <span className="text-sm font-['Cabin_Condensed']">Soy</span>
                  </button>
                )}
              </div>
            </div>
          )}

            {/* Syrup Options */}
              {syrupOpts.length > 0 && (
                <div className="self-stretch pt-5 border-t border-[#1d4e1a]/10 flex flex-col justify-start items-start gap-3">
                  {/* Заголовок */}
                  <div className="self-stretch flex items-center justify-between">
                    <div className="text-[#1d4e1a]/70 text-base font-['Calistoga'] leading-snug">
                      Syrup Options
                    </div>
                    {/* Правый ценник — появляется при выборе сиропа */}
                    {selectedSyrup && syrupUp != null && (
                      <div className="text-[#1d4e1a]/70 text-sm font-['Cabin_Condensed']">
                        +$ {syrupUp.toFixed(2)}
                      </div>
                    )}
                  </div>
                  
                  <div className="self-stretch inline-flex flex-wrap gap-1.5">
                    {syrupOpts.map((syrup) => (
                      <button
                        key={syrup}
                        type="button"
                        onClick={() => setSelectedSyrup(prev => prev === syrup ? null : syrup)}
                        className={
                          "px-2 py-1 rounded-md outline outline-1 outline-offset-[-1px] flex items-center gap-1 " +
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
                    <div className="text-[#1d4e1a]/70 text-base font-['Calistoga'] leading-snug">
                      Available Sizes
                    </div>
                    {/* Правый ценник — показывает текущую цену выбранного размера */}
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
                          "px-2 py-1 rounded-md outline outline-1 outline-offset-[-1px] flex items-center gap-1 " +
                          (selectedSize === size
                            ? "bg-[#1d4e1a] outline-[#1d4e1a] text-[#ffecb8]"
                            : "bg-[#1d4e1a]/5 outline-[#1d4e1a]/10 text-[#1d4e1a]")
                        }
                      >
                        <span className="text-sm font-['Cabin_Condensed']">{size}</span>
                        {size !== "Small" && (
                          <span className="text-[#1d4e1a]/70 text-xs font-['Cabin_Condensed']">
                            (+$ {(price - product.price.Small).toFixed(2)})
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            <div className="self-stretch pt-5 border-t border-[#1d4e1a]/10 flex flex-col justify-start items-start gap-4">
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="self-stretch justify-start text-[#1d4e1a]/70 text-base font-normal font-['Calistoga'] leading-snug tracking-tight">
                  Allergen Risks*
                </div>
                      
                <div className="self-stretch inline-flex justify-start items-center gap-1.5 flex-wrap content-center">
                  {product.allergens.length === 1 && product.allergens[0] === 'None' ? (
                    <div
                      data-show-caption="false"
                      className="px-2 py-1 bg-[#1d4e1a]/5 rounded-md outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center gap-1"
                    >
                      <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">
                        None
                      </div>
                    </div>
                  ) : (
                    product.allergens.map((allergen, index) => (
                      <div
                        key={index}
                        data-show-caption="false"
                        className="px-2 py-1 bg-[#1d4e1a]/5 rounded-md outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center gap-1"
                      >
                        <div className="justify-start text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">
                          {allergen}
                        </div>
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

      {/* Add to Cart */}
      {related.length > 0 && (
      <div className="self-stretch px-10 py-[140px] inline-flex flex-col justify-start items-center">
        <div className="w-full max-w-[960px] flex flex-col justify-start items-center gap-12">
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="flex-1 max-w-80 justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">You’ll Love These Too</div>
            <div className="px-4 pt-2.5 pb-3 bg-[#1d4e1a] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a] flex justify-center items-center gap-2.5">
              <a href="/menu" className="text-center justify-start text-[#ffecb8] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Explore Menu</a>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-6">
            {related.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <div className="flex flex-col gap-3">
                  <div className="h-72 bg-[#1d4e1a] rounded-3xl flex justify-center items-center overflow-hidden relative">
                    <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                    {item.isNew && (
                      <div className="px-2 pt-0.5 pb-1 left-[16px] top-[16px] absolute bg-[#ffecb8] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center">
                        <div className="text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed'] leading-none tracking-wide">New</div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <div className="text-[#1d4e1a] text-xl font-['Calistoga']">{item.name}</div>
                    <div className="text-[#1d4e1a]/70 text-xl font-['Calistoga']">${item.price?.Small.toFixed(2)}</div>
                  </div>
                </div>
              </Link>
              ))}
          </div>
        </div>
      </div>
    )}

    

    <Order/>
    <Marquee/>
    <Footer/>
  </div>
  );
}


