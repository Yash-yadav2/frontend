import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/routes/Home";
import Main from "./components/routes/Main";
import Sports from "./components/routes/Sports";
import InPlay from "./components/routes/InPlay";
import LiveCasino from "./components/routes/LiveCasino";
import Bonus from "./components/routes/Bonus";
import LoyaltyProgram from "./components/routes/LoyaltyProgram";
import Profile from "./components/routes/Profile";
import EditProfile from "./components/routes/EditProfile";
import Payment from "./components/routes/Payment";
import Crypto from "./components/routes/Crypto";
import Vipayment from "./components/routes/Vipayment";
import Superbank from "./components/routes/Superbank";
import Papara from "./components/routes/Papara";
import Loader from "./components/Loader";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={
            <EditProfile />} />
          <Route path="/payment" element={
            <Payment />} />
          <Route path="/crypto" element={< Crypto />} />
          <Route path="/vipayment" element={< Vipayment />} />
          <Route path="/superbank" element={< Superbank />} />
          <Route path="/papara" element={< Papara/>} />
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
