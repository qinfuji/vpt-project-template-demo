import Header from '..';
import editable from '../../../edit/Control/Editable';

export default editable({
  path: 'Header',
  dialog: [{}],
  operations: [
    {
      label: '测试1',
      name: 'test1',
      fn: () => {
        console.log(1);
      },
    },
    {
      label: '测试2',
      name: 'test2',
      fn: () => {
        console.log(2);
      },
    },
    {
      label: '测试3',
      name: 'test3',
      fn: () => {
        console.log(3);
      },
    },
  ],
})(Header);
