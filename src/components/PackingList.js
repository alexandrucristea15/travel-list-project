import ListItem from "./ListItem.js";

const PackingList = ({ items }) => {
  console.log(items);
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} itemData={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
