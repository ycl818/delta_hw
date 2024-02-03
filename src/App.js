import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <Navbar setOpen={setOpen} isOpen={isOpen} />
      <Dashboard setOpen={setOpen} isOpen={isOpen} />
    </div>
  );
}

export default App;
