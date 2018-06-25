import {arrayToObject} from "../tasks/task_4_new"

describe('it should test arrayToObject function', () => {
  it('should return true with right condition', () => {
    let arr = ['a', 1, 2, 'b', 'c', 3, 4, 'asd'];
    expect(arrayToObject(arr)).toEqual({2: 'b', 4: 'asd', 'a': 1, 'c': 3})
  })

  it('should return true with wrong condition', () => {
    let arr = ['a', 1, 2, 'b', 'c', 3, 4, 'asd'];
    expect(arrayToObject(arr)).not.toEqual({'a': 1, 2: 'asd','b': 1, 'l': 3})
  })
})