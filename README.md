# 🎮 Simon Memory Game

A sleek, modern implementation of the classic **Simon Memory Game** built using pure HTML5, CSS3, and Vanilla JavaScript.

Unlike standard Simon games that replay the full pattern every round, this version features a **Single-Flash Memory Challenge** — only *one* new tile blinks per level, testing your ability to recall and repeat the entire accumulated sequence purely from memory!

---

## 🚀 Live Demo

👉 **Play the game live:** [https://himanshujangid676.github.io/simongame/](https://himanshujangid676.github.io/simongame/)

---

## ✨ Features

* 🧠 **Single-Flash Memory Mode:** Only the newest tile blinks each round. You must remember the full sequence from Level 1.
* 🏆 **High Score Tracker:** Automatically tracks and displays your highest score during the session.
* 🎨 **Modern Dark UI:** Glassmorphism dashboard, neon tile glow animations, and active state feedback.
* 📱 **Responsive & Mobile Friendly:** Fully playable via touch, mouse clicks, or keyboard (`Enter` / `Space`).
* ⚡ **Zero Dependencies:** Pure vanilla web technologies for instant loading and lightweight performance.

---

## 🎮 How to Play

1. Tap **START** (or press `Enter` / `Space`) to start the game.
2. Watch closely as **a single tile blinks**.
3. Repeat the full sequence from memory by tapping the tiles in the exact order.
4. Each level adds one new tile to the sequence.
5. One wrong tap ends the game!

---

## 🛠️ Tech Stack

* **HTML5:** Semantic markup & structure
* **CSS3:** Flexbox, CSS Grid, custom properties, neon glow shadows, and keyframe animations
* **JavaScript (ES6+):** Game state management, sequence verification, and dynamic DOM interaction

---

## 📁 File Structure

```text
├── index.html    # Structure & layout
├── style.css     # Dark aesthetic, neon flashes & responsive layout
└── app.js        # Memory logic, input locking & score tracking
