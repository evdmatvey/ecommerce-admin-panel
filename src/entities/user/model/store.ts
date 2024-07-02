import { create } from 'zustand';
import { authService } from '../api/auth.service';
import { User } from './types';

const setAuthenticated = () => {
  if (window) window.localStorage.setItem('isAuthenticated', 'true');
};

const getAuthenticated = () => {
  if (window)
    return window.localStorage.getItem('isAuthenticated') ? true : false;

  return false;
};

const removeAuthenticated = () => {
  if (window) return window.localStorage.removeItem('isisAuthenticated');
};

interface UserStore {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  fetchUser: () => void;
  logoutUser: () => Promise<boolean | undefined>;
}

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  isAuthenticated: getAuthenticated(),
  setUser: (user) => set(() => ({ user })),
  setIsAuthenticated: (isAuthenticated) => {
    setAuthenticated();
    set(() => ({ isAuthenticated }));
  },
  fetchUser: async () => {
    try {
      const user = await authService.authMe();

      setAuthenticated();
      set({ user, isAuthenticated: true });
    } catch (error) {
      set({ user: null, isAuthenticated: false });
    }
  },
  logoutUser: async () => {
    try {
      const logoutResult = await authService.logout();

      if (!logoutResult) return;

      removeAuthenticated();
      set({ user: null, isAuthenticated: false });

      return logoutResult;
    } catch (error) {
      return false;
    }
  },
}));

export const selectUser = (state: UserStore) => state.user;
export const selectIsAuthenticated = (state: UserStore) =>
  state.isAuthenticated;
export const selectSetUser = (state: UserStore) => state.setUser;
export const selectSetIsAuthenticated = (state: UserStore) =>
  state.setIsAuthenticated;
export const selectFetchUser = (state: UserStore) => state.fetchUser;
export const selectLogoutUser = (state: UserStore) => state.logoutUser;
