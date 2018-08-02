import key from 'keymaster';

export default {
  namespace: 'comp2',
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
      dispatch({ type: 'message', payload: { value: 'comp2' } });
    },
    // keyEvent({ dispatch }) {
    //   key('⌘+!, ctrl+z', () => {
    //     dispatch({ type: 'message' });
    //   });
    // },
  },
};
