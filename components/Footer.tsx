interface FooterProps {
  className?: string;
  onHandleNextStep?: () => void;
  onHandlePreviousStep?: () => void;
}

const Footer = ({ className, onHandleNextStep, onHandlePreviousStep }: FooterProps) => {
  return <div> Footer</div>;
};

export default Footer;
