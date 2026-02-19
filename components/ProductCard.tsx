
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ShoppingBag, Star, ImageOff } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset states when the product image changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [product.image]);

  return (
    <div 
      className="group bg-brand-gray rounded-2xl overflow-hidden border border-gray-800/50 hover:border-brand-yellow/30 transition-all flex cursor-pointer h-32 relative"
      onClick={() => onClick(product)}
    >
      {/* Image Side */}
      <div className="relative w-32 shrink-0 bg-gray-900 overflow-hidden flex items-center justify-center">
        
        {/* Loading Skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse z-10" />
        )}

        {/* Error State / Image Unavailable */}
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 text-gray-500 z-10">
            <ImageOff size={24} className="mb-1 opacity-50" />
            <span className="text-[9px] uppercase tracking-wider opacity-50 font-semibold">Sem Foto</span>
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
          <div className="absolute top-2 left-2 bg-brand-yellow text-brand-darker text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1 z-20">
            <Star size={10} fill="black" /> TOP
          </div>
        )}

        {/* Disclaimer de Imagem Ilustrativa - Só mostra se carregou e não deu erro */}
        {!hasError && isLoaded && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-[1px] py-0.5 flex justify-center items-center z-10">
            <span className="text-[8px] text-gray-200 font-light tracking-wide leading-none">
              (Imagem Ilustrativa)
            </span>
          </div>
        )}
      </div>
      
      {/* Content Body */}
      <div className="flex-1 p-3 flex flex-col justify-between relative">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="font-bold text-white text-base leading-tight mb-1 group-hover:text-brand-yellow transition-colors line-clamp-2">
              {product.name}
            </h3>
            <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>
          
          <div className="flex items-end justify-between mt-1">
            <span className="text-brand-yellow font-bold text-lg">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
            </span>
            <button className="bg-brand-yellow text-brand-darker hover:bg-white p-2 rounded-lg transition-colors shadow-lg shadow-brand-yellow/10">
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
