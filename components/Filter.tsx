import useStore from "@/store/useStore";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";

export const Filter = () => {
  const { isToggled, toggleSubscriptionPlan } = useStore((state) => state);
  const initialState = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    type: "",
  };

  const handleClick = (data: boolean) => {
    toggleSubscriptionPlan(data);
  };

  return (
    <div className="bg-[#FAFBFF] flex items-center mt-6 gap-6 rounded-md py-3 justify-center">
      <p className={cn("text-sm", { "text-gray-400": isToggled })}>Monthly</p>
      <Switch
        onClick={() => handleClick(isToggled)}
        checked={isToggled}
      />
      <p className={cn("text-sm", { "text-gray-400": !isToggled })}> Yearly</p>
    </div>
  );
};
