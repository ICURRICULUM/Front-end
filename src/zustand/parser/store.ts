import { create } from 'zustand';

import { CourseState } from './type';

export const useCourseStore = create<CourseState>((set) => ({
  courseCodes: [],
  setCourseCodes: (codes) => set({ courseCodes: codes }),
}));
