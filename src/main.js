import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

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
/* const currentState = barbarian();
 */// const barbarianLvlUp = storeState(level1);
const wizard = storeState(initialValues);
const bard = storeState(initialValues);

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


$(document).ready(function () {

  ////BARBARIAN////
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

  $('#show-state-barbarian').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    //const currentState = stateControl();
    const currentState = barbarian();
    $('#barbarian').text(`barb stats: ${Object.values(currentState)}`);
  });
  

  ////WIZARD////
  $('#upmagicWizard').click(function () {
    const newState = wizard(scroll);
    $('#wizard').text(`Magic: ${newState.magic}`);
  });

  $('#uphpWizard').click(function () {
    const newState = wizard(eatFood);
    $('#wizard').text(`HP: ${newState.HP}`);
  });

  $('#upstrengthWizard').click(function () {
    const newState = wizard(liftWeight);
    $('#wizard').text(`Strength: ${newState.strength}`);
  });

  $('#upwisdomWizard').click(function () {
    const newState = wizard(readingBook);
    $('#wizard').text(`Wisdom: ${newState.wisdom}`);
  });

  $('#show-state-wizard').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    //const currentState = stateControl();
    const currentWizardState = wizard();
    $('#wizard').text(`wiz stats: ${Object.values(currentWizardState)}`);
  });

    ////BARD////
    $('#upmagicBard').click(function () {
      const newState = bard(scroll);
      $('#bard').text(`Magic: ${newState.magic}`);
    });
  
    $('#uphpBard').click(function () {
      const newState = bard(eatFood);
      $('#bard').text(`HP: ${newState.HP}`);
    });
  
    $('#upstrengthBard').click(function () {
      const newState = bard(liftWeight);
      $('#bard').text(`Strength: ${newState.strength}`);
    });
  
    $('#upwisdomBard').click(function () {
      const newState = bard(readingBook);
      $('#bard').text(`Wisdom: ${newState.wisdom}`);
    });
  
    $('#show-state-bard').click(function() {
      // We just need to call stateControl() without arguments to see our current state.
      //const currentState = stateControl();
      const currentBardState = bard();
      $('#bard').text(`bard stats: ${Object.values(currentBardState)}`);
    });
  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  // $('#show-state').click(function () {
  //   const barbarianState = barbarian();
  //   $('#barbarian').append(`Soil: ${currentState.soil}`);
  // });
});


