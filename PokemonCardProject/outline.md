Here's a step-by-step guide to create a Pokémon-themed project where you can practice the concepts we discussed. In this project, you’ll dynamically render Pokémon images and details that change based on user interactions. This project will allow you to practice array/object destructuring, the spread/rest operators, and DOM manipulation. Let’s get started!

---

### Project Overview

Create a single HTML page that displays a Pokémon card. This card will feature an image and information about the selected Pokémon. The user will cycle through the Pokémon with a button, and the card’s background will change to match the Pokémon’s theme.

---

### Step-by-Step Instructions

---

#### Step 1: Basic HTML Structure

1. **Create an HTML File**: Set up a basic HTML file structure with a `<head>`, `<body>`, and `<script>` sections.
2. **Add a Container**: Inside the body, create a `<div>` that will serve as the Pokémon card container.
   - **Hint**: Give this container a class, like `pokemon-card`, to style and dynamically update later.
3. **Placeholders**: Inside the container, add an empty `<img>` tag for the Pokémon image and placeholders for the Pokémon name, type, and description.
   - **Hint**: Use `<p>` tags or `<div>` elements with specific IDs for each detail (e.g., `pokemon-name`, `pokemon-type`, `pokemon-description`).

#### Step 2: JavaScript Data Structure

1. **Define Pokémon Data**: Create a `pokemonData` array in JavaScript. This array should contain four Pokémon objects, each with the following properties:
   - `name`: The Pokémon’s name.
   - `type`: The primary type of the Pokémon.
   - `image`: A URL or relative path to the Pokémon’s image.
   - `description`: A short description of each Pokémon.
   - `color`: A hex code or color name that represents the Pokémon’s theme color.
   - **Hint**: Use array/object destructuring to access and update these properties dynamically later.

#### Step 3: Basic Styling with CSS

1. **Style the Card Container**: Create a CSS file and link it to your HTML file. Style the Pokémon card container to look like a card (border, shadow, padding, etc.).
2. **Create Dynamic Classes**: For each Pokémon type (Electric, Fire, Water, Grass), define a class with a unique background color.
   - **Hint**: These colors should correspond to the Pokémon theme colors you’ll dynamically apply to the card.

#### Step 4: Display Initial Pokémon Data

1. **Default Pokémon**: Set a variable (e.g., `currentPokemonIndex`) to track the currently displayed Pokémon, starting with the first one.
2. **Display Pokémon Data**: Write a function, `displayPokemon`, that updates the card’s content with the current Pokémon’s details.
   - Use DOM manipulation methods like `getElementById` or `querySelector` to populate the `img`, `name`, `type`, and `description` fields.
   - **Hint**: Use destructuring to pull properties from `pokemonData[currentPokemonIndex]` and update the elements.

#### Step 5: Add Navigation Button with Event Listener

1. **Next Pokémon Button**: Add a “Next Pokémon” button below the card.
2. **Event Listener**: Attach an `addEventListener` to the button that increments `currentPokemonIndex` each time it’s clicked.
   - **Hint**: Use the remainder operator `%` to reset `currentPokemonIndex` to 0 after the last Pokémon (e.g., `currentPokemonIndex = (currentPokemonIndex + 1) % pokemonData.length`).
3. **Call `displayPokemon()`**: Inside the event listener function, call `displayPokemon()` to update the card with the new Pokémon data.

#### Step 6: Update Card Color Dynamically

1. **Change Background Color**: Inside the `displayPokemon` function, dynamically apply the Pokémon’s theme color to the card’s background.
   - **Hint**: Use `element.style.backgroundColor` to set the `color` property from the current Pokémon’s data.
2. **Extra Customization**: You could also change text colors or add a slight border to enhance the look of each Pokémon card when it changes.

#### Step 7: Testing and Polishing

1. **Test Cycle**: Test clicking the “Next Pokémon” button to verify that each Pokémon’s information, image, and background color are updating as expected.
2. **Polish the Layout**: Make any additional adjustments to the card’s styling to ensure the information is clearly displayed.
3. **Add Transitions**: Optionally, add CSS transitions to the card elements for a smoother experience when switching between Pokémon.

---

### Hints for Additional Features

- **Add a Back Button**: If you want more navigation control, add a “Previous Pokémon” button and decrement `currentPokemonIndex` on click.
- **Randomize Pokémon**: Create a “Random Pokémon” button that sets `currentPokemonIndex` to a random value between 0 and `pokemonData.length - 1`.
- **Animate Color Changes**: Use CSS transitions for smoother color transitions when the Pokémon changes.

---

### Summary

This project will help you apply what you’ve learned about array and object destructuring, dynamic class manipulation, the spread/rest operators, and event listeners, all while building a fun, interactive Pokémon card display. Have fun experimenting with each Pokémon’s unique colors and styles!
