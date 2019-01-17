/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let lineCharCount = 1;
  let sliceNum = 1;
  switch(shape) {
    case 'Square':
      for(let i = 0; i < height; i++) {
        let line = [];
        for(let j = 0; j < height; j++) {
          line.push(character);
        }
        console.log(line.join(''));
      }
      break;
    case 'Triangle':
      for(let i = 0; i < height; i++) { 
        let line = [];
        for(let j = lineCharCount; j > 0; j--) {
          line.push(character);
        }
        console.log(line.join(''));
        ++lineCharCount;
      }
      break;
    case 'Diamond':
      createDiamond(height, character);
      break;
  }
}

function  createDiamond(height, char) {
  let halfHeight = Math.ceil(height / 2);
  let counter = 1;
  let padding = '';
  let charLine = '';
  let fullLine = '';
  let rightHalf = '';

  while(counter <= halfHeight) {

    //Loop for the right amount of spaces
    for(let i = halfHeight; i > counter; i--) {
      padding += ' ';
    }

    //Loop for the right amount of chars
    for(let j = 0; j < counter; j++) {
      charLine += char;
    }

    for(let k = 0; k < counter -1; k++ ) {
      charLine += char;
    }

    fullLine = padding + charLine;
    console.log(fullLine);

    //Reset variables for next loop
    fullLine = padding = charLine = '';
    ++counter;
  }
  
  fullLine = padding = charLine = '';
  counter -= 2;
  while(counter >= 1) {

    //Loop for the right amount of spaces
    for(let i = halfHeight; i > counter; i--) {
      padding += ' ';
    }

    //Loop for the right amount of chars
    for(let j = 0; j < counter; j++) {
      charLine += char;
    }

    for(let k = 0; k < counter - 1; k++ ) {
      charLine += char;
    }

    fullLine = padding + charLine;
    console.log(fullLine);

    //Reset variables for next loop
    fullLine = padding = charLine = '';
    --counter;
  }
  
}

printShape('Square', 5, '*');
printShape('Triangle', 5, '$');
printShape('Diamond', 25, '*');