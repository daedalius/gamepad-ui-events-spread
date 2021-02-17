import { IEquals, IScreenConvertible, ICartesianConvertible } from '../interfaces'
import { Point } from '../Point/Point'

export class Line implements IScreenConvertible<Line>, ICartesianConvertible<Line>, IEquals<Line> {
  public incline: number
  public offsetY: number

  constructor(incline: number, offsetY: number) {
    if (!Number.isFinite(incline) || !Number.isFinite(offsetY)) {
      throw new Error(`Wrong arguments in Line constructor:\n incline: ${incline}, offsetY: ${offsetY}`)
    }

    this.incline = incline
    this.offsetY = offsetY
  }

  convertToScreen(screenHeight: number): Line {
    if (!Number.isFinite(screenHeight)) {
      throw new Error(`Wrong arguments in Line convertToScreen function call:\n screenHeight: ${screenHeight}`)
    }

    return new Line(this.incline, screenHeight - this.offsetY)
  }

  convertToCartesian(screenHeight: number): Line {
    if (!Number.isFinite(screenHeight)) {
      throw new Error(`Wrong arguments in Line convertToCartesian function call:\n screenHeight: ${screenHeight}`)
    }

    return new Line(this.incline, screenHeight - this.offsetY)
  }

  isEquals(line: Line): boolean {
    if (!line || !(line instanceof Line)) {
      console.error('Wrong arguments in Line isEquals function call:')
      console.dir(line)
      throw new Error('Wrong arguments in Line isEquals function call')
    }

    return this.incline === line.incline && this.offsetY === line.offsetY
  }

  getY(x: number) {
    if (!Number.isFinite(x)) {
      throw new Error(`Wrong argument in getY function call:\n x: ${x}`)
    }

    return this.incline * x + this.offsetY
  }

  getX(y: number) {
    if (!Number.isFinite(y)) {
      throw new Error(`Wrong argument in getX function call:\n y: ${y}`)
    }

    return (y - this.offsetY) / this.incline
  }

  getIntersectionWithLineOrNull(anotherLine: Line): Point {
    if (!anotherLine || !(anotherLine instanceof Line)) {
      console.error('Wrong arguments in Line getIntersectionWithLineOrNull function call:')
      console.dir(anotherLine)
      throw new Error('Wrong arguments in Line getIntersectionWithLineOrNull function call')
    }

    if (this.incline === anotherLine.incline && this.offsetY === anotherLine.offsetY) {
      return null
    }

    const x = (anotherLine.offsetY - this.offsetY) / (this.incline - anotherLine.incline)
    const y =
      this.incline * ((anotherLine.offsetY - this.offsetY) / (this.incline - anotherLine.incline)) + this.offsetY

    return new Point(x, y)
  }
}
