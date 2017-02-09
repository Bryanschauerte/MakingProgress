
export function findId(arr, id){
  let targetIndex = null;
  let array = arr.map((item, index)=> {
    if(item.id == id){
     targetIndex = index;
   }
  })
  return targetIndex;
}

export function millSecToMins(ms){
  return ms/(1000*60);
}
export function secsToHours(secs){
  return secs/60;
}
export function hoursToDays(hrs){
  return hrs/24
}
export function daysToWeeks(days){
  return days/7;
}
export function makeDate(dateInput= new Date()){
  return new Date(dateInput);
}

export function millSecBtwnDateObj(dateObjOne, dateObjTwo){
  return Math.abs(dateObjOne.getTime() - dateObjTwo.getTime())
}
export function calculateRateInDays(goal){
  return goal.rateOfCompletion/24;
}
export function calculateProgressiveRate(currentGoals){

  let totalDiffBtnDates = 0;
  let totalValue = 0;

  let progressiveGoalsComplete = currentGoals['progressive'].map( (item, index) =>{
    if( item.currentValue >= item.targetEndValue ) {
      return item;
    }
  })

  let temp = progressiveGoalsComplete.map((item, index)=>{
    totalValue += item.value;
    if(currentGoals[index+1]){
        totalDiffBtnDates+= millSecBtwnDateObj(
          currentGoals[index], currentGoals[index+1]
        );
    }
  })

  let calculatedRate = {
    totalDiffBtnDates: totalDiffBtnDates/progressiveGoalsComplete.length,
    totalValue: totalValue/progressiveGoalsComplete.length
  }
  return calculatedRate;

}
