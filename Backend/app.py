from flask import Flask, request

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def handle_submit():
    name = request.form.get('name')
    email = request.form.get('email')
    return f"<h2>Received data from frontend:</h2><p>Name: {name}</p><p>Email: {email}</p>"

if __name__ == '__main__':
    app.run(port=5000, debug=True, host='0.0.0.0')
