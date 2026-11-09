const lis = document.querySelectorAll('li');
 
for (let li of lis) {
  li.classList.toggle('highlight');
}
/*
ClassList Practice

In index.html, you'll find 6 <li> elements, two of which have the 'highlight' class applied to them. 

    Please use JavaScript and the classList property to invert which elements have the highlight class. 

    Basically iterate over all the <li> elements and toggle the class of 'highlight' on each one.   Your end result should look like this:

Rendered example of the ClassList Practice exercise after toggling the highlight class: six list items that all say "Hello"; items 1, 3, 4, and 6 have the light blue highlight background, while items 2 and 5 have the purple non-highlight background.

Please don't touch the markup in index.html! Do this all via JavaScript!
*/