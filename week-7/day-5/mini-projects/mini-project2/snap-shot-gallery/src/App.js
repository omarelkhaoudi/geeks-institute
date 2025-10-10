import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<CategoryPage category="mountain" />} />
          <Route path="/beaches" element={<CategoryPage category="beaches" />} />
          <Route path="/birds" element={<CategoryPage category="birds" />} />
          <Route path="/food" element={<CategoryPage category="food" />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
