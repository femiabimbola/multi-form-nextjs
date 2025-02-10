import useStore from "@/store/useStore";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import { plans } from "@/data";

const SectionProps = {
  title: "Plan",
  description: "Enter the Plan ",
};

export const Plan = () => {
  const { step, increaseStep, decreaseStep } = useStore((state) => state);

  const onNext = () => {
    // if (!selectedPlan?.id || !plan.name) return;
    increaseStep(step);
  };

  const onPrevious = () => {
    decreaseStep(-1);
    decreaseStep(step);
  };

  return (
    <Container
      onNext={onNext}
      onPreviousStep={onPrevious}
    >
      <SectionHeader {...SectionProps} />
      {plans.map((plan) => (
        <p key={plan.id}> {plan.name}</p>
      ))}
    </Container>
  );
};
