import { Action, action } from 'easy-peasy';
import jsonwebtoken from 'jsonwebtoken';

const SECRET = 'supersecretjsonwebtoken';

export interface UserData {
  name: string;
  avatarUrl: string;
}

interface LoginData {
  name: string;
  avatarUrl: string;
}

export interface AuthStore {
  user?: UserData;
  token?: string;
  login: Action<AuthStore, LoginData>;
  logout: Action<AuthStore>;
}

const auth: AuthStore = {
  user: undefined,

  login: action((state, payload) => {
    state.user = {
      name: payload.name,
      avatarUrl: payload.avatarUrl,
    };

    state.token = jsonwebtoken.sign({
      id: payload.name,
      username: payload.name,
      avatar: `${window.location.origin}/${payload.avatarUrl}`
    }, SECRET);
  }),

  logout: action((state) => {
    state.user = undefined;
    state.token = undefined;
  }),
};

export default auth;
