import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CandlestickData,
  LineChartData,
  BarChartData,
  PieChartData,
} from "../types/chart-data";

interface ChartDataState {
  candlestickData: CandlestickData[];
  lineChartData: LineChartData;
  barChartData: BarChartData;
  pieChartData: PieChartData;
  loading: boolean;
  error: string | null;
}

const initialState: ChartDataState = {
  candlestickData: [],
  lineChartData: { labels: [], data: [] },
  barChartData: { labels: [], data: [] },
  pieChartData: { labels: [], data: [] },
  loading: false,
  error: null,
};

export const fetchChartData = createAsyncThunk(
  "chartData/fetchChartData",
  async () => {
    const [candlestick, lineChart, barChart, pieChart] = await Promise.all([
      axios.get("http://localhost:8000/api/candlestick-data/"),
      axios.get("http://localhost:8000/api/line-chart-data/"),
      axios.get("http://localhost:8000/api/bar-chart-data/"),
      axios.get("http://localhost:8000/api/pie-chart-data/"),
    ]);

    return {
      candlestickData: candlestick.data.data,
      lineChartData: lineChart.data,
      barChartData: barChart.data,
      pieChartData: pieChart.data,
      loading: false,
      error: null,
    };
  }
);

const chartDataSlice = createSlice({
  name: "chartData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchChartData.fulfilled,
        (
          state,
          action: PayloadAction<Omit<ChartDataState, "loading" | "error">>
        ) => {
          state.loading = false;
          state.candlestickData = action.payload.candlestickData;
          state.lineChartData = action.payload.lineChartData;
          state.barChartData = action.payload.barChartData;
          state.pieChartData = action.payload.pieChartData;
          state.error = null;
        }
      )
      .addCase(fetchChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default chartDataSlice.reducer;
