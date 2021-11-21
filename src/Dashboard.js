import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>Info that I got here is {location.state}</h1>
    </div>
  );
}

export default Dashboard;
