# Email Spam Detector

A Chrome extension that detects spam emails using a Naive Bayes machine learning model. The extension highlights spam emails in red in your Gmail inbox and allows users to manually check any email text for spam classification.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

## Features

- Automatically detects and highlights spam emails in Gmail.
- Allows users to manually check any email text for spam classification.
- Built with Flask for the backend and a Naive Bayes model for spam detection.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Chrome Extensions API
- **Backend**: Flask
- **Machine Learning**: scikit-learn, pandas
- **Data Storage**: Pickle for model serialization

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/email-spam-detector.git
   cd email-spam-detector