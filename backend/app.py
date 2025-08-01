from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model
with open('spam_classifier_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    email_text = data.get('email_text', '')

    if not email_text:
        return jsonify({'error': 'Email text is required'}), 400

    prediction = model.predict([email_text])[0]
    return jsonify({'spam': bool(prediction)})

if __name__ == '__main__':
    app.run(debug=True)