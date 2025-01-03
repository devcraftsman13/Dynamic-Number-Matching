# Dynamic Number Matching Game

This is a dynamic number matching game built using **React**, **TailwindCSS**, and **Context API** to manage the state of the maximum number (`maxNumber`). The game allows users to select a number, and the game board will generate cards based on the selected number. The goal is to match pairs of cards with the same number.


## Features:
- User inputs a number, and the game generates matching pairs of cards.
- Cards are shuffled and displayed face-down.
- The user attempts to match pairs of cards by selecting them.
- The game shows the number of turns and allows the user to reset the game at any time.
- Animations for zooming in on hover and disappearing cards.

## Technologies Used:
- **React 18**
- **TailwindCSS**
- **React Context API**

## Prerequisites

Before getting started, ensure that you have the following installed:

- **Node.js** (v20.18.0)
- **npm** or **yarn**

## Setup and Installation

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository
Start by cloning the repository to your local machine:

```bash
https://github.com/devcraftsman13/Dynamic-Number-Matching.git
```

### 2. Navigate to the Project Directory
Go to the project folder:

```bash
cd dynamic-number-matching-game
```

### 3. Install Dependencies
Install the required dependencies using npm (or yarn, if preferred):

```bash
npm install
```

### 4. Set Up TailwindCSS
If you don't have **TailwindCSS** set up already, you can follow these steps to integrate it into your React project:

- Create a tailwind.config.js file:
```js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- In your src/index.css (or a similar global CSS file), add the following TailwindCSS directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Add TailwindCSS vis PostCSS

Install the necessary dependencies for PostCSS with Tailwind:
```bash
npm install -D tailwindcss postcss autoprefixer
```

Make sure that your postcss.config.js looks like this:
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 6. Running the Development Server

Once everything is set up, you can run the development server to view the game:

```bash
npm run dev
```
This will start the development server and open the game in your default browser at http://localhost:5173.
