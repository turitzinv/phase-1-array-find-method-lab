/*function superbowlWin(array) {
  if (array.result === "W"){
    return array.year
  } else {
    return "undefined"
  }
} */

/*function superbowlWin(array){
    for(let result of array){
      if (array.result === "W"){
        return array.year
      } else {
        return "undefined"
      }
    }
  }*/

/*
1. Create an if statement that checks to see if we in fact have an object

2. If we do:
Return that object’s year

3. If not:
Return undefined 
*/

  /* function superbowlWin(array){
      const winYear = array.find(record => record.result==="W")
      console.log('This is the win', winYear)
      return winYear.year
  } */

  function superbowlWin(array){
    const winYear = array.find(record => record.result==="W")
    if (typeof winYear === "object"){
        return winYear.year
    } else {
        return undefined
    }   
}