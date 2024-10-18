from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
app.secret_key = 'login_system_key'
# CORS(app)
CORS(app, resources={r"/login": {"origins": "http://localhost:9000"}})

def init_db():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)''')
    try:
        c.execute("INSERT INTO users (username, password) VALUES (?, ?)", 
                  ('admin', 'admin123'))
        c.execute("INSERT INTO users (username, password) VALUES (?, ?)", 
                  ('user', 'user123'))
    except sqlite3.IntegrityError:
        pass
    conn.commit()
    conn.close()

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('SELECT * FROM users WHERE username=? AND password=?', (username, password))
    user = c.fetchone()
    conn.close()

    if user:
        # session['username'] = username
        return jsonify({'token': 'dummy-token', 'username': username}), 200  # 回傳假 token
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

if __name__ == '__main__':
    init_db()
    app.run(debug=True, host='0.0.0.0', port=5001)
