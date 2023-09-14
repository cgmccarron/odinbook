import React, { useState } from "react";

const ProductForm = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="product__form">
      <form>
        <input
          type="text"
          className="vf__input"
          placeholder="Paste amamazon url here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
