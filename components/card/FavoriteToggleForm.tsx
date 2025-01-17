"use client";
import { usePathname } from "next/navigation";
import FormContainer from "../form/FormContainer";
import { toggleFavoriteAction } from "@/utils/actions";
import { CardSubmitButton } from "../form/Buttons";

type FavoriteToggleFormProps = {
  favoriteId: string;
  propertyId: string | null;
};

const FavoriteToggleForm = ({
  favoriteId,
  propertyId,
}: FavoriteToggleFormProps) => {
  const pathname = usePathname();

  if (!propertyId) {
    return <div>Error: Property ID is required.</div>;
  }

  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};

export default FavoriteToggleForm;
