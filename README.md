# 🍅 Pomodoro Clock

A beautiful, minimal 30-minute Pomodoro timer built with vanilla HTML, CSS, and JavaScript.

![Pomodoro Clock](https://img.shields.io/badge/Status-Complete-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- ⏱️ **30-minute timer** - Perfect for focused work sessions
- ▶️ **Start/Pause controls** - Full control over your timer
- 🔄 **Reset functionality** - Start fresh anytime
- 📊 **Visual progress ring** - See your progress at a glance
- 🎨 **Beautiful design** - Clean, modern, and distraction-free
- 📱 **Responsive** - Works on desktop and mobile devices
- 🎉 **Completion notification** - Visual feedback when time's up

## 🚀 Getting Started

### Quick Start

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Click "Start" to begin your Pomodoro session!

### No Installation Required

This is a pure vanilla web application - no build tools, no dependencies, no installation needed. Just open the HTML file in any modern browser.

## 📖 How to Use

1. **Start the timer**: Click the "Start" button to begin your 30-minute focus session
2. **Pause if needed**: Click "Pause" to temporarily stop the timer
3. **Resume**: Click "Start" again to continue from where you left off
4. **Reset**: Click "Reset" to return to 30:00 and start over
5. **Completion**: When the timer reaches 0:00, you'll see a completion notification

## 🎯 The Pomodoro Technique

The Pomodoro Technique is a time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. This app uses a 30-minute interval for extended focus sessions.

### Typical Workflow:
1. Set a timer for 30 minutes
2. Work on your task until the timer rings
3. Take a 5-10 minute break
4. Repeat the cycle

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No frameworks, pure JS

## 📁 Project Structure

```
pomodoro-clock/
│
├── index.html          # Main application structure
├── style.css           # Styling and animations
├── script.js           # Timer logic and interactions
│
├── SPECIFICATION.md    # Technical specification
├── README.md           # This file
│
└── assets/             # Optional assets folder
```

## 🎨 Customization

Want to customize the timer? Here are some easy modifications:

### Change Timer Duration
Edit `script.js` and modify:
```javascript
this.totalTime = 30 * 60; // Change 30 to your desired minutes
```

### Change Colors
Edit `style.css` and modify the CSS variables:
```css
:root {
    --primary-color: #ff6b6b;  /* Main timer color */
    --background: #1a1a2e;     /* Background color */
    /* ... */
}
```

## 🌐 Browser Support

Works in all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with ❤️ using vanilla web technologies. No frameworks, no dependencies, just pure web standards.

---

**Happy focusing! 🍅⏰**
