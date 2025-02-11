import useStore from "@/store/useStore";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
  onHandleNextStep?: () => void;
  onHandlePreviousStep?: () => void;
}

const Footer = ({ className, onHandleNextStep, onHandlePreviousStep }: FooterProps) => {
  const step = useStore((state) => state.step);
  return (
    <footer>
      {step === 1 && <div className="w-full" />}
      {step > 1 && (
        <Button
          variant="ghost"
          className="text-c-neutral-cool-gray hover:text-c-primary-marine-blue"
          onClick={onHandlePreviousStep}
        >
          Go Back
        </Button>
      )}
      <Button
        className={cn("bg-c-primary-marine-blue text-c-neutral-white hover:bg-c-primary-marine-blue-hover", {
          "bg-c-primary-purplish-blue hover:bg-c-primary-purplish-hover": step === 4,
        })}
        onClick={onHandleNextStep}
      >
        {step === 4 ? "Confirm" : "Next Step"}
      </Button>
    </footer>
  );
};

export default Footer;
