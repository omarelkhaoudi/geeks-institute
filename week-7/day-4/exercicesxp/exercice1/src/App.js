import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary";

// 3 Functional components
function HomeScreen() {
  return <h2 className="text-center mt-5">🏠 Welcome to the Home Page</h2>;
}

function ProfileScreen() {
  return <h2 className="text-center mt-5">👤 This is your Profile Page</h2>;
}

function ShopScreen() {
  // This will throw an error intentionally
  throw new Error("Shop component crashed!");
}

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <NavLink className="navbar-brand" to="/">
          React Router Error Boundary
        </NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
        </div>
      </nav>

      {/* Routes */}
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
