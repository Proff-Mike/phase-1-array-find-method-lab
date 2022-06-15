// code your solution here

  function superbowlWin(array){
      let matchedItem = array.find(record => {
          return record.result === "W"
      })
      if(matchedItem){
          return matchedItem.year
      } else{
          return matchedItem
      }
  }