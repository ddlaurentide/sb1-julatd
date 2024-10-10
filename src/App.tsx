import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import StoreSelector from './components/StoreSelector';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';
import TotalCost from './components/TotalCost';
import { Item, Store, ShoppingList } from './types';

function App() {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [shoppingList, setShoppingList] = useState<ShoppingList>({
    id: '1',
    name: 'My Shopping List',
    items: [],
  });

  const handleAddItem = (newItem: Item) => {
    setShoppingList((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  };

  const handleRemoveItem = (id: string) => {
    setShoppingList((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const handleEditItem = (editedItem: Item) => {
    setShoppingList((prev) => ({
      ...prev,
      items: prev.items.map((item) => (item.id === editedItem.id ? editedItem : item)),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center">
            <ShoppingBag className="mr-2" />
            Multi-Store Shopping List
          </h1>
        </header>
        <main className="bg-white rounded-lg shadow-lg p-6">
          <StoreSelector selectedStore={selectedStore} onSelectStore={setSelectedStore} />
          <AddItemForm onAddItem={handleAddItem} />
          <ItemList
            items={shoppingList.items}
            selectedStore={selectedStore}
            onRemoveItem={handleRemoveItem}
            onEditItem={handleEditItem}
          />
          <TotalCost items={shoppingList.items} selectedStore={selectedStore} />
        </main>
      </div>
    </div>
  );
}

export default App;