//Chrome сортирует числа и буквы по дефолту, поэтому если взять ключи
//объекта, он выдаст не [a, 2, c], а [2, a, c]

//Использовал map вместо forEach по двум причинам
//1. Грубо говоря, forEach можно рассматривать как for loop,
//потому что for each, а он запрещен
//2. Со стороны оптимизации, map выигрывает почти в 4 раза

export function objectToArray(obj) {
  let arr = []
  Object.keys(obj).map(function(el) {
    let parsed = parseInt(el).toString() === el ? parseInt(el) : el
    this.push(parsed, obj[el])
}, arr)
  return arr
}