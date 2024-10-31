Here are some practice problems to help you build your Pokémon page, styled with cards and populated using the data from `pokemonData`. I'll break down the problems step by step.

### **Practice Problems to Style the Page**

1. **Create a container for Pokémon cards:**

   - **Task:** Create a `div` that will act as a container for all your Pokémon cards. This container will hold the cards side by side.
   - **Challenge:** Use CSS to make sure all the Pokémon cards are displayed in a grid or flexbox layout, so they appear neatly organized.

   **Questions:**

   - How can you create a container using a `<div>`?
   - How would you use `display: grid` or `display: flex` in CSS to organize the cards inside the container?

   **Tip:**

   - Use `grid-template-columns` in CSS for a grid layout or `flex-wrap` for a flex layout.

2. **Create a Pokémon card layout:**

   - **Task:** Each Pokémon card should display a Pokémon’s name, type(s), and nature. Create a card using HTML and CSS to style each Pokémon’s information.
   - **Challenge:** Style the card with borders, padding, and background colors to make it look like a card.

   **Questions:**

   - How would you make the card visually stand out (e.g., using borders or shadows)?
   - How can you add space around the Pokémon’s name, type, and nature?

   **Tip:**

   - Use `border` and `box-shadow` for the card effect, and use `margin` and `padding` to add space around the card elements.

3. **Display Pokémon type as a badge:**

   - **Task:** For each Pokémon, display its types as badges or labels (for example, a “Grass” badge and a “Poison” badge for Bulbasaur).
   - **Challenge:** Use CSS to create a small, colored badge for each type and position it below the Pokémon’s name.

   **Questions:**

   - How can you make each type a different color?
   - How can you style the badge to look small and rounded?

   **Tip:**

   - Use `background-color` to style the badges with different colors and `border-radius` to make them rounded.

---

### **Practice Problems to Populate Data from `pokemonData`**

1. **Display all Pokémon on the page:**

   - **Task:** Use JavaScript to loop through the `pokemonData` array and create a card for each Pokémon. Insert these cards into the container created earlier.
   - **Challenge:** Create the HTML structure for each card dynamically inside JavaScript.

   **Questions:**

   - How can you use JavaScript to loop through each Pokémon in the `pokemonData` array?
   - How can you use `document.createElement()` to create new HTML elements for each card?

   **Tip:**

   - Use a loop like `forEach` to go through each Pokémon and insert the card into the container using `appendChild()`.

2. **Display Pokémon moves on each card:**

   - **Task:** Show the moves for each Pokémon on its card. Each move can be displayed as a list under the Pokémon’s name.
   - **Challenge:** Add the moves in an unordered list (`<ul>`) inside each Pokémon card.

   **Questions:**

   - How can you access each Pokémon’s moves from the `pokemonData` array?
   - How would you use a nested loop to display each move in a `<li>` (list item)?

   **Tip:**

   - Use `pokemon.moves.forEach()` to loop through each move and add it to the card.

---

### **Practice Problems to Group Pokémon by Type or Letter**

1. **Group Pokémon by type:**

   - **Task:** Create buttons for each type of Pokémon (like Grass, Fire, Water). When a user clicks the button, only show Pokémon of that type.
   - **Challenge:** Use `filter()` in JavaScript to filter the Pokémon data based on the type and then display only the matching Pokémon cards.

   **Questions:**

   - How can you filter the `pokemonData` array to get only Pokémon with a specific type?
   - How would you remove the existing cards from the page before adding the filtered ones?

   **Tip:**

   - Use `pokemonData.filter(pokemon => pokemon.type.includes('Fire'))` to get all Fire-type Pokémon.

2. **Group Pokémon by the first letter of their name:**

   - **Task:** Add buttons for each letter of the alphabet. When the user clicks on a letter, show only the Pokémon whose name starts with that letter (for example, "B" for Bulbasaur, Butterfree, etc.).
   - **Challenge:** Use `filter()` again to filter by the first letter of each Pokémon’s name.

   **Questions:**

   - How can you use `pokemon.name.charAt(0)` to get the first letter of a Pokémon’s name?
   - How can you dynamically create buttons for each letter (A-Z) and add event listeners to them?

   **Tip:**

   - Use `toUpperCase()` to match the letter regardless of case.

3. **Show Pokémon by multiple types:**

   - **Task:** Allow users to select multiple types (for example, Grass and Poison), and display Pokémon that match both types.
   - **Challenge:** Update your filtering logic to allow for multiple type selections.

   **Questions:**

   - How can you check if a Pokémon has all the types selected by the user?
   - How would you combine multiple type filters in your JavaScript logic?

   **Tip:**

   - Use `pokemon.type.every()` to check if a Pokémon has all the types the user selected.

---

These practice problems should help you improve your skills in building and styling the page, using JavaScript to display data, and filtering Pokémon by various criteria. If you work on each problem step by step, you'll be able to build a dynamic and interactive Pokémon page!
