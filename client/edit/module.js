export default {
  namespace: 'ideState',
  state: {
    currentModal: null,
  },
  effects: {},

  reducers: {
    closeModal(state) {
      return { ...state, currentModal: null };
    },
    openModal(state, action) {
      return { ...state, currentModal: action.payload };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      //dispatch({ type: 'message', payload: { value: 'comp2' } });
    },
  },
};
