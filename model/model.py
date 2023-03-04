import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
import numpy as np
from pmdarima import auto_arima
from sklearn.metrics import mean_squared_error
from math import sqrt
from datetime import datetime

model = "model"
lastDateStr = "lastDateStr"
lastDate = "lastDate"


def createModel():

    global model
    global lastDateStr
    global lastDate
    data = pd.read_csv('./data_daily.csv', index_col="Date", parse_dates=True)
    data.index = pd.to_datetime(data.index).to_period('D')
    data = data.sort_index(ascending=True)
    stepwise_fit = auto_arima(data['Price'], suppress_warnings=True)
    # stepwise_fit.summary()
    model = ARIMA(data['Price'], order=(1, 0, 5))
    model = model.fit()
    lastDateStr = str(data.index[-1])
    lastDate = data.index[-1]
    # model.summary()


def predict(date):
    global model
    global lastDateStr
    global lastDate

    # last date of train dataset
    d1 = datetime.strptime(lastDateStr, "%Y-%m-%d")
    # future date
    d2 = datetime.strptime(date, "%Y-%m-%d")

    days = d2-d1  # difference between last date of train data and future date
    # prediction of price
    predictions = model.predict(
        start=lastDate + days.days, end=lastDate + days.days, dynamic=False)

    return np.array(predictions)[0]


def predictRange(startDate, endDate):
    global model
    global lastDateStr
    global lastDate

    # last date of train dataset
    d1 = datetime.strptime(lastDateStr, "%Y-%m-%d")
    # future date
    d2 = datetime.strptime(startDate, "%Y-%m-%d")
    d3 = datetime.strptime(endDate, "%Y-%m-%d")

    days = d2-d1  # difference between last date of train data and future date
    # prediction of price
    dayRange = d3-d2  # range between start date and end date
    predictions = model.predict(
        start=lastDate + days.days, end=lastDate + days.days + dayRange.days, dynamic=False)

    pd.DataFrame(predictions).to_csv("./Prediction/prediction.csv")
    pdata = pd.read_csv("./Prediction/prediction.csv")
    pdata.columns = ['Dates', 'USD/INR']
    pdata.to_csv("./Prediction/prediction.csv")

    return str(predictions)
