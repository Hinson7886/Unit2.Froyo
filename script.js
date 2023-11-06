const userInput = prompt(
    "Please enter a list of comma-separated froyo flavors",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  function processOrder(str){
    const froyoFlavors = str.split(", ");
    console.log(froyoFlavors)

    const order = {};

    for (let i = 0; i < froyoFlavors.length; i++) {
        if (froyoFlavors[i] in order) {
            order[froyoFlavors[i]] += 1
        } else {
            order[froyoFlavors[i]] = 1
        }
    }
    console.log(order)

    return order
  }
  
const newOrder = processOrder(userInput);

console.table(newOrder)// 







