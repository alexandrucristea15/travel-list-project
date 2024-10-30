import { useState } from "react";

const Form = ({ onAddObject }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();
    //guard
    if (!description) return;

    // control
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    //send data
    onAddObject(newItem);

    //reset state
    setQuantity(1);
    setDescription("");
  };

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
