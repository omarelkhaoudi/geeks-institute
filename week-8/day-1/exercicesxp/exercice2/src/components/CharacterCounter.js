import { useRef, useState } from "react";
import "./CharacterCounter.css";

export default function CharacterCounter() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleInput = () => {
    if (inputRef.current) {
      setCount(inputRef.current.value.length);
    }
  };

  return (
    <div className="counter-container">
      <h2>Character Counter</h2>
      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Type something..."
        className="text-input"
      />
      <p className="counter">Characters: {count}</p>
    </div>
  );
}
