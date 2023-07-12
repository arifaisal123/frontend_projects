from flask import Flask, render_template, request, jsonify
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


@app.route("/filter")
def filter_data():
    selected_region = request.args.get("region")
    selected_country = request.args.get("country")
    print(selected_country)

    if not selected_country:
        print("I have been entered1")
        filtered_data = [item for item in data if item['region'] == selected_region]
    else:
        print("I have been entered2")
        # filtered_data = [item for item in data if item['name'].lower() == selected_country.lower()] #this method works
        filtered_data = [item for item in data if selected_country.lower() in item['name'].lower()]
        print(filtered_data)
 
    return jsonify({"filtered_data": filtered_data})


if __name__ == "__main__":
  app.run()
  