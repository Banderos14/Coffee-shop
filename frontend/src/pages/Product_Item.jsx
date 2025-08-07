import Logo from '../assets/Logo.svg';

import { useParams, Link} from 'react-router-dom';
import { products } from '../data/productData';

export default function ProductItem() {
    const { productId } = useParams();
    const product = products.find((p) => p.id === productId);
    const related = getRelatedProducts(product, products);

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
        <div className="flex-1 h-96 max-w-96 max-h-96 bg-[#1d4e1a] rounded-3xl flex justify-center items-center overflow-hidden">
          <img className="flex-1 h-96 shadow-[24px_48px_120px_0px_rgba(0,0,0,0.25)]" src={product.image} alt={product.name} />
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch justify-start text-[#1d4e1a] text-5xl font-normal font-['Calistoga'] leading-[51.04px]">{product.name}</div>
              <div className="self-stretch justify-start text-[#1d4e1a]/70 text-xl font-normal font-['Calistoga'] leading-normal tracking-tight">$5.30</div>
            </div>
            <div className="w-full max-w-96 justify-start text-[#1d4e1a] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">{product.description}</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            {Object.keys(product.price).length > 1 && (
              <div className="self-stretch pt-5 border-t border-[#1d4e1a]/10 flex flex-col justify-start items-start gap-3">
                <div className="self-stretch justify-start text-[#1d4e1a]/70 text-base font-normal font-['Calistoga'] leading-snug tracking-tight">
                  Available Sizes
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-1.5 flex-wrap content-center">
                  {product.price.Small && (
                    <div className="px-2 py-1 bg-[#1d4e1a]/5 rounded-md outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center gap-1">
                      <div className="text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed']">Small</div>
                    </div>
                  )}
                  {product.price.Medium && (
                    <div className="px-2 py-1 bg-[#1d4e1a]/5 rounded-md outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center gap-1">
                      <div className="text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed']">Medium</div>
                      <div className="text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed']">
                        (+$ {Number(product.price.Medium).toFixed(2)})
                      </div>
                    </div>
                  )}
                  {product.price.Large && (
                    <div className="px-2 py-1 bg-[#1d4e1a]/5 rounded-md outline outline-1 outline-offset-[-1px] outline-[#1d4e1a]/10 flex justify-center items-center gap-1">
                      <div className="text-[#1d4e1a] text-sm font-normal font-['Cabin_Condensed']">Large</div>
                      <div className="text-[#1d4e1a]/70 text-sm font-normal font-['Cabin_Condensed']">
                        (+$ {Number(product.price.Large).toFixed(2)})
                      </div>
                    </div>
                  )}
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
      <div className="self-stretch px-10 py-40 inline-flex flex-col justify-start items-center">
        <div className="w-full max-w-[960px] flex flex-col justify-start items-center gap-12">
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="flex-1 max-w-80 justify-start text-[#1d4e1a] text-3xl font-normal font-['Calistoga'] leading-9 tracking-tight">You’ll Love These Too</div>
            <div className="px-4 pt-2.5 pb-3 bg-[#1d4e1a] rounded-full outline outline-1 outline-offset-[-1px] outline-[#1d4e1a] flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-[#ffecb8] text-base font-normal font-['Cabin_Condensed'] leading-tight tracking-tight">Explore Menu</div>
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
  </div>
  );
}


