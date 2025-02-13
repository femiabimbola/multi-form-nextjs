import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const PlanCard = ({ item, onClick }: any) => {
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
      </CardContent>
    </Card>
  );
};

export default PlanCard;
