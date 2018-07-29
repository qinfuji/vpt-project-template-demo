import { Module } from 'cerebral';
import HttpProvider from '@cerebral/http';
import { set } from 'cerebral/operators';
import { state } from 'cerebral/tags';
import model from './model';
import { isContributor } from './computed';
import { isPatron, isLoggedIn, hasLogIn } from './getters';
import router from './router';

export default Module({
  model,
  state: {
    hasLoadedApp: false,
    jwt: null,
    isAuthenticating: true,
    authToken: null,
    error: null,
    user: null,
    connected: true,
    notifications: [],
    maxStorage: 0,
    usedStorage: 0,

    currentPage: 'home',
  },
  getters: {
    isPatron,
    isLoggedIn,
    hasLogIn,
  },
  computed: {
    isContributor,
  },
  signals: {
    homeRouted: set(state`currentPage`, 'home'),
    itemsRouted: set(state`currentPage`, 'items'),
  },
  providers: {
    http: HttpProvider(),
  },
  catch: [],
  modules: {},
  router,
});
