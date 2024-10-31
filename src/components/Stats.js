const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start by adding some items to your packing list 📃</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked = Math.ceil((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      {percentagePacked !== 100 ? (
        <em>
          You have {numItems} items on your list and you already packed{" "}
          {packedItems} ({percentagePacked ? percentagePacked : 0}%)
        </em>
      ) : (
        <em>
          <strong>✅ You are ready for your journey!✈️</strong>
        </em>
      )}
    </footer>
  );
};

export default Stats;
