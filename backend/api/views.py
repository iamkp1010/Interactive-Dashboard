from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import datetime, timedelta

class CandlestickDataView(APIView):
    def get(self, request):
        start_date = datetime(2023, 1, 1)
        data = {
            "data": [
                {
                    "x": (start_date + timedelta(days=i)).strftime("%Y-%m-%d"),
                    "open": round(30 + i * 0.5 + (i % 3) * 2, 2),
                    "high": round(40 + i * 0.7 + (i % 5) * 3, 2),
                    "low": round(25 + i * 0.3 + (i % 4) * 1.5, 2),
                    "close": round(35 + i * 0.6 + (i % 6) * 2.5, 2)
                } for i in range(30)  # 30 days of data
            ]
        }
        return Response(data)

class LineChartDataView(APIView):
    def get(self, request):
        data = {
            "labels": [f"Week {i+1}" for i in range(12)],  # 12 weeks
            "data": [
                round(100 + i * 15 + (i % 3) * 20 - (i % 5) * 10, 2)
                for i in range(12)
            ]
        }
        return Response(data)

class BarChartDataView(APIView):
    def get(self, request):
        products = ["Product A", "Product B", "Product C", "Product D", "Product E", 
                    "Product F", "Product G", "Product H"]
        data = {
            "labels": products,
            "data": [
                round(100 + i * 50 + (i % 3) * 30 - (i % 4) * 20, 2)
                for i in range(len(products))
            ]
        }
        return Response(data)

class PieChartDataView(APIView):
    def get(self, request):
        categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"]
        data = {
            "labels": categories,
            "data": [
                round(100 + i * 50 + (i % 3) * 75 - (i % 2) * 25, 2)
                for i in range(len(categories))
            ]
        }
        return Response(data)
