function printInfo(name, callback) {
  setTimeout(function () {
    console.log("Printing infor for" + name);
    callback("Please this may take a while!!!");
  }, 5000);
}

function displayMessage(mess) {
  console.log(mess);
}

printInfo("Muhanguzi", displayMessage);

//callback functions with async operations
function fetchUserData(userId, callback) {
  setTimeout(function () {
    const users = {
      1: { id: 1, name: "Muhanguzi" },
      2: { id: 2, name: "Boss" },
    };

    const user = users[userId];
    if (user) {
      callback(null, user);
    } else {
      console.log("User not found...", null);
    }
  }, 2000);
}

//callback function
function displayUserData(error, user) {
  if (error) {
    console.error("Error: ", error);
  } else {
    console.log("User: ", user);
  }
}

fetchUserData(1, displayUserData);
