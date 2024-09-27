# Countdown Timer with Audio Play

This project is a simple countdown timer that plays an audio file when a button is clicked. Once the timer starts, the button is disabled, and a countdown is displayed on the screen. When the countdown reaches zero, a message is shown.

## Features

- Plays an audio file when the button is clicked.
- Displays a countdown timer in the format `minutes:seconds`.
- Once the countdown ends, a message "Toll gemacht!!!" is displayed.
- The button becomes disabled once the timer starts.

## Tech Stack

- **HTML**: Basic structure of the page, including the button, audio element, and countdown display.
- **CSS**: Used to style the page.
- **JavaScript**: Implements the core logic for the countdown timer and handling user interactions.

## How it Works

1. The user clicks the **"Start"** button.
2. An audio file starts playing.
3. A countdown begins, starting from 148 seconds (2 minutes and 28 seconds).
4. The button becomes disabled to prevent multiple clicks.
5. Once the countdown finishes, the message **"Toll gemacht!!!"** appears on the screen.
   
## How to Use

- Clone the repository:
```javascript
git clone https://github.com/yourusername/countdown-timer.git
```
- Open index.html in your browser.
- Click the "Start" button to start the audio and countdown.
- Watch the countdown update until it reaches zero, then see the final message.

## Future Improvements

1. Add functionality to reset the timer after it ends.
2. Allow the user to set the initial countdown time dynamically.
3. Add visual effects or sound when the countdown finishes.
