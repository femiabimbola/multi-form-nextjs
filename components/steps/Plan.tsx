import useStore from "@/store/useStore";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

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
    decreaseStep(step);
  };

  return (
    <Container
      onNext={onNext}
      onPreviousStep={onPrevious}
    >
      <SectionHeader {...SectionProps} />
    </Container>
  );
};
