import Navbar from "../components/navbar";

import { useParams } from 'react-router-dom';
import { products } from '../data/productData';

export default function ProductItem() {
    const { productId } = useParams();
    const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="p-10">Product not found.</div>;
  }

  return (
    <div className="p-10">
        <Navbar />
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mb-4" />
      <p className="text-lg mb-4">{product.description}</p>
      <div className="mb-4">
        <h2 className="font-semibold">Sizes & Prices:</h2>
        <ul>
          {product.sizes.map((size) => (
            <li key={size}>
              {size}: €{product.price[size]}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-semibold">Allergens:</h2>
        <p>{product.allergens.join(', ')}</p>
      </div>
    </div>
  );
}


