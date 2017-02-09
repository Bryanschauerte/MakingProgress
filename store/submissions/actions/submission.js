
export function removePart(key, value){

  return {
    type:'REMOVE_CONTAINER_KEY',
    payload:{key, value}
  }
}
export function toggleDetail(section, index){

  return {
    type:'TOGGLE_DETAILS',
    payload:{section, index}
  }
}
export function editContainer(key, value){

  return {
    type:'EDIT_CONTAINER',
    payload:{key, value}
  }
}
export function changeIndex(section, index){

  return {
    type:'CHANGE_QUESTION_INDEX',
    payload:{section:section, index:index}
  }
}
export function resetContainer(){

  return {
    type:'CLEAR_SUBMISSION'
  }
}
