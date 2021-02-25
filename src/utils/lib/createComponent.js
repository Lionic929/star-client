import { Component, createElement } from 'react';

export default function createComponent(MaterialUIComponent, mapProps) {
  class InputComponent extends Component {
    render() {
      return createElement(MaterialUIComponent, {
        ...mapProps(this.props),
      });
    }
  }
  InputComponent.displayName = `ReduxFormMaterialUI${MaterialUIComponent.name}`;
  return InputComponent;
}
