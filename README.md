# classic-arcade-game
A browser-based classic arcade game, done as a part of Udacity's Front End Web Developer Nanodegree.

![alt text](https://github.com/riyadashoriya/classic-arcade-game/blob/master/ArcadeGameUi.png "Game Preview")


In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset, score is set to 0 and the player moves back to the start square. Once the player reaches the water the game is won and score is updated.


### Content:
* index.html - This file contains html code to render the content on web browser.
* css/style.css - This file has all the css content which is used to customize the memory game.
* images/ - This folder contains all the images used in the game.
* js/app.js - This file has all the javascript content which is used to provide the functionality of classic arcade game (moving of player and enemy, collision detection, updating scores).
* js/engine.js -  * This file provides the game loop functionality (update entities and render), draws the initial game board on the screen, and then calls the update and render methods on your player and enemy objects (defined in your app.js).
* js/resources.js - This is simply an image loading utility. It eases the process of loading image files so that they can be used within your game. It also includes a simple "caching" layer so it will reuse cached images if you attempt to load the same image multiple times.


### Working:
Run the index.html file to check the game on web browser.


### Licence:
This project is done for Udacity.
