import React from 'react';
import { Item, Store } from '../types';
import { Trash2 } from 'lucide-react';

interface ItemListProps {
  items: Item[];
  selectedStore: Store | null;
  onRemoveItem: (id: string) => void;
  onEditItem: (item: Item) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, selectedStore, onRemoveItem, onEditItem }) => {
  const filteredItems = selectedStore
    ? items.filter((item) => item.prices[selectedStore] !== undefined)
    : items;

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Shopping List</h2>
      <ul className="space-y-2">
        {filteredItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between bg-white p-2 rounded shadow">
            <div>
              <span className="font-medium">{item.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold">
                ${selectedStore ? item.prices[selectedStore]?.toFixed(2) : ''}
              </span>
              <button
                onClick={() => onEditItem(item)}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;