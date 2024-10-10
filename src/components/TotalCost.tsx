import React from 'react';
import { Item, Store } from '../types';

interface TotalCostProps {
  items: Item[];
  selectedStore: Store | null;
}

const TotalCost: React.FC<TotalCostProps> = ({ items, selectedStore }) => {
  const calculateTotal = () => {
    if (!selectedStore) return 0;
    return items.reduce((total, item) => {
      const price = item.prices[selectedStore];
      return total + (price || 0);
    }, 0);
  };

  return (
    <div className="mt-4 bg-green-100 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Estimated Total Cost</h2>
      {selectedStore ? (
        <p className="text-2xl font-bold text-green-700">
          ${calculateTotal().toFixed(2)} at {selectedStore}
        </p>
      ) : (
        <p className="text-gray-600">Select a store to see the estimated total cost</p>
      )}
    </div>
  );
};

export default TotalCost;