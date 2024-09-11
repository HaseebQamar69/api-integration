import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Apiintegration from "./pages/Apiintegration";
import Practice from "./pages/Practice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apiintegration />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </Router>
  );
}

export default App;
