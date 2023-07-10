from flask import Flask, render_template, request
import json

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

with open("../data.json", encoding="UTF-8") as file:
        data = json.load(file)

@app.route("/")
def index():
    return render_template("index.html", data=data)

@app.route("/<country>")
def country_info(country):
    country_data = None

    for item in data:
         if item["name"].lower() == country.lower():
              country_data = item
              break
    
    if country_data:
         return render_template("country.html", country_data=country_data, data=data)
    else:
         return "Country not found."
