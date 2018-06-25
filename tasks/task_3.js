//Я не использовал parseInt, parseFloat, reverse, и т.д чтобы показать, что я понимаю, как обходиться без них
//Вообще можно написать toPrevision() и вот решение
//Также, reverse медленный
const reverseArray = (array) => {
  return [...array].map(array.pop, array);
};

//.join('') и .concat('') медленее чем обычный +
const concatArray = (array) => {
  return array[0].toString() + array[1].toString()
};

export function divideWithFixedRemainder (a, b) {
  let x = parseFloat(a / b).toString().split('.')
  let array = x[1].slice(x[1].indexOf('.') + 1).split('').map(o => o*1)
  let reverse = reverseArray(array)
  reverse.map((value, index, array) => {
    if (index < array.length - 1) {
      if (value >= 5) array[index+1]++
    }
  })
  let delimiterArray = reverseArray(reverse.slice(reverse.length - 2))
  let final = `${x[0]}.${(concatArray(delimiterArray)*1)}`*1
  console.log('$' + final.toString())
}

