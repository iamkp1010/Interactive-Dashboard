import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchChartData } from "../store/chartDataSlice";
import CandlestickChart from "../components/CandlestickChart";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

const chartTypes = ["Candlestick", "Line", "Bar", "Pie"] as const;
type ChartType = (typeof chartTypes)[number];

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    candlestickData,
    lineChartData,
    barChartData,
    pieChartData,
    loading,
    error,
  } = useSelector((state: RootState) => state.chartData);
  const [activeChart, setActiveChart] = useState<ChartType>("Candlestick");

  useEffect(() => {
    dispatch(fetchChartData());
  }, [dispatch]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.5rem",
        }}
      >
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.5rem",
          color: "red",
        }}
      >
        Error: {error}
      </div>
    );
  }

  const renderChart = () => {
    switch (activeChart) {
      case "Candlestick":
        return <CandlestickChart data={candlestickData} />;
      case "Line":
        return <LineChart data={lineChartData} />;
      case "Bar":
        return <BarChart data={barChartData} />;
      case "Pie":
        return <PieChart data={pieChartData} />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
        padding: "4rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "4rem",
            color: "#1f2937",
          }}
        >
          Interactive Dashboard
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {chartTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveChart(type)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                fontSize: "1.125rem",
                fontWeight: "600",
                transition: "all 0.3s ease",
                transform: activeChart === type ? "scale(1.05)" : "scale(1)",
                backgroundColor: activeChart === type ? "#3b82f6" : "white",
                color: activeChart === type ? "white" : "#1f2937",
                border: "2px solid #e5e7eb",
                cursor: "pointer",
                boxShadow:
                  activeChart === type
                    ? "0 4px 6px rgba(0, 0, 0, 0.1)"
                    : "none",
              }}
            >
              {type} Chart
            </button>
          ))}
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "0.5rem",
            padding: "2rem",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h2
            style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              textAlign: "center",
              color: "#1f2937",
            }}
          >
            {activeChart} Chart
          </h2>
          <div style={{ height: "600px" }}>{renderChart()}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
