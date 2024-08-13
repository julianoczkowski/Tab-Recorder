# Tab Recorder Chrome Extension

This Chrome extension allows users to easily record their screen, focusing on capturing the current tab. It's perfect for creating tutorials, documenting bugs, or saving important web content.

## Features

- Record the current tab with just a click
- Audio recording support
- Automatic download of recorded video in WebM format
- Simple and intuitive user interface

## Installation

To install this extension in Chrome, follow these steps:

1. **Download the Extension**
   - Clone this repository or download it as a ZIP file and extract it to a folder on your computer.

2. **Open Chrome Extensions Page**
   - Open Google Chrome and navigate to `chrome://extensions/`
   - Alternatively, you can access this page by clicking on the three dots menu in the top right corner of Chrome, then "More tools" > "Extensions"

3. **Enable Developer Mode**
   - In the top right corner of the Extensions page, toggle on "Developer mode"
     ![image](https://github.com/user-attachments/assets/d625f6e2-05cd-42a6-84b3-8b6ba01b6b69)


4. **Load the Extension**
   - Click on the "Load unpacked" button that appears after enabling Developer mode
   - Navigate to the folder where you extracted the extension files and select it

5. **Verify Installation**
   - You should now see the Screen Recorder extension in your list of installed extensions
   - The extension icon should appear in your Chrome toolbar

## Usage

1. Click on the extension icon in your Chrome toolbar to open the popup
2. Click the "Start Recording" button to begin recording the current tab
   - You may be prompted to select which tab or screen to share; ensure you select the current tab
3. Perform the actions you want to record
4. When finished, click the "Stop Recording" button
5. The recorded video will automatically download in WebM format

## Permissions

This extension requires the following permissions:

- `activeTab`: To access and record the current tab
- `desktopCapture`: To capture screen content
- `tabs`: To interact with Chrome tabs
- `scripting`: To inject content scripts

## Troubleshooting

If you encounter any issues:

1. Ensure you have granted the necessary permissions when prompted
2. Check that you're using the latest version of Google Chrome
3. Try reloading the extension from the Chrome extensions page
4. If problems persist, please open an issue in this GitHub repository

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)

## Disclaimer

This extension is for personal use and learning purposes. Always respect privacy and copyright when recording content.
