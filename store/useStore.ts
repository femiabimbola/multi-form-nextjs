import { create } from "zustand";
import { PersonalInfoSlice } from "./slices/personalInfo";
import createPersonalInfoSlice from "./slices/personalInfo";
import createPlanSlice from "./slices/planSlice";
import { PlanSlice } from "./slices/planSlice";
import createStepSlice from "./slices/createStepSlice";
import { StepSlice } from "./slices/createStepSlice";

const useStore = create<PersonalInfoSlice & PlanSlice & StepSlice>((...a) => ({
  ...createPersonalInfoSlice(...a),
  ...createPlanSlice(...a),
  ...createStepSlice(...a),
}));

export default useStore;
