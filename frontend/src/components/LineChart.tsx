import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { LineChartData } from "../types/chart-data";

interface Props {
  data: LineChartData;
}

const LineChart: React.FC<Props> = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsLineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          strokeWidth={2}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
