import { Point } from './Point'

/**
 * Point
 * * constructor
 * * * may be called with two coordinates
 * * * but passing non-numbers as arguments throws
 * * may be converted to screen coordinates
 * * * due to convertToScreen function call
 * * * but passing non-number as screenHeight throws
 * * may be converted to cartesian coordinates
 * * * due to convertToCartesian function call
 * * * but passing non-number as screenHeight throws
 * * may be compared to another Point
 * * * due to isEquals function call
 * * * but passing non-point as argument throws
 */

describe('Point', () => {
  describe('constructor', () => {
    it('may be called with two coordinates', () => {
      const x = 1
      const y = 5

      const point = new Point(x, y)

      expect(point.x).toBe(1)
      expect(point.y).toBe(5)
    })

    it('but passing non-numbers as arguments throws', () => {
      expect(() => new Point(null, null)).toThrow()
      expect(() => new Point(NaN, NaN)).toThrow()
      expect(() => new Point(1, NaN)).toThrow()
      expect(() => new Point(NaN, 1)).toThrow()
    })
  })

  describe('may be converted to screen coordinates', () => {
    it('due to convertToScreen function call', () => {
      const cartesianPoint = new Point(1, 4)

      const screenPoint = cartesianPoint.convertToScreen(5)

      expect(screenPoint.x).toBe(1)
      expect(screenPoint.y).toBe(1)
    })

    it('but passing non-number as screenHeight throws', () => {
      const cartesianPoint = new Point(1, 4)

      expect(() => cartesianPoint.convertToScreen(NaN)).toThrow()
      expect(() => cartesianPoint.convertToScreen(null)).toThrow()
    })
  })

  describe('may be converted to cartesian coordinates', () => {
    it('due to convertToCartesian function call', () => {
      const screenPoint = new Point(1, 4)

      const cartesianPoint = screenPoint.convertToCartesian(5)

      expect(cartesianPoint.x).toBe(1)
      expect(cartesianPoint.y).toBe(1)
    })

    it('but passing non-number as screenHeight throws', () => {
      const screenPoint = new Point(1, 4)

      expect(() => screenPoint.convertToCartesian(NaN)).toThrow()
      expect(() => screenPoint.convertToCartesian(null)).toThrow()
    })
  })

  describe('may be compared to another Point', () => {
    it('due to isEquals function call', () => {
      expect(new Point(1, 4).isEquals(new Point(1, 4))).toBeTruthy()
      expect(new Point(1, 4).isEquals(new Point(4, 1))).toBeFalsy()
    })

    describe('but passing non-point as argument throws', () => {
      expect(() => new Point(1, 4).isEquals(NaN)).toThrow()
      expect(() => new Point(1, 4).isEquals(null)).toThrow()
    })
  })
})
