import { useState } from "react";

const Input = ({ addTOList }) => {
  const [input, setInput] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTOList(input);
          setInput("");
        }}
      >
        Add
      </button>
    </div>
  );
};
export default Input;
