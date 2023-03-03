import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
import numpy as np
from pmdarima import auto_arima
from sklearn.metrics import mean_squared_error
from math import sqrt
from datetime import datetime


def predict(date):

    data = pd.read_csv('./data_daily.csv', index_col="Date", parse_dates=True)
    data.index = pd.to_datetime(data.index).to_period('D')
    data = data.sort_index(ascending=True)
    stepwise_fit = auto_arima(data['Price'], suppress_warnings=True)
    stepwise_fit.summary()
    model = ARIMA(data['Price'], order=(1, 0, 5))
    model = model.fit()
    model.summary()

    # last date of train dataset
    d1 = datetime.strptime(str(data.index[-1]), "%Y-%m-%d")
    # future date
    d2 = datetime.strptime(date, "%Y-%m-%d")

    days = d2-d1  # difference between last date of train data and future date
    # prediction of price
    predictions = model.predict(
        start=data.index[-1] + days.days, end=data.index[-1] + days.days, dynamic=False)

    return str(predictions)
