
import { Product } from './types';

export const WHATSAPP_NUMBER = '5579999524097';
export const DELIVERY_FEE = 2.00;

export const CATEGORIES = [
  { id: 'HAMBURGUERS', label: 'Hambúrgueres', icon: '🍔' },
  { id: 'SANDUICHES', label: 'Sanduíches', icon: '🥪' },
  { id: 'FRITAS', label: 'Porções', icon: '🍟' },
  { id: 'BEBIDAS', label: 'Bebidas', icon: '🥤' },
  { id: 'SUCOS', label: 'Sucos', icon: '🧃' },
  { id: 'ADICIONAIS', label: 'Extras', icon: '➕' },
];

export const COUPONS: Record<string, { type: 'PERCENTAGE' | 'FIXED', value: number }> = {
  'BAIANO10': { type: 'PERCENTAGE', value: 10 },
  'ENTREGA': { type: 'FIXED', value: 2.00 },
  'BEMVINDO': { type: 'FIXED', value: 5.00 },
  'BAIANO': { type: 'PERCENTAGE', value: 5 },
};

const JUICE_FLAVORS = [
  'Ameixa', 'Goiaba', 'Maracujá', 'Acerola', 'Morango', 
  'Caju', 'Cupuaçu', 'Graviola', 'Manga', 'Mangaba'
];

