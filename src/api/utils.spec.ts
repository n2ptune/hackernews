import { distanceDateFromNow } from './utils'

describe('Distance date to date', () => {
  let now = 1605765464624

  test('Minutes', () => {
    const someMinutes = now - 1800 * 1000

    expect(distanceDateFromNow(someMinutes)).toBe('몇분 전')
  })

  test('Hours', () => {
    const oneHours = now - 3600 * 1000 * 1
    const twoHours = now - 3600 * 1000 * 2
    const threeHours = now - 3600 * 1000 * 3
    const fourHours = now - 3600 * 1000 * 4

    expect(distanceDateFromNow(oneHours)).toBe('1시간 전')
    expect(distanceDateFromNow(twoHours)).toBe('2시간 전')
    expect(distanceDateFromNow(threeHours)).toBe('3시간 전')
    expect(distanceDateFromNow(fourHours)).toBe('4시간 전')
  })

  test('Over oneday', () => {
    const overOneday = now - 3600 * 1000 * 25

    expect(distanceDateFromNow(overOneday)).toBe('1일 전')
  })

  test('Over someday', () => {
    const overThreeday = now - 3600 * 1000 * 72
    const overFiveday = now - 3600 * 1000 * 120
    const overBetweenSixAndFive = now - 3600 * 1000 * 143

    expect(distanceDateFromNow(overThreeday)).toBe('3일 전')
    expect(distanceDateFromNow(overFiveday)).toBe('5일 전')
    expect(distanceDateFromNow(overBetweenSixAndFive)).toBe('5일 전')
  })
})
