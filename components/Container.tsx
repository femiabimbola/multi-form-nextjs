import Sidebar from "./Sidebar";

const sectionStyles =
  "w-80  px-6 py-8 lg:px-[100px] lg:pt-10 bg-c-neutral-white lg:flex lg:w-[940px] rounded-[15px] c-shadow absolute top-[103px] lg:static lg:mx-auto left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:mt-[103px] lg:p-4 min-h-[376px] lg:min-h-[600px] lg:gap-[100px]";

type TContainer = {
  children: React.ReactNode;
  className?: string;
  onNext?: () => void;
  onPreviousStep?: () => void;
};

const Container = ({ children }: TContainer) => {
  return (
    <section className={sectionStyles}>
      <Sidebar />
      <div className="w-full mr-[80px] relative">{children}</div>
    </section>
  );
};

export default Container;
