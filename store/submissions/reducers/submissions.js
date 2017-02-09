import * as helpers from '../../helpers';

const initialState =  {
  submittingState:{},
  NewAddition:{
    items:[
            {
              question:'Is there a deadline?',
              inputProp:'hasEndDate',
              inputOptions:[
                {value:true, label:'Yes'}, {value:false, label:'No'}
              ],
              detail:{
                question:'When?',
                show:false,
                inputProp:'endDate',
                inputOptions:['calender'],
              }
            },
            {
              question:'What is it?',
              inputProp:'isList',
              inputOptions:[
                {value:false, label:'Countable Units'},
                {value:true, label:'List of Things'}
              ],
              detail:{
                question:'What do we call the units?',
                show:false,
                inputProp:'endDate',
                inputOptions:[
                  {value:'$', label:'dollars'},
                  {value:'kg', label:'Killograms'},
                  {value:'lbs', label:'Pounds'},
                  {value:'other', label:'Add Your Own'}
                ],
              }
            },
            {
              question:'When do we start?',
              inputProp:'startDate',
              inputOptions:['calender'],
              detail:{
                question:'What do we call the units?',
                show:false,
                inputProp:'endDate',
                inputOptions:[
                  {value:'$', label:'dollars'},
                  {value:'kg', label:'Killograms'},
                  {value:'lbs', label:'Pounds'},
                  {value:'other', label:'Add Your Own'}
                ],
              }

            },
          ],
    index:0
        }
}

export default function submissions(state=initialState, action){
  let submittingKeys = Object.keys(state.submittingState);
  let submittingState = state.submittingState;
  let toAdd = action.payload;


  switch (action.type) {



    case 'EDIT_CONTAINER':
        toAdd = action.payload;
        submittingState[toAdd.key] = toAdd.value;
      return {...state, submittingState:submittingState};

    case 'TOGGLE_DETAILS':
        toAdd = action.payload;//section, index, value
        let show = !submittingState[action.payload.section].items[index].detail.show
        submittingState[action.payload.section].items[index].detail.show = show;
      return {...state, submittingState:submittingState};


    case 'REMOVE_CONTAINER_KEY':

      if(submittingKeys.indexOf(toAdd.key) !== -1 ){
        delete submittingState[toAdd.key]
      }
      return {...state, submittingState:submittingState};

    case 'CHANGE_QUESTION_INDEX':
      let tempState = state;
      const targetIndex = action.payload.index;
      const section = action.payload.section;
      if(state[section]){

        let index = state[section].index;
        index = targetIndex <= state[section].items.length?  targetIndex: index;
        tempState[section].index = index;
        console.log('ding', {...state, ...tempState})
        return {...state, ...tempState}
      }else{
        return state;
      }

      case 'CLEAR_SUBMISSION':

        return initialState;


    default:
      return state;
  }
}
