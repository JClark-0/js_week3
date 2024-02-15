
/* 
1. Conditions:
See below some code to find the current time and hour using the Date() function.

Create a condition to check if it's the morning, evening, afternoon or night. Use console.log to output an appropriate message.
*/

let current_time = new Date();
let current_hr = current_time.getHours();

if (current_hr > 5 && current_hr <= 11){
    console.log("It's the morning.");
}
else if (current_hr > 12 && current_hr <= 17) {
    console.log("It's the aftertoon.");
}
else if (current_hr > 18 && current_hr <= 21) {
    console.log("It's the evening.");
}
else {
    console.log("It's the night, go to sleep!");
}

/*
2. Loops:
Use the same random dice generator as used in class to generate a number between 1 and 6. Now create a loop that keep rolling until the number generated is more than 3. As soon as you get a number more than three, the loop should end. Output how many times the loop ran before it reached this number. 

Be careful with this - if you create a loop that has no way to end (due to a faulty check), it will easily crash your browser!
*/

let dice = Math.ceil(Math.random() * 6);
let rolls = 1;

 while (dice <= 3){
    dice = Math.ceil(Math.random() * 6);
    console.log('You rolled a ' + dice);
    rolls++;
 }

 console.log('You rolled a ' +  dice + ' in ' + rolls + ' attempt(s)!');


 /*
 3. Loops
Using loops, create a triangular pattern (using console.log statements only for now) like this:
#
##
###
####
*/

let pattern = '#';
let height = 1;

for (let height = 1; height < 30; height++){
    console.log(`${pattern.repeat(height)}`);
}

/*
4. Loops and Conditions:

Using more loops and conditions, create a chess board using # and space ' ' using console.log statements.  You could consider using a loop inside a loop to create the alternative pattern. A chess board  has  8 x 8 = 64 squares.
*/



let board = "";

for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {

        math = (x + y) % 2; 


        if (math == 0) {
        board += ' #';
        }

        else {
        board += '  ';
        }
    }

    board += "\n";
}

console.log(board);
