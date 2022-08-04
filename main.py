from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

# Set up Flask:
app = Flask(__name__)

# Set up Flask to bypass CORS at the front end:
cors = CORS(app)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

# Create the receiver API POST endpoint:
@app.route('/receiver', methods=['POST'])
def faz_post():
    data = request.get_json()
    data = jsonify(data)
    
    return data


# Run the app:
if __name__ == '__main__':
    app.run()