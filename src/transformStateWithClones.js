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
    switch (action.type) {
      case 'clear':
        for (const key in currentStates) {
          delete currentStates[key];
        }
        break;

      case 'addProperties':
        for (const key in action.extraData) {
          currentStates[key] = action.extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete currentStates[key];
        }
        break;
    }

    states.push({ ...currentStates });
  }

  return states;
}

module.exports = transformStateWithClones;
