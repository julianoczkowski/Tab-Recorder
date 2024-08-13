console.log("Screen Recorder content script injected");

let recorder = null;
let stream = null;

function onAccessApproved(mediaStream) {
  stream = mediaStream;
  // Remove the 'let' keyword here, we're just assigning to the existing variable
  recorder = new MediaRecorder(stream);

  recorder.start();

  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  recorder.ondataavailable = function (event) {
    let recordedBlob = event.data;
    let url = URL.createObjectURL(recordedBlob);

    let a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "screen-recording.webm";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("Requesting recording");

    sendResponse(`Processed: ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        video: {
          displaySurface: "browser",
        },
        audio: true,
        preferCurrentTab: true,
      })
      .then((mediaStream) => {
        console.log("Display media obtained");
        onAccessApproved(mediaStream);
      })
      .catch((err) => {
        console.error("Error obtaining display media:", err);
      });

    return true; // Indicates we will send a response asynchronously
  }

  if (message.action === "stopvideo") {
    console.log("Stopping video");
    sendResponse(`Processed: ${message.action}`);

    if (!recorder) {
      console.log("No recorder instance found");
      return;
    }

    recorder.stop();
    stream.getTracks().forEach((track) => track.stop());
  }

  return true; // Indicates we will send a response asynchronously
});
