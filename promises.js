let promise = new Promise(function (resolve, reject) {
  const x = 10;
  const y = 10;
  if (x == y) {
    resolve();
  } else {
    reject();
  }
});
