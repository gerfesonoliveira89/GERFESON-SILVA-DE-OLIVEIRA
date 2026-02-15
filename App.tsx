
import React, { useState, useMemo } from 'react';
import { CATEGORIES, MENU_ITEMS } from './constants';
import { Product, CartItem, Category } from './types';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { ShoppingBag, Star, Search, MapPin } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('HAMBURGUERS');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Derived state
  const filteredProducts = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCategory = item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      
      if (searchQuery) return matchesSearch; // If searching, ignore category
      return matchesCategory;
    });
  }, [activeCategory, searchQuery]);

  const activeCategoryLabel = CATEGORIES.find(c => c.id === activeCategory)?.label;
  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Handlers
  const handleAddToCart = (newItem: CartItem) => {
    setCart(prev => {
      // Check if exact same item exists (same id, flavor, observation)
      const existingIndex = prev.findIndex(item => 
        item.id === newItem.id && 
        item.selectedFlavor === newItem.selectedFlavor && 
        item.observation === newItem.observation
      );

      if (existingIndex > -1) {
        const newCart = [...prev];
        newCart[existingIndex].quantity += newItem.quantity;
        return newCart;
      }
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.cartId === cartId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen bg-brand-darker pb-20">
      
      {/* Header / Hero */}
      <header className="relative bg-brand-gray pt-6 pb-20 rounded-b-[2.5rem] overflow-hidden shadow-2xl z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-brand-yellow font-bold text-lg tracking-wider mb-1">HAMBURGUERIA GOURMET</h1>
              <h2 className="text-3xl font-extrabold text-white leading-tight">DO BAIANO</h2>
            </div>
            <div className="bg-brand-dark/50 p-2 rounded-full border border-gray-700/50 backdrop-blur-md">
              <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=150&q=80" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <MapPin size={16} className="text-brand-yellow" />
            <span>Entrega rápida em toda a região</span>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="O que você quer comer hoje?"
              className="w-full bg-brand-darker border border-gray-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none shadow-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>
        </div>
      </header>

      {/* Categories Navigation (Menu) */}
      <div className="sticky top-0 z-20 bg-brand-darker/95 backdrop-blur-sm border-b border-gray-800 py-3 shadow-lg">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto no-scrollbar gap-3 px-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id as Category); setSearchQuery(''); }}
                className={`flex flex-col items-center justify-center min-w-[5rem] py-2 rounded-xl transition-all duration-300 ${
                  activeCategory === cat.id && !searchQuery
                    ? 'bg-brand-yellow text-brand-darker font-bold transform scale-105 shadow-[0_0_15px_rgba(255,193,7,0.3)]'
                    : 'bg-brand-gray/50 text-gray-400 hover:bg-brand-gray hover:text-gray-200'
                }`}
              >
                <span className="text-2xl mb-1 filter drop-shadow-md">{cat.icon}</span>
                <span className="text-[10px] uppercase tracking-wide">{cat.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <main className="container mx-auto px-4 py-6">
        {!searchQuery && (
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-brand-yellow rounded-full"></div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wide">{activeCategoryLabel}</h3>
          </div>
        )}

        {filteredProducts.length === 0 ? (
           <div className="text-center py-20 text-gray-500">
             <p>Nenhum produto encontrado.</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="group bg-brand-gray rounded-2xl p-3 border border-gray-800/50 hover:border-brand-yellow/30 transition-all flex gap-4 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden shadow-lg">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {product.isPopular && (
                    <div className="absolute top-0 left-0 bg-brand-yellow text-[10px] font-bold px-2 py-1 rounded-br-lg text-brand-darker flex items-center gap-1 shadow-md">
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
            ))}
          </div>
        )}
      </main>

      {/* Floating Cart Button (Mobile) */}
      <button
        onClick={() => setIsCartOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-brand-yellow text-brand-darker p-4 rounded-full shadow-2xl shadow-yellow-500/20 transition-transform duration-300 hover:scale-105 ${
          cartTotalItems > 0 ? 'translate-y-0' : 'translate-y-32'
        }`}
      >
        <div className="relative">
          <ShoppingBag size={28} strokeWidth={2.5} />
          <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-brand-darker">
            {cartTotalItems}
          </span>
        </div>
      </button>

      {/* Modals */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={handleAddToCart} 
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

    </div>
  );
}

export default App;
