import { CardSignInButton } from "../form/Buttons";
import { auth } from "@clerk/nextjs/server";
import { Actions } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggleButton = async ({ propertyId }: { propertyId: string }) => {
  const { userId } = auth();
  if (!userId) return <CardSignInButton />;
  const favoriteId = await Actions.fetchFavoriteId({ propertyId });
  return (
    <FavoriteToggleForm favoriteId={favoriteId || ""} propertyId={propertyId} />
  );
};

export default FavoriteToggleButton;
