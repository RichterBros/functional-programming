import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

// const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

const initialValues = {strength: 0, HP: 0, magic: 0};
// const level1 = {strength: 5, HP: 5, magic: 5};

const barbarian = storeState(initialValues);
// const barbarianLvlUp = storeState(level1);
// const wizard = storeState(initialValues);
// const bard = storeState(initialValues);

const changeStrength = changeState("strength");
const liftWeight = changeStrength(5);
// const fatigue = changeStrength(-5);

const changeWisdom = changeState("wisdom");
const readingBook = changeWisdom(10);
//const getConcussion = changeWisdom(-10);

const changeMagic = changeState("magic");
const scroll = changeMagic(5);
// const breakWand = changeMagic(-5);

const changeHp = changeState("HP");
const eatFood = changeHp(5);
// const poison = changeHp(-5);

// const newBarbarianState = barbarian(breakWand);

// const wizardState = wizard();
// const bardState = bard();


//level up reset with new base stats
//HP decrementer if poisoined

//console.log(barbarianState)
// We create four functions using our function factory. We could easily create many more.

$(document).ready(function () {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  $('#upmagicBarabarian').click(function () {
    const newState = barbarian(scroll);
    $('#barbarian').text(`Magic: ${newState.magic}`);
  });

  $('#uphpBarbarian').click(function () {
    const newState = barbarian(eatFood);
    $('#barbarian').text(`HP: ${newState.HP}`);
  });

  $('#upstrengthBarbarian').click(function () {
    const newState = barbarian(liftWeight);
    $('#barbarian').text(`Strength: ${newState.strength}`);
  });

  $('#upwisdomBarbarian').click(function () {
    const newState = barbarian(readingBook);
    $('#barbarian').text(`Wisdom: ${newState.wisdom}`);
  });

  const currentState = barbarian();
  console.log(currentState);

  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  // $('#show-state').click(function () {
  //   const barbarianState = barbarian();
  //   $('#barbarian').append(`Soil: ${currentState.soil}`);
  // });
});


// $ node main.js
// (node:9128) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// C:\Users\Erich Richter\Desktop\react\src\main.js:1
// import $ from 'jquery';
// ^^^^^^


