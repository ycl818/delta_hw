import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import SummarizePage from "./pages/SummarizePage";
import PowerFlowAnalyzerPage from "./pages/PowerFlowAnalyzerPage";
import PowerTransferPage from "./pages/PowerTransferPage";
import EssentialDataPage from "./pages/EssentialDataPage";
import OptiTransferPage from "./pages/OptiTransferPage";
import HelpPage from "./pages/HelpPage";
import SettingPage from "./pages/SettingPage";
import OptiAgreement from "./pages/OptiAgreement";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <Navbar setOpen={setOpen} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} setOpen={setOpen} />
      <Routes>
        <Route
          path="/"
          element={<Dashboard setOpen={setOpen} isOpen={isOpen} />}
        >
          <Route path="/summarize" element={<SummarizePage />} />
          <Route
            path="/power-flow-analyzer"
            element={<PowerFlowAnalyzerPage />}
          />
          <Route path="/power-transfer" element={<PowerTransferPage />} />

          <Route path="/essential-data" element={<EssentialDataPage />} />
          <Route path="/opti-transfer" element={<OptiTransferPage />} />
          <Route path="/opti-agreement" element={<OptiAgreement />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/settings" element={<SettingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
