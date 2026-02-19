
import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, Star, ImageOff } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className="group bg-brand-gray rounded-2xl overflow-hidden border border-gray-800/50 hover:border-brand-yellow/30 transition-all flex cursor-pointer h-32"
      onClick={() => onClick(product)}
    >
      {/* Image Side */}
      <div className="relative w-32 shrink-0 bg-gray-900 overflow-hidden">
        {/* Skeleton de carregamento */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}

        {hasError ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-600">
            <ImageOff size={20} />
          </div>
        ) : (
          <img 
            src={product.image} 
            alt={product.name} 
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              setHasError(true);
              setIsLoaded(false);
            }}
          />
        )}

        {product.isPopular && (
          <div className="absolute top-2 left-2 bg-brand-yellow text-brand-darker text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1 z-10">
            <Star size={10} fill="black" /> TOP
          </div>
        )}
      </div>
      
      {/* Content Body */}
      <div className="flex-1 p-3 flex flex-col justify-between relative">
        <div>
          <h3 className="font-bold text-white text-base leading-tight mb-1 group-hover:text-brand-yellow transition-colors line-clamp-1">{product.name}</h3>
          <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{product.description}</p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-brand-yellow font-bold text-lg">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </span>
          <button className="bg-brand-yellow text-brand-darker hover:bg-white p-2 rounded-lg transition-colors shadow-lg shadow-brand-yellow/10">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
