"use client";

import { Addons } from "@/components/steps/Addons";
import { PersonalInfo } from "@/components/steps/PersonalInfo";
import { PlanStep } from "@/components/steps/Plan";
import useStore from "@/store/useStore";

const Home = () => {
  const { step } = useStore((state) => state);

  return (
    <main>
      {step === 1 && <PersonalInfo />}
      {step === 2 && <PlanStep />}
      {step === 3 && <Addons />}
    </main>
  );
};

export default Home;
