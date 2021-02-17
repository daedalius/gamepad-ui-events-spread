import { GamepadNormalizedInputState } from '#entities/GamepadNormalizedInputState'
import { GamepadNormalizationOptions } from '#interfaces/GamepadNormalizationOptions'

export class GamepadInput extends UIEvent {
  gamepadInput: Gamepad
  gamepadNormalizedInputState: GamepadNormalizedInputState

  constructor(
    gamepadInput: Gamepad,
    options: GamepadNormalizationOptions = {
      axisSensitivity: 0.5,
      axisDeadzone: 0.05,
      nullifyInDeadzone: true,
    }
  ) {
    super('gamepadinput', { bubbles: true })

    this.gamepadInput = gamepadInput
    this.gamepadNormalizedInputState = new GamepadNormalizedInputState(gamepadInput, options)
  }
}
