import { createStore } from 'easy-peasy';
import auth, { AuthStore } from '@/store/auth';

export interface ApplicationStore {
  auth: AuthStore;
}

const state: ApplicationStore = {
  auth,
};

export default createStore(state);
