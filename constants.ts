
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

// Imagens de alta qualidade do Unsplash correspondentes aos produtos
export const MENU_ITEMS: Product[] = [
  // Hambúrgueres
  {
    id: 'h1',
    name: 'Clássico',
    description: 'Carne Gourmet, Mussarela, Presunto, Alface, Tomate, Cebola Caramelizada.',
    price: 16.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h2',
    name: 'X - Frango',
    description: 'Frango, Presunto, Mussarela, Requeijão Cremoso, Ovo, Alface, Tomate, Cebola Caramelizada.',
    price: 14.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1615297348957-39176466d359?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h3',
    name: 'X - Bacon',
    description: 'Carne, Bacon, Cheddar, Presunto, Mussarela, Ovo, Tomate, Alface, Cebola Caramelizada.',
    price: 21.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h4',
    name: 'X - Calabresa',
    description: 'Carne, Calabresa, Cheddar, Presunto, Mussarela, Ovo, Alface, Tomate, Cebola Caramelizada.',
    price: 19.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h5',
    name: 'Especial',
    description: 'Carne, Presunto, Mussarela, Queijo Cheddar, Ovo, Molho Barbecue, Anéis de Cebola, Alface, Tomate.',
    price: 21.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h6',
    name: 'Hamb. do Baiano',
    description: '2 Carnes Gourmet, Calabresa, Queijo Coalho, Presunto, Mussarela, Alface, Tomate, Cebola Caramelizada.',
    price: 29.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h7',
    name: 'X - Tudo',
    description: 'Carne Gourmet, Ovos, Calabresa, Bacon, Frango, Presunto, Mussarela, Alface, Tomate, Cebola Caramelizada, Milho Verde, Batata Palha.',
    price: 34.99,
    category: 'HAMBURGUERS',
    image: 'https://images.unsplash.com/photo-1586190848861-99c8a3fb7ea5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h8',
    name: 'Combo + Coca Cola 1 Litro',
    description: '3 Hambúrgueres "Clássico" + Coca 1L. Perfeito para dividir!',
    price: 54.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80'
  },

  // Sanduiches
  {
    id: 's1',
    name: 'Misto Quente',
    description: 'Pão, Presunto, Mussarela, Queijo Coalho na chapa.',
    price: 7.99,
    category: 'SANDUICHES',
    image: 'https://images.unsplash.com/photo-1619096252214-cb8c51a472bd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's2',
    name: 'Americano',
    description: '02 Ovos, Mussarela, Presunto, Alface, Tomate, Cebola no pão.',
    price: 11.99,
    category: 'SANDUICHES',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80'
  },

  // Fritas
  {
    id: 'f1',
    name: 'Batata Palito 350g',
    price: 19.99,
    category: 'FRITAS',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f2',
    name: 'Batata Palito c/ Cheddar e Bacon',
    description: '350g de batata crocante com cobertura especial de cheddar e bacon.',
    price: 29.99,
    category: 'FRITAS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1585109649139-3668018951a7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f3',
    name: 'Anéis de Cebola',
    description: 'Porção generosa, acompanha Molho Barbecue.',
    price: 24.99,
    category: 'FRITAS',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80'
  },

  // Bebidas
  { id: 'b1', name: 'Coca-Cola Lata', price: 5.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80' },
  { id: 'b2', name: 'Coca Zero Lata', price: 5.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80' },
  { id: 'b3', name: 'Fanta Laranja Lata', price: 5.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=800&q=80' },
  { id: 'b4', name: 'Guaraná Lata', price: 5.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=800&q=80' },
  { id: 'b5', name: 'Coca-Cola 1L', price: 9.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80' },
  { id: 'b6', name: 'Coca Zero 1L', price: 9.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80' },
  { id: 'b7', name: 'Guaraná 1L', price: 9.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=800&q=80' },
  { id: 'b8', name: 'Fanta 1L', price: 9.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=800&q=80' },
  { id: 'b9', name: 'Coca-Cola 2L', price: 13.99, category: 'BEBIDAS', image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80' },

  // Sucos
  { 
    id: 'su1', 
    name: 'Suco Natural (Com Leite)', 
    description: '500ml. Escolha o sabor da sua fruta preferida com leite.', 
    price: 10.00, 
    category: 'SUCOS', 
    flavors: JUICE_FLAVORS,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'su2', 
    name: 'Suco Natural (Sem Leite)', 
    description: '500ml. Suco da fruta com água. Escolha o sabor.', 
    price: 9.00, 
    category: 'SUCOS', 
    flavors: JUICE_FLAVORS,
    image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=800&q=80'
  },

  // Adicionais
  { id: 'ad1', name: 'Carne Gourmet Extra', price: 6.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1619250907584-368736bb6dfa?auto=format&fit=crop&w=800&q=80' },
  { id: 'ad2', name: 'Bacon Extra', price: 3.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1529858693444-48618e959648?auto=format&fit=crop&w=800&q=80' },
  { id: 'ad3', name: 'Anéis de Cebola Extra', price: 3.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80' },
  { id: 'ad4', name: 'Calabresa Extra', price: 2.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1524182576066-18a7ad22e856?auto=format&fit=crop&w=800&q=80' },
  { id: 'ad5', name: 'Cheddar Extra', price: 1.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?auto=format&fit=crop&w=800&q=80' },
  { id: 'ad6', name: 'Ovo Extra', price: 1.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80' },
];
