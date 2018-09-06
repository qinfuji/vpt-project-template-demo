import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../../common/components/Container';
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
      <Container>
        <Container>我是头</Container>
        <Container>
          <SplitPane split="vertical" minSize={50} defaultSize={100}>
            <div>
              <Container>我是左边</Container>
            </div>
            <div>
              <Container>
                <Switch>
                  <Route path="/aaa" component={A} />
                  <Route path="/aaa" component={B} />
                </Switch>
              </Container>
            </div>
          </SplitPane>
        </Container>
      </Container>
    );
  }
}
