const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 resolved successfully.");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise2 was rejected.");
  }, 1500);
});

Promise.all([promise1, promise2])
  .then((data) => console.log(data[0], data[1]))
  .catch((error) => console.log(error));
