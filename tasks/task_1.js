//Упрощает логику, на не придется прописывать логику, когда X2 < X1
function swap(item) {
  if (item.x1 > item.x2) { [item.x2, item.x1] = [item.x1, item.x2] }
  return item
}

function logic(a, b) {
  return (b.x1 >= a.x1 && b.x1 <= a.x2) || (b.x2 >= a.x1 && b.x2 <= a.x2)
}

export function isIntersect() {
  let args = [];
  let iterate = 1;
  for (let i = 0; i < arguments.length; i++) {
    args[i] = arguments[i];
  }

  //Iterate through all elements
  for (let index = 0, length = args.length - 1; index < length; index++) {
    let firstItem = swap(args[index])

    //Choose the second item
    for (let innerInd = iterate, len = args.length; innerInd < len; innerInd++) {
      let secondItem = swap(args[innerInd]);
      if (logic(firstItem, secondItem)) return true
    }

    iterate++
  }

  return false
}