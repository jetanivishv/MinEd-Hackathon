from flask import Flask, render_template, request
from model import model
import numpy as np
import pandas as pd

app = Flask(__name__)


@app.route("/predictRange", methods=['GET', 'POST'])
def predictRange():
    if request.method == 'POST':
        startDate = request.form["startDate"]
        endDate = request.form["endDate"]
        model.predictRange(startDate, endDate)

        df = pd.read_csv("./Prediction/prediction.csv")
        predictedData = df.to_numpy()
        predictedData = np.delete(predictedData, [0], 1)
        return render_template("home.html", date="", predictedData=predictedData, len=len(predictedData))


@ app.route("/predict", methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        date = request.form['date']
        predictedData = model.predict(date)
        return render_template("home.html", date=date, predictedData=predictedData, len=0)


@ app.route("/")
def hello_world():
    return render_template("home.html", date="", predictedData="", len=-1)


if __name__ == '__main__':
    model.createModel()
    app.run(debug=True)
