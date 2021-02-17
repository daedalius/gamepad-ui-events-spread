import { GamepadInput } from '#events/GamepadInput'
import { GamepadNormalizedInputState } from './GamepadNormalizedInputState'
import { InputLayer } from './InputLayer'
import { Vector } from './Vector'

export class GamepadInputPropagationTree {
  root: InputLayer = new InputLayer('root')
  activeLayer: InputLayer = null

  registerInputLayer(inputLayer: InputLayer) {
    this.root.addChild(inputLayer)

    if (this.root.children.length === 1) {
      this.setActiveLayer(inputLayer)
    }
  }
  unregisterInputLayer(inputLayer: InputLayer) {
    this.root.removeChild(inputLayer)
  }

  propagateInput(gamepad: Gamepad) {
    // this.root.propagateInput(gamepad);
    this.activeLayer.element.dispatchEvent(new GamepadInput(gamepad))
  }

  setActiveLayer(inputLayer: InputLayer) {
    if (this.activeLayer === inputLayer) {
      return
    }

    this.activeLayer?.onDeactive?.()
    this.activeLayer = inputLayer
    this.root.forEach((node) => {
      node.isActive = false
    })
    this.activeLayer.isActive = true
    this.activeLayer?.onActive?.()
  }

  activeNeighborhoodInputLayer(vector: Vector) {
    const parent = this.activeLayer.parent
    const neighbors = parent.children.filter((i) => i !== this.activeLayer)
    const sortedNeighbors = neighbors.sort((a, b) => {
      const clientRectangleA = a.element.getBoundingClientRect()
      const aCenter = {
        x: clientRectangleA.x + clientRectangleA.width / 2,
        y: clientRectangleA.y + clientRectangleA.height / 2,
      }

      const clientRectangleB = b.element.getBoundingClientRect()
      const bCenter = {
        x: clientRectangleB.x + clientRectangleB.width / 2,
        y: clientRectangleB.y + clientRectangleB.height / 2,
      }
    })
  }
}

export const inputPropagationTree = new GamepadInputPropagationTree()
