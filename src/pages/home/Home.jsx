import "./home.css";

import { Form, Logo, PackingList, Stats } from "../../components";
import { useState } from "react";

const Home = () => {
  const [initialItems, setInitialItems] = useState([]);
  const handleAddItem = (newItem) => {
    if (newItem) setInitialItems((initialItems) => [...initialItems, newItem]);
  };
  const handleDeleteItem = (id) => {
    if (id)
      setInitialItems((initialItems) =>
        initialItems.filter((initialItems) => initialItems.id !== id)
      );
  };
  const handleToggleItem = (id) => {
    if (id)
      setInitialItems((initialItems) =>
        initialItems.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        )
      );
  };
  const handleClearList = () => {
     const confirmed = window.confirm("Are you sure want to delete all items?")
    if (confirmed) setInitialItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={initialItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearList}
      />
      <Stats items={initialItems} />
    </div>
  );
};

export default Home;
