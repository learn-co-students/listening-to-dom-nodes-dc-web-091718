// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    return e.preventDefault()
  } else {
    console.log(e.which)
  }
});

// let divs = document.querySelectorAll('div');
//
// function bubble(e) {
//   // remember all of those fancy DOM node properties?
//   // we're making use of them to get the number
//   // in each div here!
//   //
//   // for now, know that this refers to the div that
//   // is triggering the current event handler.
//   console.log(this.firstChild.nodeValue.trim() + ` bubbled ${this}`);
// }
//
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener('click', bubble);
// }
//
// let listItems = document.querySelectorAll('li');
//
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].addEventListener('click', bubble);
// }

// divs = document.querySelectorAll('div');
//
// function capture(e) {
//   console.log(this.firstChild.nodeValue.trim() + ' captured');
// }
//
// for (let i = 0; i < divs.length; i++) {
//   // set the third argument to `true`!
//   divs[i].addEventListener('click', capture, true);
// }


const divs = document.querySelectorAll('div');

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
