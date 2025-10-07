import React from "react";
import ColumnLeft from "./columns/ColumnLeft";
import ColumnRight from "./columns/ColumnRight";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Error boundaries in React</span>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 border-end">
            <h2 className="text-center my-3">Left column</h2>
            <ColumnLeft />
          </div>

          <div className="col-md-6">
            <h2 className="text-center my-3">Right column</h2>
            <ErrorBoundary>
              <ColumnRight />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
