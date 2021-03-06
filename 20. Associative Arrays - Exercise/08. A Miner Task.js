function solve(input) {
  let resources = {};
  let material = "";
  let quantity = 0;
  let totalQuantity = 0;

  for (let k = 0; k < input.length; k++) {
    if (k % 2 === 0) {
      material = input[k];
    } else {
      quantity = Number(input[k]);
      if (resources.hasOwnProperty(material)) {
        resources[material] += quantity;
      } else {
        resources[material] = quantity;
      }
    }
  }

  for (let [key, value] of Object.entries(resources)) {
    console.log(`${key} -> ${value}`);
  }
}

// solve([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
//     ]);

solve(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
