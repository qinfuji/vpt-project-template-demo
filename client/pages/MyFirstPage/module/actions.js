import { set } from 'cerebral/operators';
//import { state } from 'cerebral/tags';

export function setValue({ state, props, module }) {
  //hasLoadedApp: false,
  console.log(module.get('value'));
  //module.set('value', 'qinfuji');
  //console.log(state`myFirstPage.value`);
  //set(state`value`, 'qinfuji');
  console.log(state.get('hasLoadedApp'));
  state.set('myFirstPage.value', 'qinfuji111');
}
