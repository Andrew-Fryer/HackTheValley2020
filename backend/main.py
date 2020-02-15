from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/')
def hello_world():
    obj = ["hello"]
    print(obj)

    #file = request.files['file']
    #print(file)

    return jsonify(obj)