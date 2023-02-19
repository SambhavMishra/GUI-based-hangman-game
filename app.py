from flask import Flask, render_template, Response, redirect, url_for, request, jsonify
import hangman

app = Flask(__name__)

@app.route('/')
def game():
    return render_template("index.html")

@app.route("/fetchWord/", methods=["GET"])
def fetch_word():
    hm = hangman.Hangman()
    word = hm.getWord()
    return jsonify(word)

if __name__ == "__main__":
    app.run(debug=True)