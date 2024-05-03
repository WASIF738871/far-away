import { useState } from "react";

const Form = ({ onAddItem }) => {

  const [data, setData] = useState({
    quantity: 1,
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.description) return alert("Please give description!");
    onAddItem({
      ...data,
      packed: false,
      id: Date.now(),
    });
    setData({
      quantity: 1,
      description: "",
    })
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 😍 trip?</h3>
      <select
        value={data.quantity}
        onChange={(e) => setData({ ...data, quantity: +e.target.value })}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
