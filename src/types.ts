export interface Item {
  id: string;
  name: string;
  prices: {
    [key in Store]?: number;
  };
}

export type Store = 'Walmart' | 'Presidente Supermarket' | 'Dollar Tree' | 'Publix';

export interface ShoppingList {
  id: string;
  name: string;
  items: Item[];
}