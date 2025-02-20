import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import useStore from "@/store/useStore";

const PlanCard = ({ item, onClick }: any) => {
  const { isToggled, plan } = useStore((state) => state);
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
    <Card
      className={cn("cursor-pointer w-full")}
      onClick={onClick}
    >
      <CardContent className="w-full lg:pt-5 flex items-center h-full gap-[14px] p-4 lg:flex-col lg:items-start">
        <div className="relative w-10 h-10 lg:mb-[39px]">
          <Image
            src={imgSrc}
            alt={alt}
            fill
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <CardTitle className="text-base font-medium ">{item?.name}</CardTitle>
          <p className="text-sm text-grey">{isToggled ? yearlyPrice : monthlyPrice}</p>
          {isToggled && <p className="text-xs text-c-primary-marine-blue">{trails}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanCard;
