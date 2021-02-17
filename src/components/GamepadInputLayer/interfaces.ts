import { GamepadButton } from '#interfaces/GamepadButton';
import { GamepadAxis } from '#interfaces/GamepadAxis';
import { GamepadInput } from '#events/GamepadInput';

export interface GamepadInputLayerProps {
  name: string;

  trackingAxes?: [GamepadAxis];
  trackingButtons?: [GamepadButton];

  stopPropagation?: boolean | ((e: GamepadInput) => boolean);
  onGamepadInput?: (e: GamepadInput) => void;

  children?: React.ReactNode;
}

export interface GamepadInputLayerState {
  isActive: boolean,
  gamepadInput: Gamepad
}

