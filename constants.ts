import { Product } from './types';

export const WHATSAPP_NUMBER = '5579999524097';
export const DELIVERY_FEE = 2.0;

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
  'ENTREGA': { type: 'FIXED', value: 2.0 },
  'BEMVINDO': { type: 'FIXED', value: 5.0 },
  'BAIANO': { type: 'PERCENTAGE', value: 5 },
};

const JUICE_FLAVORS = [
  'Ameixa', 'Goiaba', 'Maracujá', 'Acerola', 'Morango', 
  'Caju', 'Cupuaçu', 'Graviola', 'Manga', 'Mangaba'
];

/**
 * DICA PARA IMAGENS LOCAIS:
 * 1. Converta sua foto em um site "Image to Base64".
 * 2. Copie o resultado (começa com data:image/...).
 * 3. Cole no campo 'image' abaixo.
 */

export const MENU_ITEMS: Product[] = [
  // Hambúrgueres
  {
    id: 'h1',
    name: 'Clássico',
    description: 'Carne Gourmet, Mussarela, Presunto, Alface, Tomate, Cebola Caramelizada.',
    price: 16.99,
    category: 'HAMBURGUERS',
    // COLE SUA STRING BASE64 AQUI:
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000'
  },
  {
    id: 'h2',
    name: 'X - Frango',
    description: 'Frango, Presunto, Mussarela, Requeijão Cremoso, Ovo, Alface, Tomate, Cebola Caramelizada.',
    price: 14.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?q=80&w=1000'
  },
  {
    id: 'h3',
    name: 'X - Bacon',
    description: 'Carne, Bacon, Cheddar, Presunto, Mussarela, Ovo, Tomate, Alface, Cebola Caramelizada.',
    price: 21.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000'
  },
  {
    id: 'h4',
    name: 'X - Calabresa',
    description: 'Carne, Calabresa, Cheddar, Presunto, Mussarela, Ovo, Alface, Tomate, Cebola Caramelizada.',
    price: 19.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000'
  },
  {
    id: 'h5',
    name: 'Especial',
    description: 'Carne, Presunto, Mussarela, Queijo Cheddar, Ovo, Molho Barbecue, Anéis de Cebola, Alface, Tomate.',
    price: 21.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1000'
  },
  {
    id: 'h6',
    name: 'Hamb. do Baiano',
    description: '2 Carnes Gourmet, Calabresa, Queijo Coalho, Presunto, Mussarela, Alface, Tomate, Cebola Caramelizada.',
    price: 29.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1000'
  },
  {
    id: 'h7',
    name: 'X - Tudo',
    description: 'Carne Gourmet, Ovos, Calabresa, Bacon, Frango, Presunto, Mussarela, Alface, Tomate, Cebola Caramelizada, Milho Verde, Batata Palha.',
    price: 34.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1000'
  },
  {
    id: 'h8',
    name: 'Combo + Coca Cola 1 Litro',
    description: '3 Hambúrgueres "Clássico" + Coca 1L. Perfeito para dividir!',
    price: 54.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=1000'
  },

  // Sanduiches
  {
    id: 's1',
    name: 'Misto Quente',
    description: 'Pão, Presunto, Mussarela, Queijo Coalho na chapa.',
    price: 7.99,
    category: 'SANDUICHES',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000'
  },
  {
    id: 's2',
    name: 'Americano',
    description: '02 Ovos, Mussarela, Presunto, Alface, Tomate, Cebola no pão.',
    price: 11.99,
    category: 'SANDUICHES',
    image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1000'
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
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1000'
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
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000' 
  },
  { 
    id: 'b2', 
    name: 'Coca Zero Lata', 
    price: 5.99, 
    category: 'BEBIDAS', 
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1000' 
  },
  { 
    id: 'b3', 
    name: 'Fanta Laranja Lata', 
    price: 5.99, 
    category: 'BEBIDAS', 
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=1000' 
  },
  { 
    id: 'b4', 
    name: 'Guaraná Lata', 
    price: 5.99, 
    category: 'BEBIDAS', 
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000'
  }
];