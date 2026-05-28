from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(
    __name__,
    static_folder="../frontend/build",
    static_url_path="/"
)

CORS(app)


@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({
        "message": "Hello from Flask backend!"
    })


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    build_path = app.static_folder

    if path != "" and os.path.exists(os.path.join(build_path, path)):
        return send_from_directory(build_path, path)

    return send_from_directory(build_path, "index.html")


if __name__ == "__main__":

    port = int(os.environ.get("PORT", 5000))

    app.run(
        host="0.0.0.0",
        port=port,
        debug=True
    )