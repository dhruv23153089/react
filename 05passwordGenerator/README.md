# React + Vite Password Generator

A simple, fast, and customizable **Password Generator App** built using **React** and **Vite**.  
Users can easily generate strong passwords with adjustable length, and options to include **numbers**, **symbols**, and **uppercase letters**.  
You can also **copy the password** instantly with a single click.

---

# Features

- 🎚️ **Adjustable Password Length** — Choose password length dynamically with a range slider.  
- 🔢 **Include Numbers** — Toggle to include or exclude numeric characters.  
- 🔣 **Include Symbols** — Add special characters for stronger passwords.  
- 🔡 **Include Uppercase Letters** — Optional uppercase letters for more variation.  
- 📋 **Copy to Clipboard** — Quickly copy the generated password.  
- ⚡ **Built with Vite** for lightning-fast development and bundling.  
- 🪝 Uses modern **React Hooks** (`useCallback`, `useRef`, `useEffect`).

---

# Hooks Used

## `useState`
- Stores app states: password length, include options, and the generated password.

## `useCallback`
- Used for **generating passwords** and **copying to clipboard** efficiently.  
- Prevents unnecessary re-rendering.

## `useRef`
- Provides direct access to the input field for copying the password.

## `useEffect`
- Regenerates the password automatically whenever customization options change.

---

## 🧩 Tech Stack

- ⚛️ **React**  
- ⚡ **Vite**  
- 🎨 **Tailwind CSS** (for UI styling, optional)  
- 🧵 **React Hooks**

