import * as React from 'react';

import { GamepadStateViewer } from '#components/GamepadStateViewer'
import { useRequestAnimationFrame } from '../../utils/useRequestAnimationFrame'

import './styles.css';

export const Application = () => {
  const [gamepad, setGamepad] = React.useState(null)
  const delta = useRequestAnimationFrame(() => {
    setGamepad(window.navigator.getGamepads()[0]);
  })


  return <GamepadStateViewer gamepad={gamepad} />;
};
