/* Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. 
If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75. */

const randomGame = () => {
    let num = Math.round();
    let count = 0;
    let counter = setInterval(function() {
        count++
        if(counter > .75) {
            clearInterval(counter);
            console.log("Number of tries: " + count);
        }
    }, 1000);
}