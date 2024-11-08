import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import useFetch from './huck/useFetch';
import SkeletonList from './components/Skeleton/Skeleton';

const App = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const { data, loading, error } = useFetch('https://dummyjson.com/products');

  if (loading) return <SkeletonList />;
  if (error) return <p>Xato yuz berdi: {error.message}</p>;

  const products = data?.products || [];

  // Mahsulotlarni kategoriya bo'yicha filtrlash
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // "See More" tugmasi
  const handleSeeMore = () => {
    setVisibleProducts((prev) => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Mahsulotlar Ro'yxati</h1>

      {/* Kategoriya filtrlash */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Barcha Kategoriyalar</option>
          {Array.from(new Set(products.map((product) => product.category))).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* "See More" tugmasi */}
      {visibleProducts < filteredProducts.length && (
        <div className="flex justify-center mt-6">
          <button onClick={handleSeeMore} className="bg-blue-500 text-white py-2 px-4 rounded">
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
