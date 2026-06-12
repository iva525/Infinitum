from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route("/")
def home():
    return open("index.html", encoding="utf-8").read()

@app.route("/search")
def search():
    q = request.args.get("q", "")

    return jsonify({
        "query": q,
        "results": [
            {
                "title": f"Результат для {q}",
                "url": "https://example.com"
            }
        ]
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
    js/app.js
