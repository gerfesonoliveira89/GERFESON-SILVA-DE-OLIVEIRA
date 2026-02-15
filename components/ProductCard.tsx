
import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="group bg-brand-gray rounded-2xl p-3 border border-gray-800/50 hover:border-brand-yellow/30 transition-all flex gap-4 cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden shadow-lg bg-gray-900">
        {/* Skeleton de carregamento */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
        
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
        />

        {product.isPopular && (
          <div className="absolute top-0 left-0 bg-brand-yellow text-[10px] font-bold px-2 py-1 rounded-br-lg text-brand-darker flex items-center gap-1 shadow-md z-10">
            <Star size={10} fill="black" /> TOP
          </div>
        )}
      </div>
      
      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <h3 className="font-bold text-white text-lg leading-tight mb-1">{product.name}</h3>
          <p className="text-gray-400 text-xs line-clamp-2">{product.description}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-brand-yellow font-bold text-lg">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </span>
          <button className="bg-gray-700 hover:bg-brand-yellow hover:text-black text-white p-2 rounded-lg transition-colors">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
