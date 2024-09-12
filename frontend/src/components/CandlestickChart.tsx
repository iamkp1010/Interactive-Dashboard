import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CandlestickData } from "../types/chart-data";

interface Props {
  data: CandlestickData[];
}

const CandlestickChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="high" fill="#82ca9d" name="High" />
        <Bar dataKey="low" fill="#8884d8" name="Low" />
        <Line type="monotone" dataKey="open" stroke="#ff7300" name="Open" />
        <Line type="monotone" dataKey="close" stroke="#387908" name="Close" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CandlestickChart;
