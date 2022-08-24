import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import TodoApp from "./TodoApp";
import MovieApp from "./MovieApp";
import CoinTracker from "./CoinTracker";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} /> |
        <Route path="/movie" element={<MovieApp />} /> |
        <Route path="/coin" element={<CoinTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
