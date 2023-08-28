// --------------------CLOSURE-------------------------
/*
An inner function accessing variables/contents of his outer function
is called "CLOSURE". 
Encapsulation is a way to restrict the direct access to some components of an object, 
so users or other variables cannot access state values for all of the variables of a particular object.
*/
const kitchen = () => {
  let roast = 0;
  return function () {
    roast++;
    return roast;
  };
};

// ENCAPSULATION
const firstServer = kitchen();
const secondServer = kitchen();

console.log("First Server: ",firstServer(), firstServer(), firstServer(), firstServer());
console.log("Second Server: ",secondServer(), secondServer(), secondServer());
console.log("---------------------------------------------");
// --------------------ENCAPSULATION-------------------------
