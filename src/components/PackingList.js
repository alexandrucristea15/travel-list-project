import { useState } from "react";
import ListItem from "./ListItem.js";

const PackingList = ({ items, onRemoveItem, onCheckItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  const handleSortAction = (e) => {
    setSortBy(e.target.value);
  };

  const handleClearList = () => {
    const confirmed = window.confirm("Do you really want to delete your list");
    if (confirmed) onClearList();
  };

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "status") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <ListItem
            key={item.id}
            itemData={item}
            onRemoveItem={onRemoveItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleSortAction}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="status">Sort by status</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
