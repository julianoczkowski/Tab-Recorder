document.addEventListener("DOMContentLoaded", () => {
    const startVideoButton = document.querySelector("button#start_video");
    const stopVideoButton = document.querySelector("button#stop_video");

    function sendMessage(action) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: action}, function(response) {
                if (chrome.runtime.lastError) {
                    console.error("Error sending message:", chrome.runtime.lastError);
                    alert(`Error: ${chrome.runtime.lastError.message}`);
                } else {
                    console.log("Response received:", response);
                }
            });
        });
    }

    startVideoButton.addEventListener("click", () => {
        sendMessage("request_recording");
    });

    stopVideoButton.addEventListener("click", () => {
        sendMessage("stopvideo");
    });
});
