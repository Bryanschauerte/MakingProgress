export const listGoal = {
  id:null,
  type:'list',
  startDate:null,
  end:'',
  tasks:[]
}
export const tast = {
  name:null,
  done:false

}
export const segment ={
  id:null,
  value:null,
  isCompleted:false,
  units:null,
  dateObj: null
}
export const progressiveGoal ={
  id:null,
  type:'progressive',
  startDate:null,
  startValue:null,
  targetEndValue:null,
  currentValue:null,
  units:null,
  title:null,
  avgRateOfOccurance: 0,
  avgValueOfCOmplete: 0,
  description:null,
  segments:[]
}

export const constrainedGoal ={
  id:null,
  type:'constrained',
  startDate:null,
  targetEndValue:null,
  currentValue:null,
  endDate:null,
  startValue:null,
  units:null,
  title:null,
  description:null,
  segments:[]
}
export const projectGoal = {
  id:null,
  title:null,
  description: null,
  users: [],

}
export const user = {

    email:'ee@g.com',
    fName:'joe',
    lName:'lastJoe',
    goals:{}

}
