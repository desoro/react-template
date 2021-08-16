import { Component, createContext, useContext } from 'react';

export const ControlsContext = createContext({
  placeholder: false,
  setPlaceholder: (v: boolean) => {}
});

export class ControlsProvider extends Component {
  state = {
    placeholder: false
  }

  setPlaceholder = (value: boolean) => {
    this.setState({
      ...this.state,
      placeholder: value
    });
  }

  render() {
    const { setPlaceholder } = this;

    return (
      <ControlsContext.Provider value={{ ...this.state, setPlaceholder }}>
        {this.props.children}
      </ControlsContext.Provider>
    )
  }
};

export function useControls() {
  return useContext(ControlsContext);
}