from flask import Flask, jsonify
from gtts import gTTS

app = Flask(__name__)

@app.route('/api/v1/word=<word>&lang=<lang>&archive=<archive>', methods=['POST', 'GET'])
def home(word, lang, archive):
    tts = gTTS(text=f"""{word}""", lang=f'{lang}', slow=False, tld='pt')
    tts.save(f'/home/joel/Documents/niino-bot/public/audio/{archive}.mp3')
    return jsonify({ 'data': 'Arquivo feito com sucesso.' })

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
