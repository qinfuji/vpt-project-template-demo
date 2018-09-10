import React from 'react';

const editable = options => WrapConponent => {
  class EditConnect extends React.Component {
    constructor(props) {
      super(props);
      console.log('flexContainer editable constructor', this.props.id);
    }

    componentDidMount() {
      console.log('flexContainer editable', this.props.id);
    }

    render() {
      console.log('1111');
      return <WrapConponent {...this.props} />;
    }
  }
  return EditConnect;
};

export default editable;
