import React, { Component } from 'react';
import PrivateRoute from '../../common/components/AuthorizedRoute';
import RouterSwitch from '../../common/components/RouterSwitch';
import _FlexContainer from '../../common/components/FlexContainer';
import SplitPane from '../../common/components/SplitPane';

import flexEditable from '../../common/components/FlexContainer/edit/index';

const FlexContainer = flexEditable()(_FlexContainer);

const A = () => (
  <div>
    <h2>Home A</h2>
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
      <FlexContainer id={1}>
        <FlexContainer id={2}>我是头</FlexContainer>
        <FlexContainer id={3}>
          <SplitPane split="vertical" minSize={50} defaultSize={300}>
            <FlexContainer id={4}>我是左边</FlexContainer>
            <FlexContainer id={5}>
              <RouterSwitch>
                <PrivateRoute path="/aaa" component={A} />
                <PrivateRoute path="/bbb" component={B} permission="bbb" />
              </RouterSwitch>
            </FlexContainer>
            <FlexContainer id={6}>我是左1边</FlexContainer>
          </SplitPane>
        </FlexContainer>
      </FlexContainer>
    );
  }
}
