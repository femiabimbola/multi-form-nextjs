"use client";

import { PersonalInfo } from "@/components/steps/PersonalInfo";
import { Plan } from "@/components/steps/Plan";
import useStore from "@/store/useStore";

const Home = () => {
  const { step } = useStore((state) => state);

  return (
    <main>
      {step === 1 && <PersonalInfo />}
      {step === 2 && <Plan />}
    </main>
  );
};

export default Home;
