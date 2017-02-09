import {
  listGoal,
  tast,
  segment,
  progressiveGoal,
  constrainedGoal,
  user
} from '../constants/goalTemplates';

import {
  findId,
  makeDate,
  millSecBtwnDateObj,
  calculateRateInDays,
  calculateProgressiveRate

} from '../helpers/calculations';


export default function (state = {}, action){
  let currentGoals = state;
  let targetIndex = null;
  let goalToAdd = null;
  switch (action.type) {

    case 'ADD_GOAL':
      goalToAdd = action.payload.goal;
      if(!currentGoals[goalToAdd.type]){
        currentGoals[goalToAdd.type] = [];
      }
      if(goalToAdd.id){
        targetIndex = findId(currentGoals[goalToAdd.type], goalToAdd.id);
      }else{
        goalToAdd.id = Math.random();
      }
      if(targetIndex && targetIndex !==  -1){
        currentGoals[goalToAdd.type][targetIndex]= action.payload.goal;
      }else{
        currentGoals[goalToAdd.type].push(goalToAdd);
      }
      return {...state, ...currentGoals}

    case 'UPDATE_GOAL':
      let updatedGoal = action.payload.updatedItem;
      if(currentGoals[updatedGoal.type]){
        targetIndex = findId(currentGoals[updatedGoal.type], updatedGoal.id);
      }

      if(targetIndex !== null){
        currentGoals[updatedGoal.type][targetIndex] = updatedGoal;
      }else{
        currentGoals[updatedGoal.type].push(updatedGoal)
      }
      return {...state, ...currentGoals};

    case 'REMOVE_GOAL':
      let goalToRemove= action.payload.goalToRemove
      targetIndex = findId(currentGoals[goalToRemove.type], goalToRemove.id);
      if(targetIndex !== -1 || null){
        let removed = currentGoals[action.payload.type].splice(targetIndex, 1);
      }
      return {...state, ...currentGoals};
    case 'RECALCULATE_GOAL':

      return {...state, }
    case 'POPULATE_STORED_GOALS':

    return {...state}
    default:
      return {...state, ...currentGoals}
  }
}
