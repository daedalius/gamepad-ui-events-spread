import { GamepadNormalizationOptions } from '#interfaces/GamepadNormalizationOptions'
import { GamepadButtonsState } from '#interfaces/GamepadButtonsState'
import { GamepadAxesState } from '#interfaces/GamepadAxesState'

export class GamepadNormalizedInputState {
  buttons: GamepadButtonsState
  axes: GamepadAxesState

  constructor(gamepad: Gamepad, options: GamepadNormalizationOptions) {
    // buttons
    this.buttons = {
      a: gamepad.buttons[0].pressed,
      b: gamepad.buttons[1].pressed,
      x: gamepad.buttons[2].pressed,
      y: gamepad.buttons[3].pressed,

      shoulder: {
        left: gamepad.buttons[4].pressed,
        right: gamepad.buttons[5].pressed,
      },

      triggers: {
        left: gamepad.buttons[6].value > options.axisDeadzone,
        right: gamepad.buttons[7].value > options.axisDeadzone,
      },

      select: gamepad.buttons[8].pressed,
      start: gamepad.buttons[9].pressed,

      pressableAxes: {
        left: gamepad.buttons[10].pressed,
        right: gamepad.buttons[11].pressed,
      },

      pad: {
        up: gamepad.buttons[12].pressed,
        down: gamepad.buttons[13].pressed,
        left: gamepad.buttons[14].pressed,
        right: gamepad.buttons[15].pressed,
      },

      axes: {
        left: {
          right: gamepad.axes[0] >= options.axisSensitivity,
          left: gamepad.axes[0] <= -options.axisSensitivity,
          up: gamepad.axes[1] <= -options.axisSensitivity,
          down: gamepad.axes[1] >= options.axisSensitivity,
        },
        right: {
          right: gamepad.axes[2] >= options.axisSensitivity,
          left: gamepad.axes[2] <= -options.axisSensitivity,
          up: gamepad.axes[3] <= -options.axisSensitivity,
          down: gamepad.axes[3] >= options.axisSensitivity,
        },
      },
    }

    // axes
    this.axes = {
      triggers: {
        left: normalizeAxisByDeadzone(gamepad.buttons[6].value, options),
        right: normalizeAxisByDeadzone(gamepad.buttons[7].value, options),
      },
      left: {
        x: normalizeAxisByDeadzone(gamepad.axes[0], options),
        y: normalizeAxisByDeadzone(gamepad.axes[1], options),
      },
      right: {
        x: normalizeAxisByDeadzone(gamepad.axes[2], options),
        y: normalizeAxisByDeadzone(gamepad.axes[3], options),
      },
    }
  }
}

function normalizeAxisByDeadzone(value: number, options: GamepadNormalizationOptions): number {
  if (value > options.axisDeadzone) {
    return value
  }

  return options.nullifyInDeadzone ? 0 : value
}
