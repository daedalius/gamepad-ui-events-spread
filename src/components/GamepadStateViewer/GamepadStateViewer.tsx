// Based on https://github.com/bwiklund/gamepad.js

import * as React from 'react';

import './styles.css';

const buttonNames = [
  'A',
  'B',
  'X',
  'Y',
  'LS',
  'RS',
  'LT',
  'RT',
  'Select',
  'Start',
  'LAB',
  'RAB',
  'Up',
  'Down',
  'Left',
  'Right',
];

const buttonColors = ['green', 'red', 'blue', 'yellow'];

export function GamepadStateViewer({ gamepad }: { gamepad: Gamepad }) {
  if (!gamepad) {
    return null;
  }

  return (
    <div className="gampepad-state-viewer">
      <p>Buttons:</p>
      <ul className="gampepad-state-viewer__buttons">
        {gamepad.buttons.map((button, index) => {
          const name = buttonNames[index];
          const color = buttonColors[index] || 'default';

          return button.pressed ? (
            <li className="gampepad-state-viewer__button" style={{ color: color }}>
              {name}
              {` ${button.value.toFixed(2)}`}
            </li>
          ) : null;
        })}
      </ul>
      <p>Axes:</p>
      <ul className="gampepad-state-viewer__axes">
        <li className="gampepad-state-viewer__axis">{`LA: x ${gamepad.axes[0].toFixed(2)}, y ${gamepad.axes[1].toFixed(
          2
        )}`}</li>
        <li className="gampepad-state-viewer__axis">{`RA: x ${gamepad.axes[2].toFixed(2)}, y ${gamepad.axes[3].toFixed(
          2
        )}`}</li>
      </ul>
    </div>
  );
}
