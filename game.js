let code = [];
let remaining = [];
const colors = ['red', 'yellow', 'green', 'blue', 'black'];
let counter = 1;
let counter2 = 1;
let won = false;

class Row {
  constructor() {
    this.turn = false;
    this.spaces = [];
  }
}

// create row instances
const row1 = new Row();
const row2 = new Row();
const row3 = new Row();
const row4 = new Row();
const row5 = new Row();
const row6 = new Row();
const row7 = new Row();
const row8 = new Row();

//generate random colors
for (let i = 0; i < 4; i++) {
  code.push(colors[Math.floor(Math.random() * 5)]);
}

// create copy of code
let code1 = [...code];
console.log(code1);

// show random colors
function bgColor(e, c) {
  document.querySelector(e).style.backgroundColor = c;
  console.log(e, c);
}

// check the row
function checkRow(arr, row, next, prev) {
  // check if answer === code
  if (arr.join("") === code.join("")) {
      won = true;
      let spans = document.querySelectorAll('.code > span');
      spans.forEach(span => {
      span.style.display = 'block';
      });
    document.querySelector('.header').textContent = "You've Cracked the Code";
    document.querySelector('.header').style.color = 'white';
    for (let i = 0; i < arr.length; i++) {
      document.querySelector(`.dots${row} > .one${i + 1}`).style.backgroundColor = 'black';
    }
  } else {
    // check for black pegs
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === code[i]) {
        document.querySelector(`.dots${row} > .one${counter2}`).style.backgroundColor = 'black';
        code1.splice(i, 1, "");
        remaining.push("empty");
        counter2 += 1;
      } else {
        remaining.push(arr[i]);
      }
    }
    //check for white pegs
    for (let i = 0; i < arr.length; i++) {
      if (code1.includes(remaining[i])) {
        code1.splice(code1.indexOf(remaining[i]), 1, "blank");
        document.querySelector(`.dots${row} > .one${counter2}`).style.backgroundColor = 'white';
        counter2 += 1;
      }
    }
    //reset to defaults + switch turns
    counter = 1;
    counter2 = 1;
    next.turn = true;
    prev.turn = false;
    code1 = [...code];
    remaining = [];
  }
}

// add background color of code to the divs
bgColor('.color-one', `${code[0]}`);
bgColor('.color-two', `${code[1]}`);
bgColor('.color-three', `${code[2]}`);
bgColor('.color-four', `${code[3]}`);

//gameplay

//start game
row8.turn = true;

//add picked colors to board and appropriate arrays
document.querySelectorAll('.bottom > span').forEach((item) => {
  item.addEventListener('click', (e) => {
    let clickedItem = e.target;
    if (clickedItem.className !== 'delete' && clickedItem.className !== 'submit') {
      if (row8.turn && row8.spaces.length < 4) {
        row8.spaces.push(clickedItem.className);
        document.querySelector(`.eight-${counter}`).style.backgroundColor = clickedItem.className;
        counter += 1;
      } else if (row7.turn && row7.spaces.length < 4) {
        row7.spaces.push(clickedItem.className);
        document.querySelector(`.seven-${counter}`).style.backgroundColor = clickedItem.className;
        counter += 1;
      } else if (row6.turn && row6.spaces.length < 4) {
        row6.spaces.push(clickedItem.className);
        document.querySelector(`.six-${counter}`).style.backgroundColor = clickedItem.className;
        counter += 1;
      } else if (row5.turn && row5.spaces.length < 4) {
        row5.spaces.push(clickedItem.className);
        document.querySelector(`.five-${counter}`).style.backgroundColor = clickedItem.className;
        counter += 1;
      } else if (row4.turn && row4.spaces.length < 4) {
        row4.spaces.push(clickedItem.className);
        document.querySelector(`.four-${counter}`).style.backgroundColor = clickedItem.className;
        counter += 1;
      } else if (row3.turn && row3.spaces.length < 4) {
        row3.spaces.push(clickedItem.className);
        document.querySelector(`.three-${counter}`).style.backgroundColor = clickedItem.className;
        counter += 1;
      } else if (row2.turn && row2.spaces.length < 4) {
        row2.spaces.push(clickedItem.className);
        document.querySelector(`.two-${counter}`).style.backgroundColor = clickedItem.className;
        counter += 1;
      } else if (row1.turn && row1.spaces.length < 4) {
        row1.spaces.push(clickedItem.className);
        document.querySelector(`.one-${counter}`).style.backgroundColor = clickedItem.className;
        counter += 1;
      }
    }
  });
});

// remove color from board and appropriate arrays
document.querySelector('.delete').addEventListener('click', () => {
  if (won === false) {
    if (row8.turn && counter > 1) {
      row8.spaces.pop();
      counter -= 1;
      document.querySelector(`.eight-${counter}`).style.backgroundColor = '#CECECE';
    } else if (row7.turn && counter > 1) {
      row7.spaces.pop();
      counter -= 1;
      document.querySelector(`.seven-${counter}`).style.backgroundColor = '#CECECE';
    } else if (row6.turn && counter > 1) {
      row6.spaces.pop();
      counter -= 1;
      document.querySelector(`.six-${counter}`).style.backgroundColor = '#CECECE';
    } else if (row5.turn && counter > 1) {
      row5.spaces.pop();
      counter -= 1;
      document.querySelector(`.five-${counter}`).style.backgroundColor = '#CECECE';
    } else if (row4.turn && counter > 1) {
      row4.spaces.pop();
      counter -= 1;
      document.querySelector(`.four-${counter}`).style.backgroundColor = '#CECECE';
    } else if (row3.turn && counter > 1) {
      row3.spaces.pop();
      counter -= 1;
      document.querySelector(`.three-${counter}`).style.backgroundColor = '#CECECE';
    } else if (row2.turn && counter > 1) {
      row2.spaces.pop();
      counter -= 1;
      document.querySelector(`.two-${counter}`).style.backgroundColor = '#CECECE';
    } else if (row1.turn && counter > 1) {
      row1.spaces.pop();
      counter -= 1;
      document.querySelector(`.one-${counter}`).style.backgroundColor = '#CECECE';
    }
  }
});

// initate check function to compare row to codes
document.querySelector('.submit').addEventListener('click', () => {
  if (row8.turn && row8.spaces.length === 4) {
    checkRow(row8.spaces, 8, row7, row8);
  } else if (row7.turn && row7.spaces.length === 4) {
    checkRow(row7.spaces, 7, row6, row7);
  } else if (row6.turn && row6.spaces.length === 4) {
    checkRow(row6.spaces, 6, row5, row6);
  } else if (row5.turn && row5.spaces.length === 4) {
    checkRow(row5.spaces, 5, row4, row5);
  } else if (row4.turn && row4.spaces.length === 4) {
    checkRow(row4.spaces, 4, row3, row4);
  } else if (row3.turn && row3.spaces.length === 4) {
    checkRow(row3.spaces, 3, row2, row3);
  } else if (row2.turn && row2.spaces.length === 4) {
    checkRow(row2.spaces, 2, row1, row2);
  } else if (row1.turn && row1.spaces.length === 4) {
    checkRow(row1.spaces, 1, "", row1);
    if (won === false) {
      let spans = document.querySelectorAll('.code > span');
      spans.forEach((span) => {
        span.style.display = 'block';
      });
      document.querySelector('.header').textContent = "Failed";
      document.querySelector('.header').style.color = 'red';
    }
  }
});