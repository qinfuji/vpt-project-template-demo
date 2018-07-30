import { Module } from 'cerebral';
//import { set } from 'cerebral/operators';
//import { state, props } from 'cerebral/tags';
import * as actions from './actions';
//import * as sequences from './sequences';

export default Module(module => {
  //const moduleName = module.name;
  //const modulePath = module.path;
  console.log('myfirstpage module info--->', module);
  return {
    model: {},
    state: {
      value: 'BBB',
    },
    signals: {
      setValue: [actions.setValue],
    },
  };
});
