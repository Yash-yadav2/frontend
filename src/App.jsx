import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/routes/Home";
import Main from "./components/routes/Main";
import Sports from "./components/routes/Sports";
import InPlay from "./components/routes/InPlay";
import LiveCasino from "./components/routes/LiveCasino";
import Bonus from "./components/routes/Bonus";
import LoyaltyProgram from "./components/routes/LoyaltyProgram";
import Admin from "./components/routes/Admin";
import Finance from "./components/routes/Finance";
import Profile from "./components/routes/Profile";
import EditProfile from "./components/routes/EditProfile";
import AdminLogin from "./components/routes/AdminLogin";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Casino" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/InPlay" element={<InPlay />} />
          <Route path="/LiveCasino" element={<LiveCasino />} />
          <Route path="/Bonus" element={<Bonus />} />
          <Route path="/LoyaltyProgram" element={<LoyaltyProgram />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<EditProfile />} />
          {/* <Route
          path="/edit"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
