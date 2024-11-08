import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API'dan ma'lumotlarni olish
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products.slice(0, 6))) // Birinchi 6 ta mahsulotni olish
      .catch((error) => console.error('Xato yuz berdi:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Mahsulotlar Ro'yxati</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
