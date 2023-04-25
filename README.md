# Blocking vs Non-Blocking

This repository contains code to demonstrate the difference between blocking and non-blocking code in JavaScript, as well as an example of how to use web workers to run a function asynchronously.

## Usage

To use this code, simply download the repository and open the `index.html` file in your web browser. You can click on the various buttons on the page to see the difference between blocking and non-blocking code.

### Files

* `index.html` - the main HTML file for the demo
* `style.css` - the CSS file for styling the HTML
* `nonBlocking.js` - a JavaScript file containing a Fibonacci function that runs in a separate thread
* `blocking.js` - a JavaScript file containing a Fibonacci function that runs in the main thread
* `changeColor.js` - a JavaScript file containing code to change the color of a div when a button is clicked
* `getJoke.js` - a JavaScript file containing code to fetch a joke from an API when a button is clicked

## Explanation

The purpose of this code is to demonstrate the difference between blocking and non-blocking code in JavaScript, and to show an example of how to use web workers to run a function asynchronously without causing any problems. By running the Fibonacci function in a separate thread using a web worker, the page remains responsive and does not freeze, even for large Fibonacci numbers. While the browser is calculating, Fibonacci try to change the colour or get a joke.

*If you found something inaccurate or not explained well, please let me know.*