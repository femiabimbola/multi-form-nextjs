import { addOns } from "@/data";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import { AddonCard } from "../AddonCard";

const SectionProps = {
  title: "Pick an Addon",
  description: "Add-ons help enhance your experience. ",
};

export const Addons = () => {
  return (
    <Container>
      <SectionHeader {...SectionProps} />
      <section>
        {addOns.map((addOn) => (
          <AddonCard key={addOn.id} />
        ))}
      </section>
    </Container>
  );
};
