# HomeQuest - JS Exercise

This is a fictional web application for a real estate agency where users can navigate through the list of houses using intuitive navigation buttons.

## Methods

### showHouse()

Retrieves the house object from the array of houses based on the `contador` variable and updates the image source to display the house image, and sets the inner HTML of houseInfoElement to include details.

### updateHouse()

Its called when the user wants to view the next house in the list. Increments the `contador` variable by 1 and uses the operator modul `%` ensures that this variable wraps around to the beginnig of the houses array when it reaches the end. Then call `showHouse()`method to render the data.

### previousHouse()

Its called when the user wants to view the previous house in the list. Decrements the `contador`variable by 1 add house lenght ensures that this variable is not a negative number, and again use the operator modul ensures that the `contador` wraps around to the end of the array when it reaches the beginning. Then call `showHouse()`method to render the data.

## Demo

[Click here to try out the web live!](https://homequest-js-exercise.netlify.app/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
