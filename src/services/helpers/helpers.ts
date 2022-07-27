
export const capitalize = (word : string) => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// to delete  
export const bubbleSortArr = (arr : number[]) => {
  const copyArr = [...arr];

  for (let outer = 0; outer < copyArr.length; outer++) {
    
    let outerEl = copyArr[outer];

    for (let inner = outer + 1; inner < copyArr.length; inner++) {
      let innerEl = copyArr[inner];
      
      if (outerEl > innerEl) {
        copyArr[outer] = innerEl;
        copyArr[inner] = outerEl;
      
        outerEl = copyArr[outer];
        innerEl = copyArr[inner];
      }  
    }
  }
  return copyArr;  
}