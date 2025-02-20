import Pointer from "./Pointer";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:w-[274px] lg:h-[568px] lg:flex-col lg:flex-shrink-0 rounded-lg lg:bg-[url('/images/bg-sidebar-desktop.svg')] lg:px-8 pt-10 lg:gap-8">
      <Pointer
        stepNumber={1}
        smallTitle="Step 1"
        sectionTitle="Your Info"
      />
      <Pointer
        stepNumber={2}
        smallTitle="Step 2"
        sectionTitle="Select Plan"
      />
      <Pointer
        stepNumber={3}
        smallTitle="Step 3"
        sectionTitle="Chose your addon"
      />
    </aside>
  );
};

export default Sidebar;
