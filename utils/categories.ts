import { IconType } from "react-icons/lib";
import { MdCabin } from "react-icons/md";

import { TbCaravan, TbTent, TbBuildingCottage } from "react-icons/tb";

import { GiWoodCabin, GiMushroomHouse } from "react-icons/gi";
import { PiWarehouse, PiLighthouse } from "react-icons/pi";

import { GoContainer } from "react-icons/go";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

type CategoryLabel =
  | "Cabin"
  | "Caravan"
  | "Tent"
  | "Cottage"
  | "House"
  | "Warehouse"
  | "Lighthouse"
  | "Caravan"
  | "Container"
  | "Airstream"
  | "Tiny"
  | "Magic"
  | "Warehouse"
  | "Lodge";

export const categories: Category[] = [
  { label: "Cabin", icon: MdCabin },
  { label: "Caravan", icon: TbCaravan },
  { label: "Tent", icon: TbTent },
  { label: "Cottage", icon: TbBuildingCottage },
  { label: "House", icon: GiWoodCabin },
  { label: "Warehouse", icon: PiWarehouse },
  { label: "Lighthouse", icon: PiLighthouse },
  { label: "Container", icon: GoContainer },
  { label: "Airstream", icon: GiMushroomHouse },
  { label: "Tiny", icon: GiMushroomHouse },
  { label: "Magic", icon: GiMushroomHouse },
  { label: "Warehouse", icon: PiWarehouse },
  { label: "Lodge", icon: GiMushroomHouse },
];
