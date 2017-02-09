export function addContainer(key, value){

  return {
    type:'ADD_CONTAINER',
    payload:{key, value}
  }
}
export function editContainer(key, value){

  return {
    type:'EDIT_CONTAINER',
    payload:{key, value}
  }
}
export function resetContainer(){

  return {
    type:'CLEAR_SUBMISSION'
  }
}
