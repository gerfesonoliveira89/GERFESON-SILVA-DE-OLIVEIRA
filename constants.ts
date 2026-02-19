
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
    // Hambúrguer clássico suculento
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000'
  },
  {
    id: 'h2',
    name: 'X - Frango',
    description: 'Frango, Presunto, Mussarela, Requeijão Cremoso, Ovo, Alface, Tomate, Cebola Caramelizada.',
    price: 14.99,
    category: 'HAMBURGUERS',
    // Hambúrguer de frango estilo clássico com salada
    image: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?q=80&w=1000'
  },
  {
    id: 'h3',
    name: 'X - Bacon',
    description: 'Carne, Bacon, Cheddar, Presunto, Mussarela, Ovo, Tomate, Alface, Cebola Caramelizada.',
    price: 21.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    // Hambúrguer com fatias de bacon visíveis
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000'
  },
  {
    id: 'h4',
    name: 'X - Calabresa',
    description: 'Carne, Calabresa, Cheddar, Presunto, Mussarela, Ovo, Alface, Tomate, Cebola Caramelizada.',
    price: 19.99,
    category: 'HAMBURGUERS',
    // Hambúrguer robusto com bastante recheio
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000'
  },
  {
    id: 'h5',
    name: 'Especial',
    description: 'Carne, Presunto, Mussarela, Queijo Cheddar, Ovo, Molho Barbecue, Anéis de Cebola, Alface, Tomate.',
    price: 21.99,
    category: 'HAMBURGUERS',
    // Hambúrguer alto e suculento
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1000'
  },
  {
    id: 'h6',
    name: 'Hamb. do Baiano',
    description: '2 Carnes Gourmet, Calabresa, Queijo Coalho, Presunto, Mussarela, Alface, Tomate, Cebola Caramelizada.',
    price: 29.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    // Hambúrguer duplo monstro
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1000'
  },
  {
    id: 'h7',
    name: 'X - Tudo',
    description: 'Carne Gourmet, Ovos, Calabresa, Bacon, Frango, Presunto, Mussarela, Alface, Tomate, Cebola Caramelizada, Milho Verde, Batata Palha.',
    price: 34.99,
    category: 'HAMBURGUERS',
    // Hambúrguer extremamente recheado, alto e robusto (estilo "monstro")
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1000'
  },
  {
    id: 'h8',
    name: 'Combo + Coca Cola 1 Litro',
    description: '3 Hambúrgueres "Clássico" + Coca 1L. Perfeito para dividir!',
    price: 54.99,
    category: 'HAMBURGUERS',
    isPopular: true,
    // Foto de combo com lanche e bebida
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=1000'
  },

  // Sanduiches
  {
    id: 's1',
    name: 'Misto Quente',
    description: 'Pão, Presunto, Mussarela, Queijo Coalho na chapa.',
    price: 7.99,
    category: 'SANDUICHES',
    // Sanduíche tostado com queijo derretendo
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000'
  },
  {
    id: 's2',
    name: 'Americano',
    description: '02 Ovos, Mussarela, Presunto, Alface, Tomate, Cebola no pão.',
    price: 11.99,
    category: 'SANDUICHES',
    // Sanduíche de pão de forma bem recheado
    image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1000'
  },

  // Fritas
  {
    id: 'f1',
    name: 'Batata Palito 350g',
    price: 19.99,
    category: 'FRITAS',
    // Batatas fritas douradas
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1000'
  },
  {
    id: 'f2',
    name: 'Batata c/ Cheddar e Bacon',
    description: '350g de batata crocante com cobertura especial de cheddar e bacon.',
    price: 29.99,
    category: 'FRITAS',
    isPopular: true,
    // Batatas com cheddar e bacon
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1000'
  },
  {
    id: 'f3',
    name: 'Anéis de Cebola',
    description: 'Porção generosa, acompanha Molho Barbecue.',
    price: 24.99,
    category: 'FRITAS',
    // Onion rings
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=1000'
  },

  // Bebidas
  { 
    id: 'b1', 
    name: 'Coca-Cola Lata', 
    price: 5.99, 
    category: 'BEBIDAS', 
    // Lata vermelha de refrigerante
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000' 
  },
  { 
    id: 'b2', 
    name: 'Coca Zero Lata', 
    price: 5.99, 
    category: 'BEBIDAS', 
    // Copo de refrigerante escuro com gelo (representação visual segura)
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1000' 
  },
  { 
    id: 'b3', 
    name: 'Fanta Laranja Lata', 
    price: 5.99, 
    category: 'BEBIDAS', 
    // Copo/Lata de refrigerante laranja
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=1000' 
  },
  { 
    id: 'b4', 
    name: 'Guaraná Lata', 
    price: 5.99, 
    category: 'BEBIDAS', 
    // Lata Guaraná Antarctica (Alta Resolução)
    image: 'https://m.media-amazon.com/images/I/71Y-3s+9iXL._AC_SL1500_.jpg' 
  },
  { 
    id: 'b5', 
    name: 'Coca-Cola 1L', 
    price: 9.99, 
    category: 'BEBIDAS', 
    // Garrafa de refrigerante (foco no líquido escuro)
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000' 
  },
  { 
    id: 'b6', 
    name: 'Coca Zero 1L', 
    price: 9.99, 
    category: 'BEBIDAS', 
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1000' 
  },
  { 
    id: 'b7', 
    name: 'Guaraná 1L', 
    price: 9.99, 
    category: 'BEBIDAS', 
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=1000' 
  },
  { 
    id: 'b8', 
    name: 'Fanta 1L', 
    price: 9.99, 
    category: 'BEBIDAS', 
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=1000' 
  },
  { 
    id: 'b9', 
    name: 'Coca-Cola 2L', 
    price: 13.99, 
    category: 'BEBIDAS', 
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1000' 
  },

  // Sucos
  { 
    id: 'su1', 
    name: 'Suco Natural (Com Leite)', 
    description: '500ml. Escolha o sabor da sua fruta preferida com leite.', 
    price: 10.00, 
    category: 'SUCOS', 
    flavors: JUICE_FLAVORS,
    // Copo de suco/vitamina cremoso
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1000'
  },
  { 
    id: 'su2', 
    name: 'Suco Natural (Sem Leite)', 
    description: '500ml. Suco da fruta com água. Escolha o sabor.', 
    price: 9.00, 
    category: 'SUCOS', 
    flavors: JUICE_FLAVORS,
    // Copo de suco refrescante
    image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=1000'
  },

  // Adicionais
  // Carne grelhada isolada (apenas carne, sem pão)
  { id: 'ad1', name: 'Carne Gourmet Extra', price: 6.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1000' },
  { id: 'ad2', name: 'Bacon Extra', price: 3.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1606851094655-b2593a9af63f?q=80&w=1000' },
  { id: 'ad3', name: 'Anéis de Cebola Extra', price: 3.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=1000' },
  // Alterado para imagem de alta qualidade do Unsplash mostrando linguiça fatiada/frita (estilo acebolada)
  { id: 'ad4', name: 'Calabresa Extra', price: 2.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?q=80&w=1000' },
  // Alterado para imagem do hambúrguer Especial (muito cheddar) conforme solicitado
  { id: 'ad5', name: 'Cheddar Extra', price: 1.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1000' },
  // Alterado para imagem de ovo frito (corrigindo imagem incorreta anterior)
  { id: 'ad6', name: 'Ovo Extra', price: 1.99, category: 'ADICIONAIS', image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1000' },
];
