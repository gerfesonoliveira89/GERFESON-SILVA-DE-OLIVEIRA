import React, { useState, useEffect } from 'react';
import { CartItem, UserInfo, PaymentMethod } from '../types';
import { DELIVERY_FEE, WHATSAPP_NUMBER } from '../constants';
import { X, Trash2, MapPin, CreditCard, DollarSign, Send, Minus, Plus } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (cartId: string) => void;
  onUpdateQuantity: (cartId: string, delta: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, onRemoveItem, onUpdateQuantity }) => {
  const [step, setStep] = useState<'CART' | 'CHECKOUT'>('CART');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    phone: '',
    address: '',
    number: '',
    neighborhood: '',
    complement: '',
    paymentMethod: 'PIX',
    needChange: ''
  });

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal + DELIVERY_FEE;

  // Reset step when closed
  useEffect(() => {
    if (!isOpen) setTimeout(() => setStep('CART'), 300);
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleFinishOrder = () => {
    // Validation
    if (!userInfo.name || !userInfo.address || !userInfo.neighborhood || !userInfo.number) {
      alert('Por favor, preencha todos os campos obrigatórios do endereço.');
      return;
    }

    // Format Message
    let message = `🍔 *NOVO PEDIDO - HAMBURGUERIA GOURMET DO BAIANO*\n\n`;
    message += `*Cliente:* ${userInfo.name}\n`;
    if (userInfo.phone) message += `*Telefone:* ${userInfo.phone}\n`;
    message += `--------------------------------\n`;
    
    cart.forEach(item => {
      message += `▪️ ${item.quantity}x ${item.name}`;
      if (item.selectedFlavor) message += ` (${item.selectedFlavor})`;
      message += `\n   ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.quantity)}\n`;
      if (item.observation) message += `   _Obs: ${item.observation}_\n`;
    });

    message += `--------------------------------\n`;
    message += `📦 *Subtotal:* ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subtotal)}\n`;
    message += `🛵 *Entrega:* ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(DELIVERY_FEE)}\n`;
    message += `💰 *TOTAL: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}*\n`;
    message += `--------------------------------\n`;
    message += `📍 *ENDEREÇO DE ENTREGA:*\n`;
    message += `${userInfo.address}, ${userInfo.number}\n`;
    message += `${userInfo.neighborhood}\n`;
    if (userInfo.complement) message += `Comp: ${userInfo.complement}\n`;
    message += `--------------------------------\n`;
    message += `💳 *PAGAMENTO:* ${userInfo.paymentMethod.replace('_', ' ')}\n`;
    if (userInfo.paymentMethod === 'DINHEIRO' && userInfo.needChange) {
      message += `💵 *Troco para:* R$ ${userInfo.needChange}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Drawer Content */}
      <div className="relative w-full max-w-md bg-brand-darker h-full shadow-2xl flex flex-col transform transition-transform duration-300">
        
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-800 bg-brand-gray/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            {step === 'CART' ? '🛒 Seu Carrinho' : '📝 Finalizar Pedido'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center">
                <Trash2 size={40} opacity={0.5} />
              </div>
              <p className="text-lg">Seu carrinho está vazio.</p>
              <button onClick={onClose} className="text-brand-yellow font-bold hover:underline">
                Voltar ao cardápio
              </button>
            </div>
          ) : (
            <>
              {step === 'CART' && (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.cartId} className="bg-brand-gray p-3 rounded-xl border border-gray-700 flex gap-3">
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover bg-gray-800" />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-white text-sm line-clamp-1">{item.name}</h3>
                            <button onClick={() => onRemoveItem(item.cartId)} className="text-red-400 hover:text-red-300 p-1">
                              <Trash2 size={16} />
                            </button>
                          </div>
                          {item.selectedFlavor && <p className="text-xs text-brand-yellow mt-1">Sabor: {item.selectedFlavor}</p>}
                          {item.observation && <p className="text-xs text-gray-400 mt-1 line-clamp-1">Obs: {item.observation}</p>}
                        </div>
                        <div className="flex justify-between items-end mt-2">
                          <span className="font-semibold text-brand-yellow">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.quantity)}
                          </span>
                          <div className="flex items-center bg-gray-800 rounded-lg border border-gray-600">
                            <button onClick={() => onUpdateQuantity(item.cartId, -1)} className="p-1 px-2 text-brand-yellow"><Minus size={14}/></button>
                            <span className="text-xs font-bold text-white w-4 text-center">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.cartId, 1)} className="p-1 px-2 text-brand-yellow"><Plus size={14}/></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {step === 'CHECKOUT' && (
                <div className="space-y-6">
                  {/* Personal Info */}
                  <div className="space-y-3">
                    <h3 className="text-brand-yellow font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                      <div className="w-1 h-4 bg-brand-yellow rounded-full"></div>
                      Seus Dados
                    </h3>
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu Nome Completo *"
                      className="w-full bg-brand-gray border border-gray-700 rounded-lg p-3 text-white focus:border-brand-yellow outline-none"
                      value={userInfo.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Seu WhatsApp (Opcional)"
                      className="w-full bg-brand-gray border border-gray-700 rounded-lg p-3 text-white focus:border-brand-yellow outline-none"
                      value={userInfo.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-3">
                    <h3 className="text-brand-yellow font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                      <div className="w-1 h-4 bg-brand-yellow rounded-full"></div>
                      Entrega
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                       <input
                        type="text"
                        name="address"
                        placeholder="Rua/Avenida *"
                        className="col-span-2 w-full bg-brand-gray border border-gray-700 rounded-lg p-3 text-white focus:border-brand-yellow outline-none"
                        value={userInfo.address}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="number"
                        placeholder="Nº *"
                        className="w-full bg-brand-gray border border-gray-700 rounded-lg p-3 text-white focus:border-brand-yellow outline-none"
                        value={userInfo.number}
                        onChange={handleInputChange}
                      />
                    </div>
                    <input
                      type="text"
                      name="neighborhood"
                      placeholder="Bairro *"
                      className="w-full bg-brand-gray border border-gray-700 rounded-lg p-3 text-white focus:border-brand-yellow outline-none"
                      value={userInfo.neighborhood}
                      onChange={handleInputChange}
                    />
                     <input
                      type="text"
                      name="complement"
                      placeholder="Complemento / Ponto de Ref."
                      className="w-full bg-brand-gray border border-gray-700 rounded-lg p-3 text-white focus:border-brand-yellow outline-none"
                      value={userInfo.complement}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Payment */}
                  <div className="space-y-3">
                    <h3 className="text-brand-yellow font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                      <div className="w-1 h-4 bg-brand-yellow rounded-full"></div>
                      Pagamento
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setUserInfo(p => ({ ...p, paymentMethod: 'PIX' }))}
                        className={`p-3 rounded-lg border text-sm font-medium flex items-center justify-center gap-2 ${userInfo.paymentMethod === 'PIX' ? 'bg-brand-yellow text-black border-brand-yellow' : 'bg-brand-gray border-gray-700 text-gray-300'}`}
                      >
                        💠 PIX
                      </button>
                       <button
                        onClick={() => setUserInfo(p => ({ ...p, paymentMethod: 'DINHEIRO' }))}
                        className={`p-3 rounded-lg border text-sm font-medium flex items-center justify-center gap-2 ${userInfo.paymentMethod === 'DINHEIRO' ? 'bg-brand-yellow text-black border-brand-yellow' : 'bg-brand-gray border-gray-700 text-gray-300'}`}
                      >
                        💵 Dinheiro
                      </button>
                       <button
                        onClick={() => setUserInfo(p => ({ ...p, paymentMethod: 'CARTAO_CREDITO' }))}
                        className={`p-3 rounded-lg border text-sm font-medium flex items-center justify-center gap-2 ${userInfo.paymentMethod === 'CARTAO_CREDITO' ? 'bg-brand-yellow text-black border-brand-yellow' : 'bg-brand-gray border-gray-700 text-gray-300'}`}
                      >
                        💳 Crédito
                      </button>
                       <button
                        onClick={() => setUserInfo(p => ({ ...p, paymentMethod: 'CARTAO_DEBITO' }))}
                        className={`p-3 rounded-lg border text-sm font-medium flex items-center justify-center gap-2 ${userInfo.paymentMethod === 'CARTAO_DEBITO' ? 'bg-brand-yellow text-black border-brand-yellow' : 'bg-brand-gray border-gray-700 text-gray-300'}`}
                      >
                        💳 Débito
                      </button>
                    </div>

                    {userInfo.paymentMethod === 'DINHEIRO' && (
                       <input
                        type="text"
                        name="needChange"
                        placeholder="Troco para quanto? (Ex: 50,00)"
                        className="w-full bg-brand-gray border border-gray-700 rounded-lg p-3 text-white focus:border-brand-yellow outline-none animate-fadeIn"
                        value={userInfo.needChange}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Totals */}
        {cart.length > 0 && (
          <div className="p-4 bg-brand-gray border-t border-gray-700 shrink-0 space-y-3">
             <div className="flex justify-between text-gray-400 text-sm">
                <span>Subtotal</span>
                <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subtotal)}</span>
             </div>
             <div className="flex justify-between text-gray-400 text-sm">
                <span>Taxa de Entrega</span>
                <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(DELIVERY_FEE)}</span>
             </div>
             <div className="flex justify-between text-brand-yellow font-bold text-xl pb-2">
                <span>Total</span>
                <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</span>
             </div>

             {step === 'CART' ? (
                <button
                  onClick={() => setStep('CHECKOUT')}
                  className="w-full bg-brand-yellow hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  Continuar para Endereço
                  <MapPin size={20} />
                </button>
             ) : (
                <button
                  onClick={handleFinishOrder}
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-900/20"
                >
                  Enviar Pedido no WhatsApp
                  <Send size={20} />
                </button>
             )}
          </div>
        )}
      </div>
    </div>
  );
};