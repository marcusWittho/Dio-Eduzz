import React from 'react';
import Twitter from './components/Twitter';

class App extends React.Component {
  state = {
    loading: false,
    active: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true,
      })
    }, 2000);
  }

  onRemove = () => {
    this.setState({
      active: false,
    })
  };

  render() {
    const posts = [{
      title: 'post_1',
      description: 'description_1',
    }, {
      title: 'post_2',
      description: 'description_2',
    }]

    return (
      <>
        <button onClick={ this.onRemove }>Remover Componente</button>
        {this.state.active && (
          <Twitter posts={ posts } loading={ this.state.loading }/>
        )}
      </>
    )
  }
};

export default App;
