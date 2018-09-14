import React from 'react';
import SplitPane from '..';

const editable = WrapConponent => {
  class EditConnect extends React.Component {
    constructor(props) {
      super(props);
    }

    componentWillUnmount() {}

    componentDidMount() {}

    render() {
      return <WrapConponent {...this.props} ref={this._root} />;
    }
  }
  return EditConnect;
};

export default editable(SplitPane);
