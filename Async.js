const users = ["Muhanguzi-boss", "mpragmas", "kayi122"];
const API_Urls = users.map((user) => `https://api.github.com/users/${user}`);

async function handleMultipleUsers() {
  try {
    const response = await Promise.all(API_Urls.map((url) => fetch(url)));
    const userData = await Promise.all(response.map((res) => res.json()));

    userData.forEach((user) => {
      const { login, bio, public_repos, name } = user;
      console.log("==========");
      console.log("Username:", login);
      console.log("Bio:", bio);
      console.log("Public repos:", public_repos);
      console.log("Name:", name);
    });
  } catch (error) {
    console.error(
      "Oops!!! Something went wrong, Check your internet connection"
    );
  }
}

handleMultipleUsers();
