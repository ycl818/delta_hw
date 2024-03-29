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
import Login from "./components/AuthComponents/Login";
import Register from "./components/AuthComponents/Register";
// import RequireAuth from "./components/AuthComponents/RequireAuth";
import useAuth from "./hooks/useAuth";
import RequireAuth from "./components/AuthComponents/RequireAuth";
import PersistLogin from "./components/AuthComponents/PersistLogin";

function App() {
  const [isOpen, setOpen] = useState(false);

  const { auth } = useAuth();

  return (
    <div className="App">
      {auth?.mail && <Navbar setOpen={setOpen} isOpen={isOpen} />}
      {auth?.mail && <Sidebar isOpen={isOpen} setOpen={setOpen} />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route
              path="/"
              element={<Dashboard setOpen={setOpen} isOpen={isOpen} />}
            >
              <Route index element={<SummarizePage />} />
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
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
