const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        <p>
          <em>Start adding some item to packing list 🚀</em>
        </p>
      </footer>
    );

  const numItems = items.length;
  const numPackedItem = items.filter((item) => item.packed).length;
  const percentage = (numPackedItem / numItems) * 100;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything packed. Good to go ✈️!`
          : `👜 You hav ${numItems} items on your list, and you already packed ${numPackedItem} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
