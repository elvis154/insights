from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS
import os

# Initialize Flask app
app = Flask(__name__)
# Allow cross-origin requests (for development, allow all origins)
CORS(app, resources={r"/*": {"origins": "*"}})

# Ensure proper CORS headers on every response
@app.after_request
def add_cors_headers(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    return response

# Configure Gemini API key (Replace with your actual API key)
GENAI_API_KEY = "AIzaSyDGfShhcmbW870TcLo-SWVDs6P8cUGPSIM"
genai.configure(api_key=GENAI_API_KEY)

def get_market_analysis(product, product_brand):
    """Generate a market analysis for a given product."""
    prompt = f"""
    Conduct a market analysis for the product '{product}' under the brand '{product_brand}'. The response should include:
    1. A list of top competitors.
    2. Feature, pricing, and customer sentiment comparison.
    3. Industry trends and opportunities.
    4. Unique differentiators.
    5. Useful links and strategies.
    6. Innovations and improvements needed.
    """
    try:
        model = genai.GenerativeModel("gemini-1.5-pro")  # Use Gemini model
        chat = model.start_chat(history=[])
        response = chat.send_message(prompt, stream=True)
        response_text = "".join(chunk.text for chunk in response)
        return response_text
    except Exception as e:
        return f"Error: {str(e)}"

@app.route("/market_analysis", methods=["POST"])
def market_analysis():
    """API Endpoint for market analysis."""
    data = request.json
    product = data.get("product")
    product_brand = data.get("product_brand")

    if not product or not product_brand:
        return jsonify({"error": "Missing product or product_brand"}), 400

    analysis = get_market_analysis(product, product_brand)
    return jsonify({"analysis": analysis})

@app.route("/chat", methods=["POST"])
def chat():
    """General chat endpoint for non-business queries."""
    data = request.json
    message = data.get("message")
    if not message:
        return jsonify({"error": "Missing message"}), 400

    try:
        model = genai.GenerativeModel("gemini-1.5-pro")
        chat = model.start_chat(history=[])
        response = chat.send_message(message, stream=True)
        response_text = "".join(chunk.text for chunk in response)
    except Exception as e:
        response_text = f"Error: {str(e)}"

    return jsonify({"response": response_text})

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5001)
