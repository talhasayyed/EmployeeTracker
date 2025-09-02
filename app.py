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

@app.route("/data")
def get_data():
    # Dummy data for pie chart
    data = [
        {"name": "Apples", "value": 25},
        {"name": "Bananas", "value": 15},
        {"name": "Cherries", "value": 30},
        {"name": "Dates", "value": 10},
        {"name": "Elderberries", "value": 20}
    ]
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
