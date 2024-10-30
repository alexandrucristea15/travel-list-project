import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

// [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ]

function App() {
  const [items, setItems] = useState([]);
  const handleAddObject = (newItem) => {
    setItems((items) => [...items, newItem]);
  };
  const handleRemoveObject = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(newItems);
  };

  const handleClearList = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddObject={handleAddObject} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveObject}
        onCheckItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
