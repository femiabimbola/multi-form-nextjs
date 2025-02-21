import useStore from "@/store/useStore";
import { Card, CardContent, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";

type AddOn = {
  id?: any;
  name: string;
  description: string;
  subscription: {
    monthly: {
      price: number;
      type: string;
    };
    yearly: {
      price: number;
      type: string;
    };
  };
};

const normalizeAddOn = (addOn: AddOn, isToggled: boolean) => {
  return {
    id: addOn.id,
    name: addOn.name,
    description: addOn.description,
    price: isToggled ? addOn.subscription.yearly.price : addOn.subscription.monthly.price,
    type: isToggled ? addOn.subscription.yearly.type : addOn.subscription.monthly.type,
  };
};

export const AddonCard = (addOn: any) => {
  const { isToggled, toggleAddOn, unToggledAddOn, selectedAddOns } = useStore((state) => state);

  const isChecked = selectedAddOns.some((item) => item.id === addOn.id);

  const handleAddOn = () => {
    if (isChecked) {
      unToggledAddOn(addOn.id);
    } else {
      toggleAddOn(normalizeAddOn(addOn, isToggled));
    }
  };

  const formattedPrice = isToggled
    ? `+$${addOn?.subscription.yearly.price}/yr`
    : `+$${addOn?.subscription.monthly.price}/mo`;

  return (
    <label>
      <Card className={cn("cursor-pointer hover:", { isChecked: "border border-purple-600 bg-slate-300" })}>
        <CardContent className="flex items-center py-[13px] px-4 w-full justify-between lg:py-4 lg:px-6">
          <div>
            <Checkbox
              id={addOn.id}
              checked={isChecked}
              onCheckedChange={handleAddOn}
            />
            <div>
              <CardTitle className="text-sm lg:text-base font-medium text-blue-500">{addOn.name}</CardTitle>
              <p className="text-xs lg:text-[15px] text-c-neutral-cool-gray">{addOn.description}</p>
            </div>
          </div>
          <div className="text-xs text-c-primary-purplish-blue lg:text-[15px]">{formattedPrice}</div>
        </CardContent>
      </Card>
    </label>
  );
};
