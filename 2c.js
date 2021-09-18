function reverseArray(array) {
    var arr = [];
    while (array.length) {
      arr.push(array.pop());
    };
    return arr;
  };
  
  console.log(reverseArray(["A", "B", "C"]))