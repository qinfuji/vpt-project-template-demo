import testModule from './pages/ExamplePage/module/test';
import compMode1 from './pages/ExamplePage/module/CompMode1';
import compMode2 from './pages/ExamplePage/module/CompMode2';

const menus = [
  {
    id: '1',
    name: '1',
    title: '我在测试1',
    children: [
      { id: '11', name: '11', title: '子菜单１' },
      { id: '12', name: '12', title: '子菜单2' },
      { id: '13', name: '13', title: '子菜单3' },
      { id: '14', name: '14', title: '子菜单4' },
    ],
  },
  {
    id: '2',
    name: '2',
    title: '我在测试2',
    children: [],
  },
  {
    id: '3',
    name: '3',
    title: '我在测试3',
    children: [],
  },
];

const rootModule = {
  namespace: 'app',
  state: {
    userInfo: null,
    menus: menus,
  },
  effects: {
    *login({ userName, userPassword }, { put }) {
      // // console.log('effects');
      // yield put({
      //   type: 'message',
      //   payload: {
      //     value: 'effects ,message',
      //   },
      // });
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
  },
};

export default [rootModule, testModule, compMode1, compMode2];
