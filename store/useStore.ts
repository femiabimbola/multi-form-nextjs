import { create } from "zustand";
import createPersonalInfoSlice, { PersonalInfoSlice } from "./slices/personalInfo";
import createPlanSlice, { PlanSlice } from "./slices/planSlice";
import createStepSlice, { StepSlice } from "./slices/createStepSlice";
import createToggleSubscriptionPlan, { ToggleSubcriptionPlanSlice } from "./slices/toggleSubscriptionPlan";

const useStore = create<PersonalInfoSlice & PlanSlice & StepSlice & ToggleSubcriptionPlanSlice>((...a) => ({
  ...createPersonalInfoSlice(...a),
  ...createPlanSlice(...a),
  ...createStepSlice(...a),
  ...createToggleSubscriptionPlan(...a),
}));

export default useStore;
