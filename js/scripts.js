
/*
For this assignment, start with an assignment from the previous assignment or one of your decision tree black boxes (or create a new one if you like). For example, generating a triangle/chessboard pattern. 

Now rewrite that code and "refactor" it using functions, adding more flexibility and power to it through the use of parameters and callbacks where appropriate. Go crazy with it!

Then play around by tweaking the arguments so that by changing a few parameters, your function creates something unexpected and unique. Then put them together into a sequence of function calls, creating simple versions of "ASCII Art".
*/

/*
Using loops, create a triangular pattern (using console.log statements only for now) like this:
#
##
###
####


let pattern = '#';
let height = 1;

for (let height = 1; height < 30; height++){
    console.log(`${pattern.repeat(height)}`);
}
*/

/*
Creating a function for triangle generator. 
*/

let water = Math.floor(Math.random() * 50);


if  (water < 7) {
    console.log("You have watered your seed " + water +" times...that is not enough!");
}

else { 
    console.log("You have watered your seed " + water +" times");
    console.log(growTree(water, '#'));
}

function growTree(height = 10, pattern = '#') {

    let space = ' ';
    let treeMaker = ''
    let stumpMaker = ''


    for (let row = 1; row < height; row++) {

        treeMaker += `${space.repeat((height-row)/2)}${pattern.repeat(row)}\n`;
    }

    for (let row = 1; row < height/6; row++) {

        stumpMaker += `${space.repeat(height*3/8)}${pattern.repeat(height/4)}\n`;
        console.log('YOU grew a tree!\n');
    }

    treeMaker += stumpMaker;
    return treeMaker;
}


