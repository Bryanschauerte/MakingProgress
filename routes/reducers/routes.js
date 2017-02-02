
export default function reducer(state={hotDog:'yes Please'}, action) {
  switch (action.type) {

    case 'WANT_HAS_HOTDOG':

      return {state};


    default:
      return state;
  }
}
