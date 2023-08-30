function a() {
  console.log("a 1");
  b();
  console.log("a 2");
}

function b() {
  console.log("b 1");
  d();
  console.log("b 2");
}

function d() {
  console.log("d 1");
  console.log("d 2");
}

a();

/*
1 ) called a()
2 ) console:  a 1
3 ) called (b)
4 ) console:  b 1
5 ) called (d)
6 ) console:  d 1
7 ) console:  d 2
8 ) d is finished. so it goes back to b()
9 ) console: b 2
10 ) b is finished. so it goes back to a()
11 ) console: a 2

Here, the order of the function is like so with the arrows
indicating who called who.
d()
^
b()
^
a()

THIS IS A STACK.

*/

// IT FOLLOWS A SEQUENCE. BUT WHEN AN Async function is introduced.

console.log("-------------WITH ASYNC FUNCTION---------------");

// THIS IS CALLED FIRST.
setTimeout(function () {
  console.log("I am not following the stack.");
}, 1000);

// DUE TO THE ASYNC NATURE OF THE ABOVE FUNCTION
// JS MOVED ONTO THIS LINE WHILST THAT FUNCTION IS RUNNING
// IN THE BACKGROUND.
a();
