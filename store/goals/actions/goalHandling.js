
import {
  listGoal,
  task,
  segment,
  progressiveGoal,
  constrainedGoal,
  projectGoal
} from '../constants/goalTemplates';

function populateGoal(goalInput, type){
  let combined = null;

  switch (type) {

    case 'list':
      let listGoalTemplate = listGoal;
      combined = Object.assign({}, listGoalTemplate, goalInput );
      return combined;
      break;

    case 'progressive':
      let progressiveGoalTemplate = progressiveGoal;
      combined = Object.assign({}, progressiveGoalTemplate, goalInput );
      return combined;
      break;

    case 'constrained':
      let constrainedGoalTemplate = constrainedGoal;
      combined = Object.assign({}, constrainedGoalTemplate, goalInput );
      return combined;
      break;

    case 'project':
      let projectTemplate = projectGoal;
      combined = Object.assign({}, projectTemplate, goalInput );
      return combined;
      break;

    default:
      return {};
  }
}


export function addGoal(goal, type){
  let addition = populateGoal(goal, type);
  return {
    type:'ADD_GOAL',
    payload:{
      goal:addition
    }
  }
}

export function updateGoal(updatedItem){
  return {
    type:'UPDATE_GOAL',
    payload:{
      updatedItem: updatedItem
    }
  }
}



export function removeGoal(goalToRemove, type){

  return {
    type:'REMOVE_GOAL',
    payload: {
      goalToRemove: goalToRemove
    }
  }
}

export function recalculateProgressiveGoal(goal, type, all=false){

  return {
    type:'RECALCULATE_GOAL',
    payload:{
      goal,
      type,
      doAll: all
    }
  }
}
export function populateStoredGoals(goals){
  return {
    type:'POPULATE_STORED_GOALS',
    payload:goals
  }
}
//progressive, constrained and list goals
