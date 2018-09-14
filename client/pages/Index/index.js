import React, { Component } from 'react';
import PrivateRoute from '../../common/components/AuthorizedRoute';
import RouterSwitch from '../../common/components/RouterSwitch';
import FlexContainer from '../../common/components/FlexContainer';
import SplitPane from '../../common/components/SplitPane';

const A = () => (
  <div>
    <h2>Home A1</h2>
  </div>
);

const B = () => (
  <div>
    <h2>Home B</h2>
  </div>
);

export default class Index extends Component {
  render() {
    const { match } = this.props;
    return (
      <FlexContainer>
        <FlexContainer height={40}>我是头</FlexContainer>
        <FlexContainer editable>
          <SplitPane split="vertical" minSize={150}>
            <FlexContainer>
              <FlexContainer height={40}>ss</FlexContainer>
              <FlexContainer>ss</FlexContainer>
            </FlexContainer>
            <SplitPane split="horizontal" minSize={150}>
              <FlexContainer flexDirection="row">
                <FlexContainer width={80}>ss</FlexContainer>
                <FlexContainer editable>111</FlexContainer>
                <FlexContainer>ss222</FlexContainer>
              </FlexContainer>
              <FlexContainer>SplitPane left</FlexContainer>
            </SplitPane>
          </SplitPane>
        </FlexContainer>
      </FlexContainer>
    );
  }
}
