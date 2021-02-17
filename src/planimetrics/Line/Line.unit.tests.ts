import { Line } from './Line'

/**
 * Line
 * * constructor
 * * * may be called with two parameters
 * * * but passing non-numbers as arguments throws
 * * may be converted to screen coordinates
 * * * due to convertToScreen function call
 * * * but passing non-number as screenHeight throws
 * * may be converted to cartesian coordinates
 * * * due to convertToCartesian function call
 * * * but passing non-number as screenHeight throws
 * * may be compared to another Line
 * * * due to isEquals function call
 * * * but passing non-line as argument throws
 * * may calculate Y coordinate by passing X coordinate
 * * * due to getY function call
 * * * but passing non-number as X throws
 * * may calculate X coordinate by passing Y coordinate
 * * * due to getX function call
 * * * but passing non-number as Y throws
 * * may calculate inersection with another line
 * * * due to getIntersectionWithLineOrNull function call
 * * * intersections of two lines are equal
 * * * returns null if they are parallel
 * * * but passing non-line as argument throws
 */

describe('Line', () => {
  describe('constructor', () => {
    it('may be called with two parameters', () => {
      const incline = 2
      const offsetY = 0

      const line = new Line(incline, offsetY)

      expect(line.incline).toBe(2)
      expect(line.offsetY).toBe(0)
    })

    it('but passing non-numbers as arguments throws', () => {
      expect(() => new Line(null, null)).toThrow()
      expect(() => new Line(NaN, NaN)).toThrow()
      expect(() => new Line(1, NaN)).toThrow()
      expect(() => new Line(NaN, 1)).toThrow()
    })
  })

  describe('may be converted to screen coordinates', () => {
    it('due to convertToScreen function call', () => {
      const cartesianLine = new Line(1, 4)

      const screenLine = cartesianLine.convertToScreen(5)

      expect(screenLine.incline).toBe(1)
      expect(screenLine.offsetY).toBe(1)
    })

    it('but passing non-number as screenHeight throws', () => {
      const cartesianLine = new Line(1, 4)

      expect(() => cartesianLine.convertToScreen(null)).toThrow()
      expect(() => cartesianLine.convertToScreen(NaN)).toThrow()
    })
  })

  describe('may be converted to cartesian coordinates', () => {
    it('due to convertToCartesian function call', () => {
      const screenLine = new Line(1, 4)

      const cartesianLine = screenLine.convertToCartesian(5)

      expect(cartesianLine.incline).toBe(1)
      expect(cartesianLine.offsetY).toBe(1)
    })

    it('but passing non-number as screenHeight throws', () => {
      const screenLine = new Line(1, 4)

      expect(() => screenLine.convertToScreen(null)).toThrow()
      expect(() => screenLine.convertToScreen(NaN)).toThrow()
    })
  })

  describe('may be compared to another Line', () => {
    it('due to isEquals function call', () => {
      expect(new Line(1, 4).isEquals(new Line(1, 4))).toBeTruthy()
      expect(new Line(1, 4).isEquals(new Line(4, 1))).toBeFalsy()
    })

    it('but passing non-line as argument throws', () => {
      expect(() => new Line(1, 4).isEquals(null)).toThrow()
      expect(() => new Line(1, 4).isEquals(NaN)).toThrow()
    })
  })

  describe('may calculate Y coordinate by passing X coordinate', () => {
    it('due to getY function call', () => {
      const line = new Line(2, 4)

      const y1 = line.getY(0)
      expect(y1).toBe(4)

      const y2 = line.getY(2)
      expect(y2).toBe(8)

      const y3 = line.getY(4)
      expect(y3).toBe(12)
    })

    it('but passing non-number as X throws', () => {
      expect(() => new Line(2, 4).getY(null)).toThrow()
      expect(() => new Line(2, 4).getY(NaN)).toThrow()
    })
  })

  describe('may calculate X coordinate by passing Y coordinate', () => {
    it('due to getX function call', () => {
      const line = new Line(2, 2)

      const x1 = line.getX(0)
      expect(x1).toBe(-1)

      const x2 = line.getX(2)
      expect(x2).toBe(0)

      const x3 = line.getX(4)
      expect(x3).toBe(1)
    })

    it('but passing non-number as X throws', () => {
      expect(() => new Line(2, 4).getX(null)).toThrow()
      expect(() => new Line(2, 4).getX(NaN)).toThrow()
    })
  })

  describe('may calculate inersection with another line', () => {
    it('due to getIntersectionWithLineOrNull function call', () => {
      const line1 = new Line(1, -2)
      const line2 = new Line(2, -4)

      const intersection = line1.getIntersectionWithLineOrNull(line2)

      expect(intersection.x).toBe(2)
      expect(intersection.y).toBe(0)
    })

    it('intersections of two lines are equal', () => {
      const line1 = new Line(1, -2)
      const line2 = new Line(2, -4)

      const intersection = line1.getIntersectionWithLineOrNull(line2)
      const sameIntersection = line2.getIntersectionWithLineOrNull(line1)

      expect(intersection.isEquals(sameIntersection)).toBeTruthy()
    })

    it('returns null if they are parallel', () => {
      const line1 = new Line(1, -2)
      const line2 = new Line(1, -2)

      const intersection = line1.getIntersectionWithLineOrNull(line2)

      expect(intersection).toBe(null)
    })

    it('but passing non-line as argument throws', () => {
      const line1 = new Line(1, -2)

      expect(() => line1.getIntersectionWithLineOrNull(null)).toThrow()
    })
  })
})
