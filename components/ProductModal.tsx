
import React, { useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { Plus, Minus, X, ImageOff } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [observation, setObservation] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('');
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setObservation('');
      setSelectedFlavor('');
      setError('');
      setIsLoaded(false);
      setHasError(false);
    }
  }, [product]);

  if (!product) return null;

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

  const handleAddToCart = () => {
    if (product.flavors && !selectedFlavor) {
      setError('Por favor, selecione um sabor.');
      return;
    }

    const cartItem: CartItem = {
      ...product,
      cartId: `${product.id}-${Date.now()}`,
      quantity,
      observation,
      selectedFlavor
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4">
      <div className="bg-brand-gray w-full max-w-lg rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Image Header */}
        <div className="relative h-48 sm:h-56 bg-brand-darker shrink-0 flex items-center justify-center">
          
          {/* Loading Skeleton */}
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse z-10" />
          )}

          {/* Error State */}
          {hasError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-gray-500 z-10">
              <ImageOff size={48} className="mb-2 opacity-30" />
              <span className="text-xs uppercase tracking-widest opacity-40 font-bold">Imagem Indisponível</span>
            </div>
          ) : (
            <img 
              src={product.image} 
              alt={product.name} 
              className={`w-full h-full object-cover opacity-90 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setIsLoaded(true)}
              onError={() => {
                setHasError(true);
                setIsLoaded(false);
              }}
            />
          )}

          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors z-20"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-2xl font-bold text-white">{product.name}</h2>
            <span className="text-brand-yellow font-bold text-xl">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
            </span>
          </div>
          
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            {product.description || 'Delicioso e feito com ingredientes selecionados.'}
          </p>

          {/* Flavors Section (Only for Juices) */}
          {product.flavors && (
            <div className="mb-6">
              <h3 className="font-semibold text-white mb-3">Escolha o sabor <span className="text-red-500">*</span></h3>
              <div className="grid grid-cols-2 gap-2">
                {product.flavors.map(flavor => (
                  <button
                    key={flavor}
                    onClick={() => { setSelectedFlavor(flavor); setError(''); }}
                    className={`p-2 rounded-lg text-sm font-medium border transition-all ${
                      selectedFlavor === flavor
                        ? 'bg-brand-yellow text-brand-darker border-brand-yellow'
                        : 'bg-transparent text-gray-300 border-gray-600 hover:border-gray-400'
                    }`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          )}

          {/* Observation */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Observações (Opcional)
            </label>
            <textarea
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              placeholder="Ex: Tirar cebola, caprichar no molho..."
              className="w-full bg-brand-darker border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow resize-none h-24"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-brand-darker border-t border-gray-800 shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-brand-gray rounded-lg border border-gray-700">
              <button onClick={handleDecrement} className="p-3 text-brand-yellow hover:text-white transition-colors">
                <Minus size={20} />
              </button>
              <span className="w-8 text-center font-bold text-white">{quantity}</span>
              <button onClick={handleIncrement} className="p-3 text-brand-yellow hover:text-white transition-colors">
                <Plus size={20} />
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-brand-yellow hover:bg-yellow-500 text-brand-darker font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <span>Adicionar</span>
              <span>
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price * quantity)}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
