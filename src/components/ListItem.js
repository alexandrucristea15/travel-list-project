const ListItem = ({ itemData, onRemoveItem, onCheckItem }) => {
  const handleDeleteItem = () => {
    onRemoveItem(itemData.id);
  };

  const handleCheckItem = () => {
    onCheckItem(itemData.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        value={itemData.packed}
        onChange={handleCheckItem}
      />
      <span style={itemData.packed ? { textDecoration: "line-through" } : {}}>
        {itemData.quantity} {itemData.description}
      </span>
      <button onClick={handleDeleteItem}>❌</button>
    </li>
  );
};

export default ListItem;
