import React, { Component } from 'react';
import PrivateRoute from '../../common/components/AuthorizedRoute';
import RouterSwitch from '../../common/components/RouterSwitch';
import FlexContainer from '../../common/components/FlexContainer';
import SplitPane from '../../common/components/SplitPane';
import Header from '../../components/Header';

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
        <Header />
        <FlexContainer>
          <SplitPane split="vertical" minSize={200}>
            <FlexContainer>
              <FlexContainer height={40} style={{ backgroundColor: '#2d2d2d' }}>
                Title
              </FlexContainer>
              <FlexContainer>我是菜单</FlexContainer>
            </FlexContainer>
            <FlexContainer>
              <FlexContainer>
                <FlexContainer
                  height={40}
                  style={{ backgroundColor: '#2d2d2d' }}
                >
                  我是Tab层
                </FlexContainer>
                <FlexContainer flexDirection="row">
                  <FlexContainer>aaa</FlexContainer>
                  <FlexContainer>bbb</FlexContainer>
                  <FlexContainer>ccc</FlexContainer>
                  <FlexContainer>ddd</FlexContainer>
                  <FlexContainer>eee</FlexContainer>
                </FlexContainer>
              </FlexContainer>
            </FlexContainer>
          </SplitPane>
        </FlexContainer>
      </FlexContainer>
    );
  }
}
