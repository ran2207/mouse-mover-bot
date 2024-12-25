const robot = require('robotjs');
const readline = require('readline');

// Configure readline to listen for key presses (optional if you just want to ignore them)
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Variables to track mouse position and state
let lastMousePos = robot.getMousePos();
let isRunning = true;
let moveTimeout = null;
let sleepTimeout = null;
let isMoving = false;
let checkInterval = null;

// Function to generate a random integer within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if user is moving the mouse during sleep period
function checkMouseMovement() {
    const currentPos = robot.getMousePos();
    // If the script isn't moving the mouse and we detect movement, just log a message
    if (!isMoving && (currentPos.x !== lastMousePos.x || currentPos.y !== lastMousePos.y)) {
        console.log('User movement detected during sleep. The script will continue running...');
    }
    lastMousePos = currentPos;
}

// Function to move the mouse in a random direction
function moveMouseRandomly() {
    if (!isRunning) return;

    isMoving = true;
    console.log('Moving mouse...');
    const screen = robot.getScreenSize();
    const x = getRandomInt(0, screen.width);
    const y = getRandomInt(0, screen.height);

    // Smoothly move the mouse to the random position
    robot.moveMouseSmooth(x, y);

    // After 1 second of movement, start the sleep period
    moveTimeout = setTimeout(() => {
        if (!isRunning) return;
        
        isMoving = false;
        lastMousePos = robot.getMousePos(); // Update position before starting sleep
        console.log('Sleeping for 1 minute...');

        // Start movement checking during sleep
        checkInterval = setInterval(checkMouseMovement, 100);

        // Sleep for 1 minute, then move the mouse again
        sleepTimeout = setTimeout(() => {
            clearInterval(checkInterval); // Stop checking before next movement
            moveMouseRandomly();
        }, 60000); // 1 minute sleep
    }, 1000); // 1 second movement
}

// Start the mouse movement
moveMouseRandomly();

// We have a listener for keypress, but it does nothing.
// If you want to completely ignore keypresses, remove this entire block.
process.stdin.on('keypress', (str, key) => {
    // Just log that a key was pressed but do not stop the script.
    console.log(`Key pressed: ${str}. The script continues running...`);
});
