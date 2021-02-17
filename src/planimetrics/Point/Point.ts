import { IEquals, IScreenConvertible, ICartesianConvertible } from '../interfaces'

export class Point implements IScreenConvertible<Point>, ICartesianConvertible<Point>, IEquals<Point> {
  x: number
  y: number

  constructor(x: number, y: number) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error(`Wrong arguments in Point constructor:\n x: ${x}, y: ${y}`)
    }

    this.x = x
    this.y = y
  }

  convertToScreen(screenHeight: number): Point {
    if (!Number.isFinite(screenHeight)) {
      throw new Error(`Wrong arguments in Point convertToScreen function call:\n screenHeight: ${screenHeight}`)
    }

    return new Point(this.x, screenHeight - this.y)
  }

  convertToCartesian(screenHeight: number): Point {
    if (!Number.isFinite(screenHeight)) {
      throw new Error(`Wrong arguments in Point convertToCartesian function call:\n screenHeight: ${screenHeight}`)
    }

    return new Point(this.x, screenHeight - this.y)
  }

  isEquals(point: Point): boolean {
    if (!point || !(point instanceof Point)) {
      console.error('Wrong arguments in Point isEquals function call:')
      console.dir(point)
      throw new Error('Wrong arguments in Point isEquals function call')
    }

    return this.x === point.x && this.y === point.y
  }
}
