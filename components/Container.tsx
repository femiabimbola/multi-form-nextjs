import { cn } from "@/lib/utils";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

type TContainer = {
  children: React.ReactNode;
  className?: string;
  onNext?: () => void;
  onPreviousStep?: () => void;
};

const Container = ({ children, onNext, onPreviousStep }: TContainer) => {
  return (
    <section
      className={cn(
        "border border-red-300 px-2 py-8 lg:px-[100px] lg:pt-10  lg:flex lg:w-[940px] rounded-[15px] c-shadow absolute top-[103px] lg:static lg:mx-auto left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:mt-[103px] lg:p-4 min-h-[376px] lg:min-h-[600px] lg:gap-[50px]"
      )}
    >
      <Sidebar />
      <div className="w-full mr-[10px] relative ">
        {children}
        <Footer
          onHandleNextStep={onNext}
          onHandlePreviousStep={onPreviousStep}
        />
      </div>
    </section>
  );
};

export default Container;
