import { distanceDateFromNow } from './utils'

describe('Distance date to date', () => {
  let now = Date.now()

  test('Seconds', () => {
    const seconds = now - 5 * 1000

    expect(distanceDateFromNow(seconds, now)).toBe('몇초 전')
  })

  test('Minutes', () => {
    const oneMinute = now - 50 * 1000
    const twoMinute = now - 65 * 1000

    expect(distanceDateFromNow(oneMinute, now)).toBe('1분 전')
    expect(distanceDateFromNow(twoMinute, now)).toBe('2분 전')
  })

  test('Hours', () => {
    const oneHours = now - 3600 * 1000 * 1
    const twoHours = now - 3600 * 1000 * 2
    const threeHours = now - 3600 * 1000 * 3
    const fourHours = now - 3600 * 1000 * 4

    expect(distanceDateFromNow(oneHours, now)).toBe('1시간 전')
    expect(distanceDateFromNow(twoHours, now)).toBe('2시간 전')
    expect(distanceDateFromNow(threeHours, now)).toBe('3시간 전')
    expect(distanceDateFromNow(fourHours, now)).toBe('4시간 전')
  })

  test('Over oneday', () => {
    const overOneday = now - 3600 * 1000 * 25

    expect(distanceDateFromNow(overOneday, now)).toBe('1일 전')
  })

  test('Over someday', () => {
    const overThreeday = now - 3600 * 1000 * 72
    const overFiveday = now - 3600 * 1000 * 120
    const overBetweenSixAndFive = now - 3600 * 1000 * 143

    expect(distanceDateFromNow(overThreeday, now)).toBe('3일 전')
    expect(distanceDateFromNow(overFiveday, now)).toBe('5일 전')
    expect(distanceDateFromNow(overBetweenSixAndFive, now)).toBe('5일 전')
  })
})

describe('Should not exceed now', () => {
  test('Over one day', () => {
    const over = Date.now() + 86400 * 1000

    expect(distanceDateFromNow(over)).toBe(false)
  })
})
