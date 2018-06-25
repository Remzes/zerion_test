import {divideWithFixedRemainder} from "../tasks/task_3"

describe('it should test divideWithFixedRemainder function', () => {
  beforeEach(() => {
    global.console = {
      warn: jest.fn(),
      log: jest.fn()
    }
  })

  it('should return true with write condition', () => {
    let [a, b] = [4.2, 3]
    let value = a / b;
    divideWithFixedRemainder(a, b);
    expect(global.console.log).toHaveBeenCalledWith('$' + value.toPrecision(2).toString())
  })
  it('should return true with wrong condition', () => {
    let [a, b] = [5, 3]
    let value = a / b;
    divideWithFixedRemainder(a, b);
    expect(global.console.log).not.toHaveBeenCalledWith('$' + value.toPrecision(4).toString())
  })
})