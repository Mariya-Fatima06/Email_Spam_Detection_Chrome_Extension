// Function to check if an email is spam and highlight it
const checkSpam = async (emailElement) => {
    const emailText = emailElement.innerText.trim(); // Trim to avoid unnecessary spaces
    console.log("Email text extracted:", emailText);

    if (!emailText) {
        console.error("Email text is undefined or empty!");
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email_text: emailText }),
        });
        const data = await response.json();
        console.log("Response from server:", data);

        if (data.spam) {
            emailElement.style.backgroundColor = 'red'; // Highlight spam emails in red
        }
    } catch (error) {
        console.error("Error checking spam:", error);
    }
};

// Function to iterate over emails and check for spam
const highlightSpamEmails = async () => {
    const emails = document.querySelectorAll('.zA'); // Adjust selector for Gmail's email rows
    console.log("Emails found:", emails);

    if (!emails.length) {
        console.error("No email elements found! Check the selector.");
        return;
    }

    for (const email of emails) {
        await checkSpam(email);
    }
};

// **Modified Observer to Keep Watching Gmail's DOM**
const observeGmail = () => {
    const targetNode = document.body; // Observe changes to the whole page
    const observerConfig = { childList: true, subtree: true };

    const observer = new MutationObserver((mutationsList) => {
        console.log("DOM Mutation detected!");
        highlightSpamEmails(); // Re-run highlighting every time new emails appear
    });

    observer.observe(targetNode, observerConfig); // Continuously observe changes
};

// Start observing Gmail's DOM for updates
observeGmail();