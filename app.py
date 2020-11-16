from pymongo import MongoClient
import random
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

client = MongoClient('mongodb://test:test@localhost', 27017)
db = client.myproject


# HTML 화면 보여주기
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/food', methods=['GET'])
def show_food():
    emotion_receive = request.args.get('emotion_give')
    food_list = list(db.eating_emotion.find({emotion_receive: 'T'}, {'_id': False}))
    random.shuffle(food_list)
    return jsonify({'result': 'success', 'data': food_list[:6]})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
