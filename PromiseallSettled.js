const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject("Error!");

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log("Results:", results);
});
