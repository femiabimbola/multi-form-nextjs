import useStore from "@/store/useStore";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import { plans } from "@/data";
import PlanCard from "../PlanCard";
import { Filter } from "../Filter";

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
      <section className="flex flex-col gap-3 lg:flex-row lg:gap-4 w-full">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            item={plan}
            onClick={() => {}}
          />
        ))}
      </section>
      <Filter />
    </Container>
  );
};
