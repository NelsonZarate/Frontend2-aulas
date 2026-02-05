
import { Route, Routes } from "react-router-dom";
import {Home , About} from "./pages/pages.tsx"
import Navbar from "./components/layout/navbar.tsx";
import "./App.css";
function App() {
  return (<>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    </Routes></>
  );
}

export default App;
