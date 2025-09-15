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
        {"name": "talha", "value": 20},
        {"name": "amit", "value": 15},
        {"name": "sj", "value": 20},
        {"name": "deepak", "value": 15},
        {"name": "vivek", "value": 10},
        {"name": "rachan", "value": 20}
    ]
    return jsonify(data)


@app.route("/line_pie_data")
def get_data():
    dataset = [
        ["number of tickets", "2012", "2013", "2014", "2015", "2016", "2017"],
        ["talha", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
        ["sj", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ["rachan", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ["vivek", 25.2, 37.1, 41.2, 18, 33.9, 49.1]
    ]
    return jsonify(dataset)

if __name__ == "__main__":
    app.run(debug=True)
