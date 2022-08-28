import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Dashboard from "./pages/Dashboard";
import PieChart from "./pages/PieChart";
import LineChart from "./pages/LineChart";
import BarChart from "./pages/BarChart";
function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://assessment.api.vweb.app/products");
      const chartData = await result.json();
      const data = chartData.slice(0, 6);
      setData(data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pieChart" element={<PieChart data={data} />} />
          <Route path="/lineChart" element={<LineChart data={data} />} />
          <Route path="/barChart" element={<BarChart data={data} />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
