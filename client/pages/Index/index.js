import React, { Component } from 'react';
import PrivateRoute from '../../common/components/AuthorizedRoute';
import RouterSwitch from '../../common/components/RouterSwitch';
import FlexContainer from '../../common/components/FlexContainer';
import SplitPane from '../../common/components/SplitPane';

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
            <FlexContainer id={4}>我是左边21</FlexContainer>
            <FlexContainer id={5}>
              <SplitPane split="horizontal" minSize={50} defaultSize={300}>
                <FlexContainer id={6}>我是上边1</FlexContainer>
                <FlexContainer id={7}>
                  <RouterSwitch>
                    <PrivateRoute path="/aaa" component={A} />
                    <PrivateRoute path="/bbb" component={B} />
                  </RouterSwitch>
                  <FlexContainer id={8}>我是上边8</FlexContainer>
                  <FlexContainer id={9}>我是上边91</FlexContainer>
                  <FlexContainer id={10}>我是上边10</FlexContainer>
                </FlexContainer>
              </SplitPane>
            </FlexContainer>
          </SplitPane>
        </FlexContainer>
        <FlexContainer id={11}>我是上边11</FlexContainer>
      </FlexContainer>
    );
  }
}
