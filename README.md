# Cookie Clicker Game

A simple, interactive cookie clicking game built with vanilla HTML, CSS, and JavaScript. Click the cookie to earn points, unlock the 2x multiplier, and see how high you can get!

## 🎮 Features

- **Cookie Clicking** - Click the cookie image to increment your score
- **2x Multiplier** - Unlock the double button when you reach 25 cookies
- **Visual Feedback** - Background changes to pink when you unlock the multiplier
- **Restart Functionality** - Reset your progress and start fresh
- **Smooth Animations** - Cookie scales down when clicked for tactile feedback

## 🚀 Getting Started

### Prerequisites

No dependencies required! Just a modern web browser.

### Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/cookie-clicker.git
   cd cookie-clicker
   ```

2. **Open the game**
   - Simply open `cookie.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Start clicking!**
   - Click the cookie to earn points
   - Reach 25 cookies to unlock the 2x button
   - Use the 2x button to double your score
   - Click restart anytime to reset

## 📁 Project Structure

```
cookie-clicker/
├── cookie.html      # Main HTML file
├── cokie.js         # Game logic and event handlers
├── cookie.css       # Styling and animations
├── chocchip.png     # Cookie image asset
└── README.md        # This file
```

## 🎯 How to Play

1. **Click the Cookie** - Each click adds 1 to your cookie count
2. **Reach 25 Cookies** - The 2x button will appear and the background turns pink
3. **Use 2x Multiplier** - Click the 2x button to double your current cookie count
4. **Restart** - Click the restart button to reset your score and start over

## 🛠️ Technologies Used

- **HTML5** - Structure and layout
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6+)** - Game logic and interactivity

## 🎨 Features Breakdown

### Cookie Clicking
- Increments cookie count by 1 per click
- Visual feedback with scale animation on click

### 2x Multiplier
- Unlocks at 25 cookies
- Doubles your current cookie count
- Background changes to pink when unlocked

### Restart Button
- Resets cookie count to 0
- Hides the 2x button
- Resets background to white

## 🔧 Customization

### Change Cookie Image
Replace `chocchip.png` with your own cookie image (recommended size: 150x150px or larger)

### Adjust Unlock Threshold
In `cokie.js`, change the unlock threshold:
```javascript
if (cookies >= 25) {  // Change 25 to your desired number
```

### Modify Multiplier
Change the multiplier value:
```javascript
cookies = cookies * 2;  // Change 2 to your desired multiplier
```

### Customize Colors
Edit `cookie.css` to change:
- Background color
- Button colors
- Container styling

## 📝 Future Enhancements

Potential features to add:
- Save/Load functionality (localStorage)
- Auto-clickers/upgrades
- Achievements system
- Sound effects
- Cookie per second (CPS) counter
- Leaderboard
- Multiple multipliers

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ahmed Mustafa**
- GitHub: [@ahmedmustaf103-dot](https://github.com/ahmedmustaf103-dot)

---

**Enjoy clicking! 🍪**
