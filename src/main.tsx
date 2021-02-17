import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Application } from '../examples/2 - GamepadFocusZone in complex layout/App'

import { inputPropagationTree } from '#entities/InputPropagationTree'
;(function requestAnimationFrameCycle() {
  const gamepadInput = window.navigator.getGamepads()[0]
  if (gamepadInput) {
    inputPropagationTree.propagateInput(gamepadInput)
  }
  window.requestAnimationFrame(requestAnimationFrameCycle)
})()

ReactDOM.render(<Application />, window.document.querySelector('#app'))
