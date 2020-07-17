# Mike clicker

 [Mike clicker](https://phuongdattran.github.io/cookie-clicker/) 


## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [Documentation](#Documentation)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Creators](#creators)
- [Thanks](#thanks)
- [Workflow](#workflow)
- [Copyright and license](#copyright-and-license)


## Quick start

Step 1: base structure

Write the base structure for the project in HTML, CSS and JavaScript. Within the HTML, put a click button which will increment a counter and a label initialised at 0 to display said counter.

Step 2: prepare the JavaScript

In your JavaScript prepare variables to allow you to control your button and label. You will also need a variable to keep track of the score.

Step 3: increase the score

When you click the button, increase the variable storing the score by 1, then display the current score inside the label.

Step 4: make a multiplier

Add another button which will act as a multiplier. When called this button will permanently multiply the number of points per click, by two for example.

Step 5: price of multiplier

The multiplier allows you to have a big score quickly, that shouldn’t be free, it should be a purchase made with the current player score.

Step 6: no credit

You can’t make credit, meaning that the player cannot have a negative score. Think about updating the score display after a purchase.

Step 7: display multiplier counter

Display the counter within the multiplier. For example, if the counter is worth 5, then the button should display something like multiplier x5.

Step 8: increase the cost

Buying a lot of multiplier is way too easy. For more fun, make it so that each time a multiplier is purchased the cost of buying a new one is increased.

Step 9: display the cost

In the text of the multiplier button you should also have the price of the upgrade.

Step 10: auto-clicker

Implement a new improvement to buy, the auto-click. As the name might suggest this bonus will automatically add a click to your score each x seconds.

Step 11: bonus

Implement yet another improvement to buy, the bonus. It should grant the player a boost in score of 200% per click for 30 seconds. When purchased the player should see a timer with the remaining time inside the bonus button.

Step 12: deactivate the buttons

Make it so that, if the player doesn’t have the points to purchase a multiplier, an auto-click or an other bonus, he can’t.


## Workflow

First, we had a small talk to discuss who's gonna do what. We agreed that Phuong would be project supervisor. 
Melissa did the CSS and the HTML part and Phuong focused on the Javascript. It took a lot of time to debug but in the end we managed to do almost everything that we wanted to. Bastien did a bit of CSS and a bit of Javascript as well as the README. 
Also, Melissa did the order and comments of the CSS. Finally, Bastien did the SEO and fixed minor bugs in the CSS. 
Phuong did not know how to use a function with an eventListener as parametre : one function wich called the original function. 


## Status

The project is done but we are always open to any kind of suggestions to improve it. 

## Documentation

[Documentation MDN related to Javascript ](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Documentation W3C retalted to Javascript](https://www.w3schools.com/js/)

[Link towards the assignment](https://github.com/becodeorg/BXL-Swartz-3-21/blob/master/05-Javascript/cookieClicker.md)

## Bugs and feature requests

We encountered several small issues regarding the JS part, such as : a logical problem when we were trying to implement the counting of the score : we were using a condition but the score was still going negative while it should not have. We solved another problem by : putting parameters in a function with the add event listener

For the CSS part everything was running smoothly exept maybe for some parts such as the centering of the "cookie". 

## Contributing

feel free

## Creators

[Melissa Fruit](https://github.com/Melissa-Fruit)

[Phuong Dat Tran ](https://github.com/phuongdattran)

[Bastien Deresteau](https://github.com/loonyT)

## Thanks

Thanks to [Ismaestro](https://github.com/Ismaestro) for the README template. 


## Copyright and license

 Code released under the MIT License.


