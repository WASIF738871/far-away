import { useState } from "react";
import { Item } from "../index";


const PackingList = ({ items, onDeleteItem, onToggleItem, onClearItem }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy == "input") sortedItems = items;
  if (sortBy == "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy == "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {items &&
          sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sortBy input order</option>
          <option value="description">sortBy description</option>
          <option value="packed">sortBy packed status</option>
        </select>
        <button onClick={onClearItem}>clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
