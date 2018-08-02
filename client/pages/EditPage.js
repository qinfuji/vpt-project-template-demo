import React from 'react';
import Pages from './pages';

export default class EditPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { history, match } = this.props;
    console.log(Pages);
    let Page = Pages[match.params.path];
    return <Page />;
  }
}
