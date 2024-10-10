import React from 'react';
import { Store } from '../types';

interface StoreSelectorProps {
  selectedStore: Store | null;
  onSelectStore: (store: Store) => void;
}

const stores: Store[] = ['Walmart', 'Presidente Supermarket', 'Dollar Tree', 'Publix'];

const StoreSelector: React.FC<StoreSelectorProps> = ({ selectedStore, onSelectStore }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Select Store</h2>
      <div className="flex space-x-2">
        {stores.map((store) => (
          <button
            key={store}
            className={`px-3 py-1 rounded ${
              selectedStore === store ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => onSelectStore(store)}
          >
            {store}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoreSelector;