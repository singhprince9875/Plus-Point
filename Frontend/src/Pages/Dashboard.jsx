import React from "react";
import { Navbars } from "../Components/Navbars";
import { Chart, registerables } from "chart.js/auto";
import { Bar, Line, Pie } from "react-chartjs-2";
import Sidebar from "../Components/Sidebar";
// import Navbars from "../Components/Navbars";
Chart.register(...registerables);

function Dashboard() {
  const bar = {
    labels: [
      "Cardiology",
      "Dermatology",
      "Gynaecology",
      "Neurology",
      "Orthopaedics",
    ],
    datasets: [
      {
        label: "Appointments by Department",
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Line Chart Data
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };
  return (
    <div>
      <Navbars/>
      <Sidebar/>
      <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          flex: "1 1 300px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Sales Bar Chart</h2>
        <Bar data={bar} />
      </div>
      <div
        style={{
          flex: "1 1 300px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Category Distribution</h2>
        <Pie data={pieData} />
      </div>
      <div
        style={{
          flex: "1 1 300px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Revenue Line Chart</h2>
        <Line data={lineData} />
      </div>
    </div>
    </div>
    
  );
}

export default Dashboard;