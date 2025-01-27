import { create } from "zustand";
import { PersonalInfoSlice } from "./slices/personalInfo";
import createPersonalInfoSlice from "./slices/personalInfo";

const useStore = create<PersonalInfoSlice>((...a) => ({
  ...createPersonalInfoSlice(...a),
}));

export default useStore;
