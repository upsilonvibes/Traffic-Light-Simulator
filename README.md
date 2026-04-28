
# 🚦 Traffic Light Simulator (with Pedestrian Logic)

A functional, interactive traffic light simulation built using **Vanilla JavaScript**, **HTML5**, and **CSS3**. This project demonstrates asynchronous timing loops and user-interruption logic within a clean, responsive UI.

## 🌟 Features

* **Automated Cycle:** Seamlessly transitions between Red, Green, and Yellow phases.
* **Smart Pedestrian Crossing:**
    * **Interrupt Logic:** If the button is pressed while the light is Green, the Green phase is shortened to accelerate the switch to Red.
    * **Walk Signal:** When the light turns Red after a request, a "WALK" indicator activates.
    * **Extended Safety:** The Red light duration is dynamically extended during the "WALK" phase to simulate a safe crossing time.
* **Visual Polish:** Realistic "glow" effects using CSS `box-shadow` and smooth color transitions.
* **Responsive Design:** Centered layout using CSS Flexbox, ensuring it looks great on any screen size.

---

## 📂 Project Structure

```text
├── index.html   # Main structure and layout
├── styles.css   # Styling, animations, and active state glows
└── script.js    # Logic engine and pedestrian state management
```
## 🚀 Getting Started
1. Clone or Download: Save the project files to your local machine.

2. Run: Open index.html in any modern web browser (Chrome, Firefox, Safari, Edge).

3. Interact: Press the "Request Crossing" button and observe how the JavaScript logic adjusts the timing of the lights.

## ⚙️ Technical Deep Dive
1. **The Timing Engine**
The simulator uses a recursive setTimeout pattern rather than setInterval. This is a mechanical necessity because it allows the "duration" of each light to be changed dynamically based on user input.

2. **State Management**
We use a boolean flag, pedestrianRequested, to track the button state.

If true, the logic engine checks the current light ID.

If currentConfig.id === 'green', it overrides the default 3000ms with 1000ms.

If currentConfig.id === 'red', it triggers the UI update for the pedestrian walk signal.

3. **The Modulo Operator**
To keep the light sequence looping indefinitely without complex if/else chains, we use the modulo operator:

 #JavaScript#
 ```
currentIndex = (currentIndex + 1) % lights.length;
This ensures that after the last light (index 2), the index snaps back to 0.
```
## 🎨 Styling Details
The project utilizes a "dim-to-bright" approach. Default light states are dark (#222), and the .active class—added via JavaScript—injects the specific color and a matching box-shadow to simulate a light bulb turning on.

## 📝 License
This project was created for educational purposes. Feel free to use, modify, and distribute it as you see fit.

---

Developed in April 2026