import {isIntersect} from "../tasks/task_1"

describe('should test isIntersect function', () => {
  it('should return true', () => {
    expect(isIntersect(
      {x1: 1, x2: 10}, {x1: 11, x2: 123}, {x1: 122, x2: 124}
      )).toEqual(true)
  })

  it('should return false', () => {
    expect(isIntersect(
      {x1: 1, x2: 10}, {x1: 11, x2: 123}, {x1: 125, x2: 128}
    )).toEqual(false)
  })

  it('reversed point: should return true', () => {
    expect(isIntersect(
      {x1: 1, x2: 10}, {x1: 11, x2: 123}, {x1: 129, x2: 12}
    )).toEqual(true)
  })

  it('reversed point: should return false', () => {
    expect(isIntersect(
      {x1: 1, x2: 10}, {x1: 11, x2: 123}, {x1: 130, x2: 125}
    )).toEqual(false)
  })
})