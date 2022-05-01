import "./App.css";
import Nav from "./components/Navigation/Nav";
import Home from "./components/Home/Home";
import Posts from "./components/Posts//Posts"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/posts" exact element={<Posts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
