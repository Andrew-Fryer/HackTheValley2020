import requests, os
from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/',methods=['POST'])
def hello_world():
    # file = request.files['file']
    # print(file)

    res1 = requests.post(
        url = "https://speech.googleapis.com/v1p1beta1/speech:recognize",
        params = {'key':os.environ.get('KEY')},
        json = {
            "audio": {
                "content": "/* Your audio */"
            },
            "config": {
                "enableAutomaticPunctuation": "true",
                "encoding": "LINEAR16",
                "languageCode": "en-US",
                "model": "default"
            }
        }
    )
    print(res1.json())


    string = "I love you. I hate you."
    res = requests.post(
        url = "https://language.googleapis.com/v1beta2/documents:analyzeSentiment",
        params = {'key':os.environ.get('KEY')},
        json = {"document":{"type":"PLAIN_TEXT","content":string},"encodingType":"UTF16"}
    )
    print(res.request)
    print(res.json())
    sentiment = res.json()["documentSentiment"]["score"]

    obj = [sentiment]

    return jsonify(obj)

# run test:
hello_world()