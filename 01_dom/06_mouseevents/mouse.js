// ====================================
// Mouse Events
// ====================================

// const clearLink = document.querySelector('.clear-tasks');
// const entireList = document.querySelector('.the-parent');
// const heading = document.querySelector('h1#task-title');

// // create a click event
// /*
// When ```click``` happens, run the ```runEvent``` function.
// */
// clearLink.addEventListener('click', runEvent);

// // create an event handler
// /*
// The runEvent is going to take in one parameter, the event object.
// */
// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);
// }

// Other Mouse Events

const clearLink = document.querySelector('.clear-tasks');
const entireList = document.querySelector('.the-parent');
const heading = document.querySelector('h1#task-title');

// // click
// clearLink.addEventListener('click', runEvent);

// // doubleclick
// clearLink.addEventListener('dbclick', runEvent);

// // mouse down (holding key down fires it)
// clearLink.addEventListener('mousedown', runEvent);

// // click
// clearLink.addEventListener('click', runEvent);

// // doubleclick
// clearLink.addEventListener('dbclick', runEvent);

// // mouse up (holding key up fires it)
// clearLink.addEventListener('mouseup', runEvent);

// // mouse enter (fires when drag into parent element)
// clearLink.addEventListener('mouseenter', runEvent);

// // mouse leave (fires when drag out of parent element)
// clearLink.addEventListener('mouseleave', runEvent);

// // mouse over (fires when drag into it)
// clearLink.addEventListener('mouseover', runEvent);

// // mouse out (fires when inside the element)
// clearLink.addEventListener('mouseout', runEvent);

// // mouse out (fires when outside the element)
// clearLink.addEventListener('mouseout', runEvent);

// mouse move (any movement inside that element)
/*
Useful when it comes to games like if you want to know where your characters are moving around, anything interactive. Let's try getting the heading and changing the coordinates as we move the mouse. 
*/

// entireList.addEventListener('mousemove', runEvent);


// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);

//   heading.textContent = `<MouseX: ${e.offsetX} MouseY: ${e.offsetY}>`;
// }

/*
```rgb()``` value represent Red, Green, Blue - it takes in three parameters and each can be a value from 0-255. You'll get different variations depending on those numbers.

In this example, take the ```offestX``` and ```offsetY``` from the event object, and use those as parameters
*/

entireList.addEventListener('mousemove', runEvent);

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  heading.textContent = `<MouseX: ${e.offsetX} MouseY: ${e.offsetY}>`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`;
}