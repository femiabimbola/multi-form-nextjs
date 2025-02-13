import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import useStore from "@/store/useStore";

const PlanCard = ({ item, onClick }: any) => {
  // const { isToggled, plan } = useStore((state) => state);
  let imgSrc = "";
  let alt = "";

  switch (item?.name) {
    case "Arcade":
      imgSrc = "/images/icon-arcade.svg";
      alt = item?.name;
      break;
    case "Advanced":
      imgSrc = "/images/icon-advanced.svg";
      alt = item?.name;
    case "Pro":
      imgSrc = "/images/icon-pro.svg";
      alt = item?.name;
    default:
      break;
  }

  const monthlyPrice = `$${item.subscription.monthly?.price}/mo`;
  const yearlyPrice = `$${item.subscription.yearly?.price}/yr`;
  const trails = item.subscription.yearly?.trails;

  return (
    <Card className={cn("cursor-pointer")}>
      <CardContent>
        <div className="relative w-10 h-10 lg:mb-[39px]">
          <Image
            src={imgSrc}
            alt={alt}
            fill
          />
        </div>
        <div className="flex flex-col gap-[7px]">
          <CardTitle className="text-base font-medium text-c-primary-marine-blue">{item?.name}</CardTitle>
          {/* <p className="text-sm text-c-neutral-cool-gray">{isToggled ? yearlyPrice : monthlyPrice}</p> */}
          <p className="text-sm text-c-neutral-cool-gray">{yearlyPrice}</p>
          <p className="text-xs text-c-primary-marine-blue">{trails}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanCard;
