// popup.js

document.addEventListener('DOMContentLoaded', function () {
    const checkButton = document.getElementById('checkSpamButton');
    const resultDiv = document.getElementById('result');

    checkButton.addEventListener('click', async function () {
        const emailText = document.getElementById('emailText').value;

        if (emailText) {
            try {
                const response = await fetch('http://localhost:5000/predict', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email_text: emailText }),
                });

                const data = await response.json();
                if (data.spam) {
                    resultDiv.innerText = 'This email is classified as SPAM!';
                    resultDiv.style.color = 'red';
                } else {
                    resultDiv.innerText = 'This email is NOT spam.';
                    resultDiv.style.color = 'cyan';
                }
            } catch (error) {
                console.error("Error:", error);
                resultDiv.innerText = 'Error occurred while checking spam.';
                resultDiv.style.color = 'orange';
            }
        } else {
            resultDiv.innerText = 'Please enter email text.';
            resultDiv.style.color = 'orange';
        }
    });
});