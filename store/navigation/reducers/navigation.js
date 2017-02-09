//naviagationSTate

import * as helpers from '../../helpers';



const initialState =  {
  index: 0, // Starts with first route focused.
  prevPushedRoutes:[
    // {
    //   key: 'My Initial Scene'
    // }
  ],
  routes: [//array with navigationRoute(s)
    {
      key: 'Landing'
    },
    {
      key: 'Goals'
    },
    {
      key: 'NewAddition'
    },
    {
      key: 'Home'
    }] // Starts with only one route.
}

export default function navigation(state=initialState, action){
  let tempRoutes = state.routes;
  let tempIndex = state.index;
  let tempPrev = state.prevPushedRoutes;

  switch (action.type) {


    case 'NEXT_ROUTE':
      tempIndex = state.index;
      tempRoutes = state.routes;
      tempPrev = state.prevPushedRoutes;
      if(tempRoutes[tempIndex]){
        tempPrev.push(tempIndex)
        tempIndex+=1;

      }

      return {...state, index: tempIndex, prevPushedRoutes:tempPrev};

    case 'PREVIOUS_ROUTE':
      tempPrev = state.prevPushedRoutes;
      tempIndex = tempPrev.length>0 ? tempPrev.pop(): state.index;
      return {...state, index: tempIndex, prevPushedRoutes:tempPrev};

    case 'PUSH_ROUTE':
      const route = action.payload;//{key: 'Route-' + Date.now()};
      tempRoutes = state.routes;
      if( helpers.hasKeyOfValue(tempRoutes, 'key', route.key) !== -1){
        tempRoutes.push(route);
      }
      return {...state, routes: tempRoutes};

    case 'GO_TO_INDEX':
       tempRoutes = state.routes;
       tempIndex = state.index;
       tempPrev = state.prevPushedRoutes;
       const goTo = action.payload;
       let destination = helpers.hasKeyOfValue(tempRoutes, 'key', goTo.key)
       if(destination !== -1){
         tempPrev.push(state.index)
         tempIndex = destination;
       }

      return {...state, index: tempIndex, prevPushedRoutes: tempPrev };

    case 'INDEX_OF_TARGET_SCENE':

      return {state};

      case 'RESET_SCENES':

        return {state};


    default:
      return state;
  }
}
