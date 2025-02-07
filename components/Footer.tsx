import useStore from "@/store/useStore";
import { Button } from "./ui/button";

interface FooterProps {
  className?: string;
  onHandleNextStep?: () => void;
  onHandlePreviousStep?: () => void;
}

const Footer = ({ className, onHandleNextStep, onHandlePreviousStep }: FooterProps) => {
  const step = useStore((state) => state.step);
  return (
    <footer>
      {step === 1 && <div className="w-full" />}{" "}
      {step > 1 && (
        <Button
          variant="ghost"
          className="text-c-neutral-cool-gray hover:text-c-primary-marine-blue"
          onClick={onHandlePreviousStep}
        >
          Go Back
        </Button>
      )}
    </footer>
  );
};

export default Footer;
