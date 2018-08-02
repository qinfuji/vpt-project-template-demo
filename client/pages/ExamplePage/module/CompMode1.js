import key from 'keymaster';

export default {
  namespace: 'comp1',
  state: {
    value: '测试１',
  },
  effects: {
    *message1(_, { put }) {
      // console.log('effects');
      yield put({
        type: 'message',
        payload: {
          value: 'effects ,message',
        },
      });
    },
  },

  reducers: {
    message(state, action) {
      return { ...state, ...action.payload };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({ type: 'message', payload: { value: 'comp1' } });
    },
    // keyEvent({ dispatch }) {
    //   key('⌘+!, ctrl+1', () => {
    //     dispatch({ type: 'message' });
    //   });
    // },
  },
};
