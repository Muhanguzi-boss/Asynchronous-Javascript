const API_URL = "https://InvalidUrl that cannot exist";

async function handlePromise() {
  try {
    const newData = await fetch(API_URL);
    const jsonValue = await newData.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
