export function hasKeyOfValue(arr, key, value){
  let targetIndex = -1;
  let target = arr.map((item, index)=>{
    if(item[key] === value){
      targetIndex = index;
      return item;
    }
  })

  return targetIndex;
}
