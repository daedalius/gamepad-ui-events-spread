import * as React from 'react';

import { GamepadStateViewer } from '#components/GamepadStateViewer';
import { GamepadInputLayerProps, GamepadInputLayerState } from './interfaces';
import { inputPropagationTree } from '#entities/InputPropagationTree';
import { InputLayer } from '#entities/InputLayer';

import './styles.css'

export class GamepadInputLayer extends React.Component<GamepadInputLayerProps, GamepadInputLayerState> {
  inputLayer: InputLayer;
  elementRef: React.Ref<HTMLDivElement>;

  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      gamepadInput: null,
    };

    this.elementRef = React.createRef();
  }

  componentDidMount() {
    const { name, trackingAxes, trackingButtons, onGamepadInput, stopPropagation } = this.props;

    this.inputLayer = new InputLayer(name);
    this.inputLayer.trackingAxes = trackingAxes;
    this.inputLayer.trackingButtons = trackingButtons;
    this.inputLayer.element = this.elementRef.current;

    this.inputLayer.onActive = () => {
      this.setState({ isActive: true });
    };
    this.inputLayer.onDeactive = () => {
      this.setState({ isActive: false });
    };
    inputPropagationTree.registerInputLayer(this.inputLayer);

    this.inputLayer.element.addEventListener('gamepadinput', (event) => {
      this.setState({ gamepadInput: event.gamepadInput });
    })
  }

  componentDidUpdate() {
    // TODO: makes sense?
    this.inputLayer.element = this.elementRef.current;
  }

  componentWillUnmount() {
    inputPropagationTree.unregisterInputLayer(this.inputLayer);
  }

  render() {
    const { isActive } = this.state;

    return (
      <div ref={this.elementRef} className={isActive ? 'gamepad-input-layer_active' : 'gamepad-input-layer_inactive'}>
        <GamepadStateViewer gamepad={this.state?.gamepadInput} />
        {this.props.children}
      </div>
    );
  }
}
