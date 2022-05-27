# JavaScript Calculator Project

## Project Description
This project was focused on vanilla JavaScript which was used to create a calculator web application.

## Purpose
The purpose behind this project was to continue putting my javascript knowledge to the test. This is my second project focused on tackling common beginner JavaScript focused projects. Also, I went into this project not wanting to look up any existing projects that have done this project before and I was successful in finishing the application all by myself!

## Challenges encountered
These are the main challenges that I encountered throughout this project:
1. The first obstacle was to determine how to approach all of the buttons on a calculator. This ended up being done by grabbing all of the button elements using 'document.querySelectorAll('.calculator-button');' and then user the forEach() array function to determine which button is clicked based on the element having the class of '.calculator-button'.
2. The next challenge that took the longest for me to figure out was finding the best way to keep track of what button was pressed last and then doing an action based on that button that was pressed last. I ended up scrapping a few ideas which added a bit of time but eventually landed on the idea of having a string that updates every time a button is pressed. It is then used as an check when the next button is pressed.
3. Another challenge that came about was updating what was being displayed at the correct time. At many times, I was having an issue where the display ended up displaying '0' when it should not be due to setting the display incorrectly to blank on certain clicks. The solution to this was refactoring and constantly tracking the last button pressed so that the program knows when to set the display back to 0 and then update it accordingly after it was cleared.

## Concepts Learned and Practiced
1. JavaScript forEach() function on an array created from document.querySelectorAll().
2. More Event Listener Practice.
3. Working on cutting down on repetative JavaScript Code.
4. Working through JavaScript structure and logic.
5. Over coming difficult hurdles and issues that came about throughout this project.

## Credit to Fontawesome for providing icons
Credit to [Fontawesome](https://fontawesome.com/) for providing the icons that I used for my github and linkedin social links.

## Possible Continuations on this Project.
Eventually, I would like to come back to this project and display warning messages to alert when a user is doing an invalid button press. I may also visit revisiting the styling of the calculator but the purpose for this project was to focus on the JavaScript so I am happy with the final prodcut at the moment. Lastly, I may add more buttons to the calculator later down the road (i.e. square root, to the power of, etc.).
