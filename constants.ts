
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

// Imagens atualizadas e verificadas
export const MENU_ITEMS: Product[] = [
  // Hambúrgueres
  {
    id: 'h1',
    name: 'Clássico',
    description: 'Carne Gourmet, Mussarela, Presunto, Alface, Tomate, Cebola Caramelizada.',
    price: 16.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h2',
    name: 'X - Frango',
    description: 'Frango, Presunto, Mussarela, Requeijão Cremoso, Ovo, Alface, Tomate, Cebola Caramelizada.',
    price: 14.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h3',
    name: 'X - Bacon',
    description: 'Carne, Bacon, Cheddar, Presunto, Mussarela, Ovo, Tomate, Alface, Cebola Caramelizada.',
    price: 21.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h4',
    name: 'X - Calabresa',
    description: 'Carne, Calabresa, Cheddar, Presunto, Mussarela, Ovo, Alface, Tomate, Cebola Caramelizada.',
    price: 19.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h5',
    name: 'Especial',
    description: 'Carne, Presunto, Mussarela, Queijo Cheddar, Ovo, Molho Barbecue, Anéis de Cebola, Alface, Tomate.',
    price: 21.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h6',
    name: 'Hamb. do Baiano',
    description: '2 Carnes Gourmet, Calabresa, Queijo Coalho, Presunto, Mussarela, Alface, Tomate, Cebola Caramelizada.',
    price: 29.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h7',
    name: 'X - Tudo',
    description: 'Carne Gourmet, Ovos, Calabresa, Bacon, Frango, Presunto, Mussarela, Alface, Tomate, Cebola Caramelizada, Milho Verde, Batata Palha.',
    price: 34.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h8',
    name: 'Combo + Coca Cola 1 Litro',
    description: '3 Hambúrgueres "Clássico" + Coca 1L. Perfeito para dividir!',
    price: 54.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },

  // Sanduiches
  {
    id: 's1',
    name: 'Misto Quente',
    description: 'Pão, Presunto, Mussarela, Queijo Coalho na chapa.',
    price: 7.99,
    category: 'SANDUICHES',
    image: 'https://images.unsplash.com/photo-1627308595186-e8d729e02c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's2',
    name: 'Americano',
    description: '02 Ovos, Mussarela, Presunto, Alface, Tomate, Cebola no pão.',
    price: 11.99,
    category: 'SANDUICHES',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },

  // Fritas
  {
    id: 'f1',
    name: 'Batata Palito 350g',
    price: 19.99,
    category: 'FRITAS',
    image: 'https://images.unsplash.com/photo-1573080496987-a199f8cd4058?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f2',
    name: 'Batata c/ Cheddar e Bacon',
    description: '350g de batata crocante com cobertura especial de cheddar e bacon.',
    price: 29.99,
    category: 'FRITAS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1585109649139-3668018951a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f3',
    name: 'Anéis de Cebola',
    description: 'Porção generosa, acompanha Molho Barbecue.',
    price: 24.99,
    category: 'FRITAS',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },

  // Bebidas - Usando imagens genéricas de refrigerante para garantir carregamento
  { id: 'b1', name: 'Coca-Cola Lata', price: 5.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'b2', name: 'Coca Zero Lata', price: 5.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'b3', name: 'Fanta Laranja Lata', price: 5.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'b4', name: 'Guaraná Lata', price: 5.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'b5', name: 'Coca-Cola 1L', price: 9.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'b6', name: 'Coca Zero 1L', price: 9.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'b7', name: 'Guaraná 1L', price: 9.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'b8', name: 'Fanta 1L', price: 9.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'b9', name: 'Coca-Cola 2L', price: 13.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },

  // Sucos
  { 
    id: 'su1', 
    name: 'Suco Natural (Com Leite)', 
    description: '500ml. Escolha o sabor da sua fruta preferida com leite.', 
    price: 10.00, 
    category: 'SUCOS', 
    flavors: JUICE_FLAVORS,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'su2', 
    name: 'Suco Natural (Sem Leite)', 
    description: '500ml. Suco da fruta com água. Escolha o sabor.', 
    price: 9.00, 
    category: 'SUCOS', 
    flavors: JUICE_FLAVORS,
    image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },

  // Adicionais
  { id: 'ad1', name: 'Carne Gourmet Extra', price: 6.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'ad2', name: 'Bacon Extra', price: 3.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1606851682829-37f07cb679ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'ad3', name: 'Anéis de Cebola Extra', price: 3.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'ad4', name: 'Calabresa Extra', price: 2.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1625938146369-adc83368bda7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'ad5', name: 'Cheddar Extra', price: 1.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1612892010343-983b0c950d2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'ad6', name: 'Ovo Extra', price: 1.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];
