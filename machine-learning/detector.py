import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
import pickle

# Load the dataset
# For SMS Spam Collection Dataset
data = pd.read_csv('spam.csv', encoding='latin-1')
data = data[['v1', 'v2']]  # v1 is the label, v2 is the message
data.columns = ['label', 'message']

# Preprocess the data
data['label'] = data['label'].map({'ham': 0, 'spam': 1})

# Create a model using a pipeline
model = make_pipeline(CountVectorizer(), MultinomialNB())

# Train the model
model.fit(data['message'], data['label'])

# Save the model and vectorizer using pickle
with open('spam_classifier_model.pkl', 'wb') as model_file:
    pickle.dump(model, model_file)

print("Model trained and saved successfully.")