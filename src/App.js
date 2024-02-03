import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <Navbar setOpen={setOpen} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} setOpen={setOpen} />
      <Dashboard setOpen={setOpen} isOpen={isOpen} />
    </div>
  );
}

export default App;
