import React from 'react';

class Twitter extends React.Component {

  state = {
    tweet: 'tweet',
  };

  componentDidMount() {
    const { posts, loading } = this.props;
    console.log('DidMount', posts);
    console.log('DidMount', loading);
  };

  componentDidUpdate(prevProps) {
    const { loading } = this.props;

    if(this.props.loading !== prevProps.loading) {
      console.log('DidUpdate: loading', loading);
    }
  };

  componentWillUnmount() {
    console.log('WillUnmount: fui desmontado...');
  };

  render() {
    return (
      <>
        <h3>Twitter</h3>
      </>
    )
  }
};

export default Twitter;
