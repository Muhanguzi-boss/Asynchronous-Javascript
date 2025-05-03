const API_URL = "https://api.github.com/users/ofallbrains";

async function handlePromise() {
  try {
    const newData = await fetch(API_URL);
    const jsonValue = await newData.json();
    console.log(jsonValue);
  } catch (err) {
    console.log("Denyse!!! Your internet is too slow");
  }
}

handlePromise();
