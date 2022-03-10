// this is a comment
// a comment is used to describe what's happening in your code
// or to leave notes for other developers

/*
  I can write a multiline comment
  using /* to open the comment and
  the reverse to close it:
*/

// one line comment uses //
const someBoolean = true;
const someNumber = 123;
const someString = 'Hello, world!';
const anotherString = `I'm not "quoting someone" ${someString}`;
// I'm not "quoting someone" Hello, world!
const today = new Date();

function add(a, b) {
  // a = 1
  // b = 1
  return a + b;
}
const result = add(1, 2);
// const result = 1 + 2
// const result = 3
const result2 = add(3, 4);
// const result2 = 3 + 4
// const result2 = 7

function greet(name) {
  // name = 'Aaron'
  const existingContent = document.getElementById('sandbox').textContent;
  document.getElementById(
    'sandbox'
  ).innerHTML = `${existingContent} Hello, ${name}!`;
}

greet('Dan');
greet('Aaron');
greet('Rachel');

function updateDate() {
  const dateElement = document.getElementById('date');
  dateElement.textContent = `Today's date is ${today.toLocaleDateString()}`;
}

const updateDateButton = document.getElementById('updateButton');
updateDateButton.addEventListener('click', updateDate);
