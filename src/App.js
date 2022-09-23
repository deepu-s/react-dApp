import "./App.css";
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navigation from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Policyholder from "./components/RegisterPolicyholder/RegisterPolicyholder";
import Doctor from "./components/RegisterDoctor";
import ClaimInsurance from "./components/ClaimInsurance/ClaimInsurance";
import Report from "./components/report";

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="policyholder" element={<Policyholder />} />
          <Route path="doctor" element={<Doctor />} />
          <Route path="claim" element={ <ClaimInsurance />} />
          <Route path="report" element={ <Report />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
