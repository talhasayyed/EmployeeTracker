from flask import Flask, render_template, jsonify
import time

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/combo")
def combo_chart():
    time.sleep(5)
    return render_template("combo_chart.html")



@app.route("/pie_only")
def pie_only():
    return render_template("pie_only.html")

@app.route("/pie_data")
def get_pie_data():
    # Dummy data for pie chart
    data = [
        {"name": "Apples", "value": 25},
        {"name": "Bananas", "value": 15},
        {"name": "Cherries", "value": 30},
        {"name": "Dates", "value": 10},
        {"name": "Elderberries", "value": 20}
    ]
    return jsonify(data)


@app.route("/line_pie_data")
def get_data():
    dataset = [
        ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
        ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
        ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ["Cheese Cocoa", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ["Walnut Brownie", 25.2, 37.1, 41.2, 18, 33.9, 49.1]
    ]
    return jsonify(dataset)

if __name__ == "__main__":
    app.run(debug=True)
