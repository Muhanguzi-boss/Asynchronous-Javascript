const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const preHeatOven = true;

      if (preHeatOven) {
        resolve("PreHeat Oven to 180degrees");
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const addSugarAndChocoChips = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addChoco = true;

      if (addChoco) {
        resolve(
          "Place butter and chocolate chips, stir until melted and smooth"
        );
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const addFlourCocoAndSalt = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addSaltFlour = true;

      if (addSaltFlour) {
        resolve("Add flour, salt and coco and stir till smooth");
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const bakeMixture = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bakeMixture = true;

      if (bakeMixture) {
        resolve("Mix the baking powder well and add it to the mixture.");
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const bakeChocolateBrownies = async () => {
  const taskOne = await preHeatOven();
  console.log(taskOne);

  const taskTwo = await addSugarAndChocoChips();
  console.log(taskTwo);

  const taskThree = await addFlourCocoAndSalt();
  console.log(taskThree);

  const taskFour = await bakeMixture();
  console.log(taskFour);
};

bakeChocolateBrownies();
