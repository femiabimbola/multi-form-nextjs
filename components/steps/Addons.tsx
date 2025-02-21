import { addOns } from "@/data";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import { AddonCard } from "../AddonCard";
import useStore from "@/store/useStore";

const SectionProps = {
  title: "Pick an Addon",
  description: "Add-ons help enhance your experience. ",
};

export const Addons = () => {
  const { decreaseStep, step } = useStore((state) => state);
  const onPrevious = () => {
    decreaseStep(step);
  };
  return (
    <Container onPreviousStep={onPrevious}>
      <SectionHeader {...SectionProps} />
      <div>
        {addOns.map((addOn) => (
          <AddonCard key={addOn.id} />
        ))}
      </div>
    </Container>
  );
};
