import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pos from "./pages/Pos";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pos" element={<Pos />}>
          <Route path="/pos/*"/>
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
