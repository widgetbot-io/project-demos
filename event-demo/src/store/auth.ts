import { Action, action, Thunk, thunk } from 'easy-peasy';
import jsonwebtoken from 'jsonwebtoken';

const SECRET = 'supersecretjsonwebtoken';

const users = {
  'mason': {
    name: 'Mason Rogers',
    avatarUrl: '/img/man1.jpg'
  },

  'lewis': {
    name: 'Lewis Tierney',
    avatarUrl: '/img/man1.jpg'
  }
};

export interface UserData {
  username: string;
  name: string;
  avatarUrl: string;
}

export interface AuthStore {
  user?: UserData;
  token?: string;
  setUserData: Action<AuthStore, UserData>;
  setToken: Action<AuthStore, string>;
  logout: Action<AuthStore>;
  login: Thunk<AuthStore, string, any, AuthStore, Promise<boolean>>;
}

const auth: AuthStore = {
  user: undefined,

  setUserData: action((state, payload) => {
    state.user = payload;
  }),

  setToken: action((state, payload) => {
    state.token = payload;
  }),

  logout: action((state) => {
    state.user = undefined;
    state.token = undefined;
  }),

  login: thunk(async (actions, payload) => {
    if (!Object.keys(users).includes(payload)) {
      return false;
    }

    const user = (<any>users)[payload];

    actions.setUserData({
      username: payload,
      name: user.name,
      avatarUrl: user.avatarUrl
    });

    const jwt = jsonwebtoken.sign({
      id: payload,
      username: user.name,
      avatar: `http://localhost:3000/${user.avatarUrl}`
    }, SECRET);

    actions.setToken(jwt);

    return true;
  }),
};

export default auth;
