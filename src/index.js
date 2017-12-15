import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import Loading from './components/Loading';
let LoadableMyComponent = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading,
});

class MyComponent extends React.Component {
  state = { showComponent: false };

  onClick = () => {
    this.setState({ showComponent: true });
  };

  onMouseOver = () => {
    LoadableMyComponent.preload();
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick} onMouseOver={this.onMouseOver}>
          Show loadable component
        </button>
        {this.state.showComponent && <LoadableMyComponent/>}
      </div>
    )
  }
}
ReactDOM.render(<MyComponent/>,document.querySelector('#root'));