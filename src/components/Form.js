const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
};

export default Form;
