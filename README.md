# CRUX GAMES SHOP - Game Ecommerce Web App

Welcome to my first React JS project! Using React \* Vite
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This project uses React JS, some CSS to style and basic HTML to create a Single Page Application.

## What's it About?

This Game ecommerce website features several games available to purchase and be able to add to wishlist or add to cart

## Getting Started

1. Clone the Repository:

```bash
git clone https://github.com/emilychewsh/game-ecommerce-website.git
```

2. Navigate to the Project Directory:

```bash
cd game-ecommerce-website
```

3. Run `npm install` to install all dependecies required

4. Run `npm install -g json-server` to install json-server globally

5. To start development, run `npm run dev` and open in Browser
6. Navigate to where db.json file is located:

```bash
cd /src/data
```

7. Run mock-server by running `json-server --watch db.json --port 3000`

8. Refresh the browser and you should see all the games appear

9. Happy browsing!

## How to Navigate the Web App

🎮 #Home Page <br>
This is the default page where all games are displayed.

    * Categories sorted by the genre of games
    * Search bar to look for a specific game
    * 'Add to Cart' button which would reflect on top right cart icon, clicking it will navigate user to My Bag page
    * Heart button which would reflect on top right heart icon, clicking it will navigate user to My Wishlist page
    * Message will show when users try to click Add to Cart button again

<br>

🎮 #Wishlist Page <br>
Displays all games that have been liked.

    * Option to 'unheart' to remove game
    * Option to Add to Cart

<br>

🎮 #Bag Page <br>
Displays games that have been added to Cart.

    * Option to delete games from cart
    * Display total price
    * Checkout button when clicked will show message

<br>

## Credits/Big Shoutout to:

Background image is sourced from [FreePik](https://www.freepik.com/free-vector/gradient-white-monochrome-background_15441897.htm)

## A Quick GIF Demo of Crux Games Shop!

## Contribution Guidelines

If you would like to contribute to the project development:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

Feel free to adjust any details or formatting to better suit your project and preferences!
