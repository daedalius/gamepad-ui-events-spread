export interface GamepadButtonsState {
  // Main buttons
  a: boolean
  b: boolean
  x: boolean
  y: boolean

  shoulder: {
    left: boolean
    right: boolean
  }

  triggers: {
    left: boolean
    right: boolean
  }

  // Control buttons
  select: boolean
  start: boolean

  // Pressable buttons at axes
  pressableAxes: {
    left: boolean
    right: boolean
  }

  axes: {
    left: {
      up: boolean
      down: boolean
      left: boolean
      right: boolean
    }
    right: {
      up: boolean
      down: boolean
      left: boolean
      right: boolean
    }
  }

  pad: {
    up: boolean
    down: boolean
    left: boolean
    right: boolean
  }
}
