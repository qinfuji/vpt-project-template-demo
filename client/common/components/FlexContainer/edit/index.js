import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import FlexContainer from '..';
import Overlay from './overlay';
import { regist } from '../../../utils/editable';

const editable = WrapConponent => {
  class EditConnect extends React.Component {
    constructor(props) {
      super(props);
      this._overlay = React.createRef();
      this._wrap = React.createRef();
      this.state = {
        selected: props.editable || false,
      };
    }

    componentWillUnmount() {}

    componentDidMount() {
      //console.log(ReactDOM.findDOMNode(this._overlay.current));
      console.log(ReactDOM.findDOMNode(this._wrap.current)); //eslint-disable-line
    }

    render() {
      const { selected } = this.state;
      const {
        _editInfo: { editId },
      } = this.props;
      return React.createElement(
        WrapConponent,
        { ...this.props, ref: this._wrap },
        [
          this.props.children,
          selected && (
            <Overlay key="overlay" editId={editId} ref={this._overlay} />
          ),
        ]
      );
    }
  }
  return EditConnect;
};

export default editable(FlexContainer);
