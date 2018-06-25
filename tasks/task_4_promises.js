//Задание, которое было удалено из списка - с промисами, под номером 4

//Тут можно было подключить BlueBird.js и выполнить все в одну строчку
//Но, я так понимаю, суть задания была выполнить самому

const p1 = new Promise(res => setTimeout(() => res('r1'), 1000));
const p2 = new Promise(res => setTimeout(() => res('r2'), 5000));
const p3 = new Promise(res => setTimeout(() => res('r3'), 0));

export class Promisify {
  constructor(array = []){
    this.array = array
  }

  push(el) {
    this.array.push(el)
  }

  start() {
    this.array.reduce((promise, item, index) => {
      return promise.then(() => {
        const seconds = index === 0 ? 0 : 3000
        return Promise.all([item, this._delay(seconds)]).then(result => console.log(result))
      })
    }, Promise.resolve());
  }

  _delay(seconds) {
    return new Promise(res => setTimeout(res, seconds))
  }
}

