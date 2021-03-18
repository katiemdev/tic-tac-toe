# Tic-tac-toe
A simple Tic-tac-toe game built using HTML, CSS, and vanilla JS. 

**Link to project:** https://katiemdev.github.io/tic-tac-toe/.

![tic-tac-toe-screenshot](/img/ttt.png)

## How It's Made: 

**Tech used:** HTML, CSS and Javascript

The main purpose of building this was to work on my Javascript skills, particularly with manipulating the DOM. The main challenge was figuring out how to detect wins and draws, using clean, non-repetitive code. I started with multiple if-else statements, and eventually I shortened it down to a simple loop. 

## Optimizations
By grouping each winning combination into an array of arrays, I was able to loop through each combination and check for wins using the Array.every() method. This allowed me to eliminate the long, repeptive conditional and made the code much cleaner.

## Lessons Learned:
I learned about evt.target, which made it much easier to target paricular elements of the DOM. I also became more comfortable with the use of javascript objects, array methods, and event listeners.
