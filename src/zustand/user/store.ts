import { create } from 'zustand';

import { SignUpState, UserProfile } from './type';

export const useLoggedInStore = create<{
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
}>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (status) => set({ isLoggedIn: status }),
}));

export const useSignUpStore = create<{
  signUpState: SignUpState;
  setSignUpState: (newState: Partial<SignUpState>) => void;
}>((set) => ({
  signUpState: {
    email: '',
    password: '',
  },
  setSignUpState: (newState) =>
    set((state) => ({ signUpState: { ...state.signUpState, ...newState } })),
}));

export const useUserProfileStore = create<{
  userProfile: UserProfile;
  setUserProfile: (newProfile: UserProfile) => void;
}>((set) => ({
  userProfile: {
    email: 'jjinh0213@inha.edu',
    name: '',
    joinYear: 0,
    majorList: [],
  },
  setUserProfile: (newProfile) =>
    set((state) => ({ userProfile: { ...state.userProfile, ...newProfile } })),
}));
