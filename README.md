# React Native Food Ordering App

A React Native food ordering app prototype built with Expo and React Navigation. This project demonstrates restaurant listing, menu navigation, image-based menu display, and basic user interaction.

## Project Overview

This project is a mobile food ordering application prototype developed using React Native. The app allows users to browse restaurant options, view restaurant details, navigate to menu sections, and select menu items.

The project focuses on mobile interface design, screen navigation, component-based development, image handling, and interactive user experience.

## Tech Stack

- React Native
- Expo
- JavaScript
- React Navigation
- React Native TableView Simple

## Key Features

- Restaurant listing screen
- Restaurant image display
- Estimated delivery time display
- Menu category sections
- Food item images and ratings
- Navigation between restaurant and menu screens
- Alert message when a menu item is selected
- Mobile-friendly interface design

## Project Structure

```text
react-native-food-ordering-app/
├── App.js
├── assets/
│   ├── CrisCafe.jpg
│   ├── Crisdiner.jpg
│   ├── tiramisu.jpg
│   ├── special.jpg
│   ├── vanilla.jpg
│   ├── chocolate.jpg
│   ├── espresso.jpg
│   ├── latte.jpg
│   ├── margherita.jpg
│   ├── pepperoni.jpg
│   ├── beefburger.jpg
│   ├── chickenburger.jpg
│   ├── carbonara.jpg
│   └── aglioolio.jpg
└── README.md
```

## Main Screens

- `Restaurants Screen`  
  Displays restaurant cards with restaurant images, tagline, and estimated delivery time.

- `Menu Screen`  
  Shows menu categories, food items, ratings, and item images.

## Main Components and Logic

- `Restaurants`  
  Handles the restaurant listing and navigation to the menu screen.

- `Menu`  
  Receives selected restaurant menu data and displays food items by category.

- `React Navigation Stack`  
  Controls navigation between the restaurant list and menu pages.

- `Alert Interaction`  
  Displays a simple confirmation message when a menu item is selected.

## How to Run

This project requires Node.js, Expo, and a React Native development environment.

1. Create or open an Expo React Native project.

2. Install the required dependencies:

```bash
npm install @react-navigation/native @react-navigation/native-stack react-native-tableview-simple
```

3. Install Expo navigation dependencies if required:

```bash
npx expo install react-native-screens react-native-safe-area-context
```

4. Place `App.js` and the `assets/` folder into the Expo project.

5. Start the project:

```bash
npx expo start
```

6. Run the app using Expo Go or an emulator.

## What I Learned

Through this project, I practised:

- Building mobile apps using React Native
- Creating reusable UI components
- Using React Navigation for screen transitions
- Passing data between screens
- Displaying local image assets
- Handling user interaction with alerts
- Designing mobile-friendly restaurant and menu screens
- Testing the app in an Expo environment

## Possible Improvements

- Add cart functionality
- Add item quantity selection
- Add checkout screen
- Add search and filter features
- Store menu data in a separate file
- Improve styling and responsive layout
- Add user login and order history

## Note

This project was developed as part of my academic mobile development practice and portfolio.
