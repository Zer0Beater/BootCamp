// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const productInput = document.querySelector('#product')
const quantityInput = document.querySelector('#qty')
const ul = document.querySelector('#list')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let product = productInput.value;
    let quantity = quantityInput.value;
    const newLi = document.createElement('li');
    newLi.innerText = quantity + product;
    ul.appendChild(newLi);
    form.reset();
});

/*
Form Events Exercise

Time to get some practice working with forms and form events! index.html already has a form element that contains two <input> elements, one for quantity and one for a product name.  index.html also contains an empty <ul> where you will append new <li>'s.  Watch the gif at the bottom for an overview of how your code should work. Your task is to follow these steps:

    Listen for the form submission

    When the form is submitted, prevent the default behavior

    Grab the quantity input value and the product input value

    Create a new <li> element.  Set the text on the new <li> to include the quantity and product name from the form.

    Append the new <li> to the <ul> on the page

    Reset the inputs

Please note:
The form will need to be assigned to a variable named form for the test to pass, I've already included this line of code for you in the app.js code.
*/
