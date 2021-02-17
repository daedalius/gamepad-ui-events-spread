export interface IScreenConvertible<T> {
  convertToScreen: (screenHeight: number) => T
}

export interface ICartesianConvertible<T> {
  convertToCartesian: (screenHeight: number) => T
}

export interface IEquals<T> {
  isEquals: (another: T) => boolean
}
