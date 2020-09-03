


// This function stores our state in an object called currentState.

const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}


// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const initialValues = {strength: 0, HP: 0, magic: 0};
const level1 = {strength: 5, HP: 5, magic: 5};

const barbarian = storeState(initialValues);
const barbarianLvlUp = storeState(level1);
const wizard = storeState(initialValues);
const bard = storeState(initialValues);

const changeStrength = changeState("strength");
const liftWeight = changeStrength(5);
const fatigue = changeStrength(-5);

const changeWisdom = changeState("wisdom");
const readingBook = changeWisdom(10);
const getConcussion = changeWisdom(-10);

const changeMagic = changeState("magic");
const scroll = changeMagic(5);
const breakWand = changeMagic(-5);

const changeHp = changeState("HP");
const eatFood = changeHp(5);
const poison = changeHp(-5);

// const newBarbarianState = barbarian(breakWand);
const barbarianState = barbarian();
// const wizardState = wizard();
// const bardState = bard();


//level up reset with new base stats
//HP decrementer if poisoined
console.log(barbarianState)

const canPaint = (color) => {
  const obj = {
    paints: function () {
      return `Paints ${color}`;
    }
  }
return obj;
}

if (barbarian.Hp > 5 || barbarian.strength > 5 || barbarian.magic > 5)
{
  //level this dude up
}
// const painter1 = canPaint("green");
// console.log(painter1.paints());
// const painter2 = canPaint("yellow");
// console.log(painter2.paints())


// > painter1.paints()
// "Paints green!"
// > painter2.paints()
// "Paints yellow!"
// > painter3.paints()
// "Paints red!"