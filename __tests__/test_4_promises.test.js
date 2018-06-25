import {Promisify} from "../tasks/task_4_promises"
jest.mock("../tasks/task_4_old_promises")

describe('it should test Promisify class', () => {
  beforeEach(() => {
    Promisify.mockClear()
  })

  it('tests whether the class is instantiated only 1 time', () => {
    const promisifyQueue = new Promisify()
    expect(Promisify).toHaveBeenCalledTimes(1)
  })

  it('tests whether the class is not instantiated at the most beginning', () => {
    expect(Promisify).not.toHaveBeenCalledTimes(1)
  })

  it('tests whether the method push is called', () => {
    const promisifyQueue = new Promisify()
    const p1 = new Promise(res => setTimeout(() => res('r1'), 1000));
    const p2 = new Promise(res => setTimeout(() => res('r2'), 5000));
    const p3 = new Promise(res => setTimeout(() => res('r3'), 0));

    promisifyQueue.push = jest.fn()

    promisifyQueue.push(p1)
    promisifyQueue.push(p2)
    promisifyQueue.push(p3)

    expect(promisifyQueue.push.mock.calls.length).toEqual(3)
  })

  it('tests whether the timer works correctly', (done) => {
    jest.useFakeTimers()

    global.console = {
      warn: jest.fn(),
      log: jest.fn()
    }

    const promisifyQueue = new Promisify()
    const p1 = new Promise(res => setTimeout(() => res('r1'), 1000));
    const p2 = new Promise(res => setTimeout(() => res('r2'), 5000));
    const p3 = new Promise(res => setTimeout(() => res('r3'), 0));

    promisifyQueue.start = jest.fn()
    promisifyQueue.push = jest.fn()

    promisifyQueue.push(p1)
    promisifyQueue.push(p2)
    promisifyQueue.push(p3)
    promisifyQueue.start()
    done()

    jest.runAllTimers()
  }, 12000)
})