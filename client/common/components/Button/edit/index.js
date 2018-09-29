import Button from '..';
import editable from '../../../../edit/Control/Editable';

export default editable({
  path: 'Button',
  isContainer: false,
  dialog: [{}],
  operations: [
    {
      label: '测试1',
      name: 'test1',
      fn: () => {
        console.log(1);
      },
    },
  ],
})(Button);
