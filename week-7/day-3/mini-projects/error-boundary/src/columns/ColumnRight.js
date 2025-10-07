import React, { useState } from "react";
import ErrorBoundary from "../ErrorBoundary";

function ColumnRight() {
  const [text, setText] = useState(JSON.stringify({ function: "I live to crash" }));

  const replaceStringWithObject = () => {
    setText({ function: "I live to crash" }); // ❌ provoque une erreur
  };

  const invokeEventHandler = () => {
    throw new Error("This is an event handler error!");
  };

  return (
    <div className="container my-3">
      <h4>There are two types of errors we can trigger inside this component:</h4>
      <p>A rendering error and a regular JavaScript error.</p>

      {/* ✅ Partie protégée par l'ErrorBoundary */}
      <ErrorBoundary>
        <p>
          Clicking this button will replace the <code>stringified</code> object,
          <code>{text}</code>, with the original object. This will result in a rendering error.
        </p>
      </ErrorBoundary>

      <button className="btn btn-danger mb-3" onClick={replaceStringWithObject}>
        Replace string with object
      </button>

      <p>
        Clicking this button will invoke an event handler, inside of which an error is thrown.
      </p>
      <button className="btn btn-danger" onClick={invokeEventHandler}>
        Invoke event handler
      </button>
    </div>
  );
}

export default ColumnRight;
