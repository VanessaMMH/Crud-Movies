import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import { Navbar } from "./components/Navbar";

import ViewMovies from "./components/movie/ViewMovies";
import Add from "./components/movie/Add";
import Edit from "./components/movie/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route  path="/movies/:id" element={<ViewMovies/>} />
          <Route path="/add-movie"  element={<Add/>} />
          <Route  path="/edit-movie/:id" element={<Edit/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
