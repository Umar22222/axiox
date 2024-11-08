import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold">${product.price}</span>
          <div className="flex items-center space-x-1">
            {Array.from({ length: Math.round(product.rating) }, (_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
            {Array.from({ length: 5 - Math.round(product.rating) }, (_, i) => (
              <span key={i} className="text-gray-300">★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
