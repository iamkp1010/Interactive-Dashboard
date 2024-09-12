from django.urls import path
from .views import CandlestickDataView, LineChartDataView, BarChartDataView, PieChartDataView

urlpatterns = [
    path('candlestick-data/', CandlestickDataView.as_view(), name='candlestick-data'),
    path('line-chart-data/', LineChartDataView.as_view(), name='line-chart-data'),
    path('bar-chart-data/', BarChartDataView.as_view(), name='bar-chart-data'),
    path('pie-chart-data/', PieChartDataView.as_view(), name='pie-chart-data'),
]
