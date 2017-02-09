import * as helpers from '../../helpers';

const initialState =  {

}

export default function uiState(state=initialState, action){
  let stateKeys = Object.keys(state);
  let tempState = state;
  const toAdd = action.payload

  switch (action.type) {



    case 'ADD_CONTAINER':

      if(stateKeys.indexOf(toAdd.key) === -1 ){
        tempState[toAdd.key] = toAdd.value;
      }
      return {...state, tempState};

    case 'EDIT_CONTAINER':

      if(stateKeys.indexOf(toAdd.key) !== -1 ){
        tempState[toAdd.key] = toAdd.value;
      }
      return {...state, tempState};

      case 'CLEAR_SUBMISSION':

        return {};


    default:
      return state;
  }
}
