import React, { useState } from 'react';
import { Item, Store } from '../types';
import { Plus } from 'lucide-react';

interface AddItemFormProps {
  onAddItem: (item: Item) => void;
}

const stores: Store[] = ['Walmart', 'Presidente Supermarket', 'Dollar Tree', 'Publix'];

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [prices, setPrices] = useState<{ [key in Store]?: number }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: Item = {
      id: Date.now().toString(),
      name,
      prices,
    };
    onAddItem(newItem);
    setName('');
    setPrices({});
  };

  const handlePriceChange = (store: Store, price: string) => {
    setPrices((prev) => ({
      ...prev,
      [store]: price ? parseFloat(price) : undefined,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Add New Item</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          className="border p-2 rounded col-span-2"
          required
        />
        {stores.map((store) => (
          <input
            key={store}
            type="number"
            value={prices[store] || ''}
            onChange={(e) => handlePriceChange(store, e.target.value)}
            placeholder={`${store} price`}
            className="border p-2 rounded"
            step="0.01"
            min="0"
          />
        ))}
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
      >
        <Plus size={18} className="mr-2" />
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;