from flask import Flask, render_template, request, jsonify
from urllib.parse import unquote
import json

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Load the data file
with open("data.json", encoding="UTF-8") as file:
        data = json.load(file)


# Default route showing all country information
@app.route("/")
def index():
    return render_template("index.html", data=data)


# Load country route with country specific data
@app.route("/<country>")
def country_info(country):
    country_data = None
    print(country)
    decoded_country = unquote(country)
    print(decoded_country)
    # Get the specific country data that is requested
    for item in data:
         print(item["name"].lower())
         print(country.lower())
         if item["name"].lower() == decoded_country.lower():
              print("entered")
              country_data = item
              break
    
    # If country data is available
    if country_data:
         return render_template("country.html", country_data=country_data, data=data)
    # If country data is not available or no country has been selected
    else:
         return "Country not found."


# Filter data based on country or region
@app.route("/filter")
def filter_data():
    # Get the selected region by the user
    selected_region = request.args.get("region")
    
    # Get the selected country by the user
    selected_country = request.args.get("country")

    # If region is selected by the user
    if not selected_country:
        filtered_data = [item for item in data if item['region'] == selected_region]
    else:
        # If country is selected by the user
        filtered_data = [item for item in data if selected_country.lower() in item['name'].lower()]
 
    # Return filter data in json format
    return jsonify({"filtered_data": filtered_data})


# Execute the app, when the file is run, and not available on imports
if __name__ == "__main__":
  app.run()
  