import { Product } from './types';

export const WHATSAPP_NUMBER = '5579999524097';
export const DELIVERY_FEE = 2.00;

export const CATEGORIES = [
  { id: 'HAMBURGUERS', label: 'Hambúrgueres', icon: '🍔' },
  { id: 'SANDUICHES', label: 'Sanduíches', icon: '🥪' },
  { id: 'FRITAS', label: 'Porções & Fritas', icon: '🍟' },
  { id: 'BEBIDAS', label: 'Bebidas', icon: '🥤' },
  { id: 'SUCOS', label: 'Sucos', icon: '🧃' },
  { id: 'ADICIONAIS', label: 'Adicionais', icon: '➕' },
];

const JUICE_FLAVORS = [
  'Ameixa', 'Goiaba', 'Maracujá', 'Acerola', 'Morango', 
  'Caju', 'Cupuaçu', 'Graviola', 'Manga', 'Mangaba'
];

export const MENU_ITEMS: Product[] = [
  // Hamburguers
  {
    id: 'h1',
    name: 'Clássico',
    description: 'Carne Gourmet, Mussarela, Presunto, Alface, Tomate, Cebola Caramelizada.',
    price: 16.99,
    category: 'HAMBURGUERS',
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: 'h2',
    name: 'X - Frango',
    description: 'Frango, Presunto, Mussarela, Requeijão Cremoso, Ovo, Alface, Tomate, Cebola Caramelizada.',
    price: 14.99,
    category: 'HAMBURGUERS',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 'h3',
    name: 'X - Bacon',
    description: 'Carne, Bacon, Cheddar, Presunto, Mussarela, Ovo, Tomate, Alface, Cebola Caramelizada.',
    price: 21.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: 'h4',
    name: 'X - Calabresa',
    description: 'Carne, Calabresa, Cheddar, Presunto, Mussarela, Ovo, Alface, Tomate, Cebola Caramelizada.',
    price: 19.99,
    category: 'HAMBURGUERS',
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: 'h5',
    name: 'Especial',
    description: 'Carne, Presunto, Mussarela, Queijo Cheddar, Ovo, Molho Barbecue, Anéis de Cebola, Alface, Tomate.',
    price: 21.99,
    category: 'HAMBURGUERS',
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: 'h6',
    name: 'Hamb. do Baiano',
    description: '2 Carnes Gourmet, Calabresa, Queijo Coalho, Presunto, Mussarela, Alface, Tomate, Cebola Caramelizada.',
    price: 29.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://picsum.photos/400/300?random=6'
  },
  {
    id: 'h7',
    name: 'X - Tudo',
    description: 'Carne Gourmet, Ovos, Calabresa, Bacon, Frango, Presunto, Mussarela, Alface, Tomate, Cebola Caramelizada, Milho Verde, Batata Palha.',
    price: 34.99,
    category: 'HAMBURGUERS',
    image: 'https://picsum.photos/400/300?random=7'
  },
  {
    id: 'h8',
    name: 'Combo + Coca Cola 1 Litro',
    description: '3 Hambúrgueres "Clássico": Gourmet, Mussarela, Presunto, Alface, Tomate, Cebola Caramelizada + Coca 1L.',
    price: 54.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://picsum.photos/400/300?random=8'
  },

  // Sanduiches
  {
    id: 's1',
    name: 'Misto',
    description: 'Pão, Presunto, Mussarela, Queijo Coalho.',
    price: 7.99,
    category: 'SANDUICHES',
    image: 'https://picsum.photos/400/300?random=9'
  },
  {
    id: 's2',
    name: 'Americano',
    description: '02 Ovos, Mussarela, Presunto, Alface, Tomate, Cebola.',
    price: 11.99,
    category: 'SANDUICHES',
    image: 'https://picsum.photos/400/300?random=10'
  },

  // Fritas
  {
    id: 'f1',
    name: 'Batata Palito 350g',
    price: 19.99,
    category: 'FRITAS',
    image: 'https://picsum.photos/400/300?random=11'
  },
  {
    id: 'f2',
    name: 'Batata Palito c/ Cheddar e Bacon',
    description: '350g de batata com cobertura especial.',
    price: 29.99,
    category: 'FRITAS',
    isPopular: true,
    image: 'https://picsum.photos/400/300?random=12'
  },
  {
    id: 'f3',
    name: 'Anéis de Cebola',
    description: 'Acompanha Molho Barbecue.',
    price: 24.99,
    category: 'FRITAS',
    image: 'https://picsum.photos/400/300?random=13'
  },

  // Bebidas
  { id: 'b1', name: 'Coca-Cola Lata', price: 5.99, category: 'BEBIDAS', image: 'https://picsum.photos/400/300?random=14' },
  { id: 'b2', name: 'Coca Zero Lata', price: 5.99, category: 'BEBIDAS', image: 'https://picsum.photos/400/300?random=15' },
  { id: 'b3', name: 'Fanta Lata', price: 5.99, category: 'BEBIDAS', image: 'https://picsum.photos/400/300?random=16' },
  { id: 'b4', name: 'Guaraná Lata', price: 5.99, category: 'BEBIDAS', image: 'https://picsum.photos/400/300?random=17' },
  { id: 'b5', name: 'Coca-Cola 1L', price: 9.99, category: 'BEBIDAS', image: 'https://picsum.photos/400/300?random=18' },
  { id: 'b6', name: 'Coca Zero 1L', price: 9.99, category: 'BEBIDAS', image: 'https://picsum.photos/400/300?random=19' },
  { id: 'b7', name: 'Guaraná 1L', price: 9.99, category: 'BEBIDAS', image: 'https://picsum.photos/400/300?random=20' },
  { id: 'b8', name: 'Fanta 1L', price: 9.99, category: 'BEBIDAS', image: 'https://picsum.photos/400/300?random=21' },
  { id: 'b9', name: 'Coca-Cola 2L', price: 13.99, category: 'BEBIDAS', image: 'https://picsum.photos/400/300?random=22' },

  // Sucos
  { 
    id: 'su1', 
    name: 'Suco 500ml (Com Leite)', 
    description: 'Escolha o sabor.', 
    price: 10.00, 
    category: 'SUCOS', 
    flavors: JUICE_FLAVORS,
    image: 'https://picsum.photos/400/300?random=23'
  },
  { 
    id: 'su2', 
    name: 'Suco 500ml (Sem Leite)', 
    description: 'Suco da fruta com água. Escolha o sabor.', 
    price: 9.00, 
    category: 'SUCOS', 
    flavors: JUICE_FLAVORS,
    image: 'https://picsum.photos/400/300?random=24'
  },

  // Adicionais
  { id: 'ad1', name: 'Carne Gourmet Extra', price: 6.99, category: 'ADICIONAIS', image: 'https://picsum.photos/400/300?random=25' },
  { id: 'ad2', name: 'Bacon Extra', price: 3.99, category: 'ADICIONAIS', image: 'https://picsum.photos/400/300?random=26' },
  { id: 'ad3', name: 'Anéis de Cebola Extra', price: 3.99, category: 'ADICIONAIS', image: 'https://picsum.photos/400/300?random=27' },
  { id: 'ad4', name: 'Calabresa Extra', price: 2.99, category: 'ADICIONAIS', image: 'https://picsum.photos/400/300?random=28' },
  { id: 'ad5', name: 'Cheddar Extra', price: 1.99, category: 'ADICIONAIS', image: 'https://picsum.photos/400/300?random=29' },
  { id: 'ad6', name: 'Ovo Extra', price: 1.99, category: 'ADICIONAIS', image: 'https://picsum.photos/400/300?random=30' },
];