export const MENU_ITEMS: Product[] = [
  // Hambúrgueres
  {
    id: 'h1',
    name: 'Clássico',
    description: 'Carne Gourmet, Mussarela, Presunto, Alface, Tomate, Cebola Caramelizada.',
    price: 16.99,
    category: 'HAMBURGUERS',
    // Imagem baseada no anexo 1: Carne, queijo derretido, presunto ondulado e salada
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000'
  },
  {
    id: 'h2',
    name: 'X - Frango',
    description: 'Frango, Presunto, Mussarela, Requeijão Cremoso, Ovo, Alface, Tomate, Cebola Caramelizada.',
    price: 14.99,
    category: 'HAMBURGUERS',
    // Imagem baseada no anexo 2: Foco no ovo, queijo e camadas de recheio
    image: 'https://images.unsplash.com/photo-1525164286253-04e68b9d94bb?q=80&w=1000'
  },
  {
    id: 'h3',
    name: 'X - Bacon',
    description: 'Carne, Bacon, Cheddar, Presunto, Mussarela, Ovo, Tomate, Alface, Cebola Caramelizada.',
    price: 21.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1000'
  },
  {
    id: 'h4',
    name: 'X - Calabresa',
    description: 'Carne, Calabresa, Cheddar, Presunto, Mussarela, Ovo, Alface, Tomate, Cebola Caramelizada.',
    price: 19.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1000'
  },
  {
    id: 'h5',
    name: 'Especial',
    description: 'Carne, Presunto, Mussarela, Queijo Cheddar, Ovo, Molho Barbecue, Anéis de Cebola, Alface, Tomate.',
    price: 21.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000'
  },
  {
    id: 'h6',
    name: 'Hamb. do Baiano',
    description: '2 Carnes Gourmet, Calabresa, Queijo Coalho, Presunto, Mussarela, Alface, Tomate, Cebola Caramelizada.',
    price: 29.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=1000'
  },
  {
    id: 'h7',
    name: 'X - Tudo',
    description: 'Carne Gourmet, Ovos, Calabresa, Bacon, Frango, Presunto, Mussarela, Alface, Tomate, Cebola Caramelizada, Milho Verde, Batata Palha.',
    price: 34.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=1000'
  },
  {
    id: 'h8',
    name: 'Combo + Coca Cola 1 Litro',
    description: '3 Hambúrgueres "Clássico" + Coca 1L. Perfeito para dividir!',
    price: 54.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1000'
  },

  // Sanduiches
  {
    id: 's1',
    name: 'Misto Quente',
    description: 'Pão, Presunto, Mussarela, Queijo Coalho na chapa.',
    price: 7.99,
    category: 'SANDUICHES',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1000'
  },
  {
    id: 's2',
    name: 'Americano',
    description: '02 Ovos, Mussarela, Presunto, Alface, Tomate, Cebola no pão.',
    price: 11.99,
    category: 'SANDUICHES',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000'
  },

  // Fritas
  {
    id: 'f1',
    name: 'Batata Palito 350g',
    price: 19.99,
    category: 'FRITAS',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1000'
  },
  {
    id: 'f2',
    name: 'Batata c/ Cheddar e Bacon',
    description: '350g de batata crocante com cobertura especial de cheddar e bacon.',
    price: 29.99,
    category: 'FRITAS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1585109649139-3668018951a7?q=80&w=1000'
  },
  {
    id: 'f3',
    name: 'Anéis de Cebola',
    description: 'Porção generosa, acompanha Molho Barbecue.',
    price: 24.99,
    category: 'FRITAS',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=1000'
  },

  // Bebidas
  { 
    id: 'b1', 
    name: 'Coca-Cola Lata', 
    price: 5.99, 
    category: 'BEBIDAS', 
    image: 'https://m.media-amazon.com/images/I/51p1c2-y2IL._AC_SX679_.jpg' 
  },
  { 
    id: 'b2', 
    name: 'Coca Zero Lata', 
    price: 5.99, 
    category: 'BEBIDAS', 
    image: 'https://m.media-amazon.com/images/I/51l+aO-U8VL._AC_SX679_.jpg' 
  },
  { 
    id: 'b3', 
    name: 'Fanta Laranja Lata', 
    price: 5.99, 
    category: 'BEBIDAS', 
    image: 'https://m.media-amazon.com/images/I/61p-E9hT0HL._AC_SX679_.jpg' 
  },
  { 
    id: 'b4', 
    name: 'Guaraná Lata', 
    price: 5.99, 
    category: 'BEBIDAS', 
    image: 'https://m.media-amazon.com/images/I/61q3yI-IeDL._AC_SX679_.jpg' 
  },
  { 
    id: 'b5', 
    name: 'Coca-Cola 1L', 
    price: 9.99, 
    category: 'BEBIDAS', 
    image: 'https://m.media-amazon.com/images/I/61f9t-eX3IL._AC_SX679_.jpg' 
  },
  { 
    id: 'b6', 
    name: 'Coca Zero 1L', 
    price: 9.99, 
    category: 'BEBIDAS', 
    image: 'https://m.media-amazon.com/images/I/61h+e+aWlXL._AC_SX679_.jpg' 
  },
  { 
    id: 'b7', 
    name: 'Guaraná 1L', 
    price: 9.99, 
    category: 'BEBIDAS', 
    image: 'https://m.media-amazon.com/images/I/71X8y8yYtLL._AC_SX679_.jpg' 
  },
  { 
    id: 'b8', 
    name: 'Fanta 1L', 
    price: 9.99, 
    category: 'BEBIDAS', 
    image: 'https://m.media-amazon.com/images/I/61+9fK-sNOL._AC_SX679_.jpg' 
  },
  { 
    id: 'b9', 
    name: 'Coca-Cola 2L', 
    price: 13.99, 
    category: 'BEBIDAS', 
    image: 'https://m.media-amazon.com/images/I/61f9t-eX3IL._AC_SX679_.jpg' 
  },

  // Sucos
  { 
    id: 'su1', 
    name: 'Suco Natural (Com Leite)', 
    description: '500ml. Escolha o sabor da sua fruta preferida com leite.', 
    price: 10.00, 
    category: 'SUCOS', 
    flavors: JUICE_FLAVORS,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1000'
  },
  { 
    id: 'su2', 
    name: 'Suco Natural (Sem Leite)', 
    description: '500ml. Suco da fruta com água. Escolha o sabor.', 
    price: 9.00, 
    category: 'SUCOS', 
    flavors: JUICE_FLAVORS,
    image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=1000'
  },

  // Adicionais
  { id: 'ad1', name: 'Carne Gourmet Extra', price: 6.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1563200727-b6f790c3779e?q=80&w=1000' },
  { id: 'ad2', name: 'Bacon Extra', price: 3.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1606851094655-b2593a9af63f?q=80&w=1000' },
  { id: 'ad3', name: 'Anéis de Cebola Extra', price: 3.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=1000' },
  { id: 'ad4', name: 'Calabresa Extra', price: 2.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1519077336050-46dee54995c6?q=80&w=1000' },
  { id: 'ad5', name: 'Cheddar Extra', price: 1.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000' },
  { id: 'ad6', name: 'Ovo Extra', price: 1.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1582531652882-628d6c7028b0?q=80&w=1000' },
];
