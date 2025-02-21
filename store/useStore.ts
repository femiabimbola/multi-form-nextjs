import { create } from "zustand";
import createPersonalInfoSlice, { PersonalInfoSlice } from "./slices/personalInfo";
import createPlanSlice, { PlanSlice } from "./slices/planSlice";
import createStepSlice, { StepSlice } from "./slices/createStepSlice";
import createToggleSubscriptionPlan, { ToggleSubcriptionPlanSlice } from "./slices/toggleSubscriptionPlan";
import createAddOnSlice, { AddOnSlice } from "./slices/addOnSlice";

const useStore = create<PersonalInfoSlice & PlanSlice & StepSlice & ToggleSubcriptionPlanSlice & AddOnSlice>(
  (...a) => ({
    ...createPersonalInfoSlice(...a),
    ...createPlanSlice(...a),
    ...createStepSlice(...a),
    ...createToggleSubscriptionPlan(...a),
    ...createAddOnSlice(...a),
  })
);

export default useStore;
