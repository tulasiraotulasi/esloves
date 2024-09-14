import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Chapters from "./components/Chapters";
import Books from "./components/Books";
import Classes from "./components/Classes";
import Lectures from "./components/Lectures";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Chapters" element={<Chapters />} />
        <Route path="/Books/:id" element={<Books />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Lectures" element={<Lectures />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
