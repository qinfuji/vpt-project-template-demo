import key from 'keymaster';

export default {
  namespace: 'test',
  state: {
    value: '测试１',
  },
  effects: {},

  reducers: {
    message(state, action) {
      return { ...state, ...action.payload };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({ type: 'message', payload: { value: 'qinfuji' } });
    },
    keyEvent({ dispatch }) {
      key('⌘+!, ctrl+z', () => {
        dispatch({ type: 'message' });
      });
    },
  },
};
