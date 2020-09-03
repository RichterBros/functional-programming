/* const canEat = (creature) => {
  const obj = {
    eat: function(food) {
      return `the ${creature} eats the ${food}.`
    }
  }
  return obj;
}

const cat = canEat("cat")

console.log(cat.eat("salmon"))

const salmon = canEat("salmon");
console.log(salmon.eat("insects"))
 */



const canEat = (creature) => ({
  eat: (food) => {
    return `The ${creature.name} eats the ${food}.`
  }
});

const canSleep = (creature) => ({
  sleep: () => {
    return `The ${creature.name} sleeps.`
  }
});


const sleepingEatingCreature = (name) => {
  let state = {
    name
  }

  return { ...state, ...canEat(state), ...canSleep(state) };
}

const platypus = sleepingEatingCreature("platypus");

console.log(platypus.eat("fish") + platypus.sleep())
console.log(sleepingEatingCreature.state)


const counterFunction = () => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  }
}

const incrementer = counterFunction();

console.log(incrementer())
console.log(incrementer())
console.log(incrementer())
console.log(incrementer())

const incrementerTwo = counterFunction();

console.log(incrementerTwo())
console.log(incrementerTwo())


// const changeState = (state, prop, value) => ({
//   ...state,
//   [prop]: (state[prop] || 0) + value
// })
 
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const feed = changeState("soil")(5)
const hydrate = changeState("water");
const giveLight = changeState("light");

const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

console.log(feed(5))

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

const fedPlant = stateControl(blueFood);

console.log(fedPlant)
