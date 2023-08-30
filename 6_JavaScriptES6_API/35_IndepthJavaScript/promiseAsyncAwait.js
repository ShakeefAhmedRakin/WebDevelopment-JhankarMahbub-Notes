const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  if (num < 5) {
    resolve("Hey the number is less than 5!. So, the promise is resolved");
  } else {
    reject("No data available");
  }
});

// IT IS AN ASYNC FUNCTION
// .THEN => DO SOMETHING AFTER Promise IS RESOLVED
// .CATCH => DO SOMETHING IF Promise IS REJECTED
getData.then((data) => console.log(data)).catch((err) => console.error(err));

// fetch() is an async function and a promise.
/*
1) fetch() is called
2) fetch() returns a promise
3) if promise is resolved then response.json() is called using .then
4) if promise is rejected then an error function is called using .catch
5) if promise for response.json() is resolved then object is returned using .then
6) if promise for response.json() is rejected then an error function is called using .catch
*/

// SIMILAR TO FETCH is the Async/Await. Like so,

// Async function is created.
async function getUsers(url) {
  try {
    // fetch and resp.json() are promise functions. Ultimately, if any one of them is rejected, the data will have an error which will be caught by the .catch
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
