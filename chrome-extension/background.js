// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log("Email Spam Detector extension installed.");
});

// Listener for messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "checkSpam") {
        // Here you could handle spam checking logic if needed
        // For now, we can just log the request
        console.log("Received request to check spam:", request.emailText);
        
        // You can send a response back if needed
        sendResponse({ status: "Received" });
    }
});