import { cn } from "@/lib/utils";
import useStore from "@/store/useStore";

type Pointer = {
  stepNumber: number;
  smallTitle?: string;
  sectionTitle?: string;
};

const Pointer = ({ stepNumber = 1, smallTitle = "", sectionTitle = "" }: Pointer) => {
  const step = useStore((state) => state.step);

  return (
    <section className="uppercase flex items-center gap-4">
      <p
        className={cn(
          "w-[33px] h-[33px] rounded-full flex items-center justify-center text-sm font-bold text-white bg-blue-800 ",
          {
            "bg-blue-500 text-white ": stepNumber === step,
          }
        )}
      >
        {stepNumber}
      </p>
      <div className="flex flex-col">
        <p className="text-xs text-blue-950">{smallTitle}</p>
        <p className="text-sm text-white font-bold">{sectionTitle}</p>
      </div>
    </section>
  );
};

export default Pointer;
