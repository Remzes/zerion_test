import {objectToArray} from "../tasks/task_5"

describe('it should test objectToArray function', () => {
  it('should return true with right condition', () => {
    let obj = {'a': 1, 2: 'b', 'c': 3}
    expect(objectToArray(obj)).toEqual([2, 'b', 'a', 1, 'c', 3])
  })

  it('should return true with wrong condition', () => {
    let obj = {'a': 1, 2: 'b', 'c': 3}
    expect(objectToArray(obj)).not.toEqual(['a', 1, 2, 'asd', 'b', 1, 'b', 3])
  })
})