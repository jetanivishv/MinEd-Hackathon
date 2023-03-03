from flask import Flask, render_template, request
from model import model

app = Flask(__name__)


@app.route("/predict", methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        date = request.form['date']
        return model.predict(date)


@app.route("/")
def hello_world():
    return render_template("home.html")


if __name__ == '__main__':
    app.run(debug=True)
