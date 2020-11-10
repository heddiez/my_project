from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.myproject

# ANGER
# db.eating_emotion.insert_one({'food': '떡볶이', 'anger': 'T', 'sadness': 'F', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '짬뽕', 'anger': 'T', 'sadness': 'F', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '낙지볶음', 'anger': 'T', 'sadness': 'F', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '닭갈비', 'anger': 'T', 'sadness': 'F', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '마라탕', 'anger': 'T', 'sadness': 'F', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '양념치킨', 'anger': 'T', 'sadness': 'F', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '제육볶음', 'anger': 'T', 'sadness': 'F', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '닭발', 'anger': 'T', 'sadness': 'F', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '김치찌개', 'anger': 'T', 'sadness': 'F', 'stress': 'F', 'depressed': 'F'})

# SADNESS
# db.eating_emotion.insert_one({'food': '아이스크림', 'anger': 'F', 'sadness': 'T', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '케이크', 'anger': 'F', 'sadness': 'T', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '와플', 'anger': 'F', 'sadness': 'T', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '마카롱', 'anger': 'F', 'sadness': 'T', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '도넛', 'anger': 'F', 'sadness': 'T', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '빵', 'anger': 'F', 'sadness': 'T', 'stress': 'T', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '버블티', 'anger': 'F', 'sadness': 'T', 'stress': 'F', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '음료수', 'anger': 'F', 'sadness': 'T', 'stress': 'F', 'depressed': 'F'})

# STRESS
# db.eating_emotion.insert_one({'food': '홍차', 'anger': 'F', 'sadness': 'F', 'stress': 'T', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '밀크티', 'anger': 'F', 'sadness': 'F', 'stress': 'T', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '연어', 'anger': 'F', 'sadness': 'F', 'stress': 'T', 'depressed': 'T'})
# db.eating_emotion.insert_one({'food': '카레', 'anger': 'F', 'sadness': 'F', 'stress': 'T', 'depressed': 'T'})
# db.eating_emotion.insert_one({'food': '호두과자', 'anger': 'F', 'sadness': 'F', 'stress': 'T', 'depressed': 'F'})
# db.eating_emotion.insert_one({'food': '샐러드', 'anger': 'F', 'sadness': 'F', 'stress': 'T', 'depressed': 'F'})

# DEPRESSED
# db.eating_emotion.insert_one({'food': '맥주', 'anger': 'F', 'sadness': 'F', 'stress': 'F', 'depressed': 'T'})
# db.eating_emotion.insert_one({'food': '치킨', 'anger': 'F', 'sadness': 'F', 'stress': 'F', 'depressed': 'T'})
# db.eating_emotion.insert_one({'food': '아메리카노', 'anger': 'F', 'sadness': 'F', 'stress': 'F', 'depressed': 'T'})
# db.eating_emotion.insert_one({'food': '찜닭', 'anger': 'F', 'sadness': 'F', 'stress': 'F', 'depressed': 'T'})
