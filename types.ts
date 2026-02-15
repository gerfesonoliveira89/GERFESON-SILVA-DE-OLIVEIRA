export type Category = 'HAMBURGUERS' | 'SANDUICHES' | 'FRITAS' | 'BEBIDAS' | 'SUCOS' | 'ADICIONAIS';

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: Category;
  image?: string;
  isPopular?: boolean;
  flavors?: string[]; // For juices
}

export interface CartItem extends Product {
  cartId: string;
  quantity: number;
  selectedFlavor?: string;
  observation?: string;
}

export type PaymentMethod = 'PIX' | 'DINHEIRO' | 'CARTAO_CREDITO' | 'CARTAO_DEBITO';

export interface UserInfo {
  name: string;
  phone: string;
  address: string;
  number: string;
  neighborhood: string;
  complement?: string;
  paymentMethod: PaymentMethod;
  needChange?: string; // For cash payments
}