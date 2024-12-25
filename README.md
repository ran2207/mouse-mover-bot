# Mouse Mover Scripts

These Node.js scripts move your mouse randomly on the screen to keep your system active. They use the [`robotjs`](https://github.com/octalmage/robotjs) library.

## Overview

1. **mouse-mover-exit-on-user-input.js**

   - This script **moves the mouse every 1 minute**.
   - It **exits** automatically when you press any key or if you move the mouse yourself during the sleep period.

2. **mouse-mover-continue.js**
   - This script **moves the mouse every 1 minute**.
   - It **keeps running indefinitely** even if you press a key or move the mouse.
   - The only way to stop it is by terminating the process (e.g., pressing `Ctrl + C` in the terminal).

## Prerequisites

1. **Node.js** (version 12 or higher is recommended).
2. **NPM** or **Yarn** (for installing packages).
3. **robotjs** library:
   - RobotJS may need additional native build tools. For instance:
     - On macOS, you may need **Xcode Command Line Tools**.
     - On Windows, you may need **Visual Studio Build Tools**.
     - On Linux, ensure you have the required development tools installed.

## Installation

1. **Clone or Download** this repository.
2. **Install Dependencies**:
   ```bash
   cd your-cloned-folder
   npm install robotjs
   ```
   If you get errors, confirm you have the required build tools for your operating system.

## Usage

1. **mouse-mover-exit-on-user-input.js**:

   ```bash
   node mouse-mover-exit-on-user-input.js
   ```

   - Moves the mouse every minute.
   - Stops if you press any key or if you manually move the mouse during the sleep period.

2. **mouse-mover-continue.js**:
   ```bash
   node mouse-mover-continue.js
   ```
   - Moves the mouse every minute.
   - Ignores key presses and mouse movements by the user (it only logs a message).
   - Stop this script by pressing `Ctrl + C` or otherwise killing the process.

## Important Notes

- The script uses `robotjs` to get the current mouse position and move the mouse smoothly.
- Make sure you run these scripts in a terminal window (VSCode, Terminal, Command Prompt, etc.) to see the console logs.
- **Security Warning**: Moving the mouse with a script might interfere with user activity. Use responsibly and at your own risk.
