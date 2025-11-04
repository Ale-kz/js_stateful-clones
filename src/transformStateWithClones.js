'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const currentStates = { ...state };
  const states = [];

  for (const action of actions) {
    if (action.type === 'clear') {
      for (const key in currentStates) {
        delete currentStates[key];
      }
    }

    if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        currentStates[key] = action.extraData[key];
      }
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete currentStates[key];
      }
    }
    states.push({ ...currentStates });
  }

  return states;
}

module.exports = transformStateWithClones;
