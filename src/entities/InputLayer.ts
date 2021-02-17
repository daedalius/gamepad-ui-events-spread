import { GamepadAxis } from '#interfaces/GamepadAxis'
import { GamepadButton } from '#interfaces/GamepadButton'
import { GamepadNormalizedInputState } from './GamepadNormalizedInputState'

export class InputLayer {
  parent: InputLayer | null = null
  name: String
  element: HTMLElement

  // axisButtonThreshold: Number = 0.5;
  // axisThreshold: Number = 0.05;

  trackingButtons: Array<GamepadButton> = []
  // forcedTrackingButtons: Array<GamepadButton> = [];
  trackingAxes: Array<GamepadAxis> = []
  // forcedTrackingAxes: Array<GamepadAxis> = [];
  inputState: GamepadNormalizedInputState = null

  isActive: boolean = false
  onActive: () => void
  onDeactive: () => void
  children: Array<InputLayer> = []

  constructor(name: String) {
    if (typeof name !== 'string' || !name) {
      throw new Error('Argument "name" was missed while creating an InputLayer')
    }
    this.name = name

    // if (Array.isArray(trackingButtons)) {
    //   this.trackingButtons = trackingButtons;
    // }
    // if (Array.isArray(trackingAxes)) {
    //   this.trackingAxes = trackingAxes;
    // }
  }

  isRoot() {
    return !this.parent
  }

  isLeaf() {
    return this.children.length === 0
  }

  addChild(child: InputLayer) {
    this.children.push(child)
    child.parent = this
  }

  removeChild(child: InputLayer) {
    const childrenLength = this.children.length
    this.children = this.children.filter((i) => i !== child)

    if (childrenLength === this.children.length) {
      this.children.forEach((i) => i.removeChild(child))
    }
  }

  propagateInput(gamepadInput: Gamepad) {
    if (!this.isRoot()) {
      throw new Error('Only root InputLayer may start gamepad input propagation')
    }

    const leafes = this.findLeafes()
    leafes.forEach((l) => {
      // fire GamepadInput event on the element
    })
  }

  private findLeafes(): Array<InputLayer> {
    if (this.isLeaf()) {
      return [this]
    }

    let leafes: Array<InputLayer> = []

    this.children.forEach((i) => {
      if (i.isLeaf()) {
        leafes.push(i)
      } else {
        leafes = [...leafes, ...i.findLeafes()]
      }
    })

    return leafes
  }

  public forEach(fn: (InputLayer) => void): void {
    fn(this)
    this.children.forEach((i) => i.forEach(fn))
  }
}
