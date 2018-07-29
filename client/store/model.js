import { types } from 'mobx-state-tree';

export default {
  hasLoadedApp: types.boolean,
  jwt: types.maybeNull(types.string),
  isAuthenticating: types.boolean,
  authToken: types.maybeNull(types.string),
  error: types.maybeNull(types.string),
  user: types.maybeNull(
    types.model({
      avatarUrl: types.maybeNull(types.string),
      name: types.maybeNull(types.string),
      username: types.maybeNull(types.string),
      email: types.maybeNull(types.string),
      id: types.maybeNull(types.string),
      integrations: types.model({
        github: types.maybeNull(
          types.model({
            email: types.maybeNull(types.string),
          })
        ),
      }),
    })
  ),
  notifications: types.array(
    types.model({
      buttons: types.array(types.string),
      endTime: types.number,
      id: types.number,
      notificationType: types.string,
      title: types.string,
    })
  ),
  maxStorage: types.number,
  usedStorage: types.number,
};
