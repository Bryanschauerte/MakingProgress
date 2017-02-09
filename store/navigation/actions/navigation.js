export function pushRoute(route){
//list or progressive type
  return {
    type:'PUSH_ROUTE',
    payload:route
  }
}
export function nextRoute(){

  return {
    type:'NEXT_ROUTE'
  }
}
export function backRoute(){

  return {
    type:'PREVIOUS_ROUTE'
  }
}
export function goTo(route){

  return {
    type:'GO_TO_INDEX',
    payload:{key:route}
  }
}
