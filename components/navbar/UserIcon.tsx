import { fetchProfileImage } from "@/utils/actions";
import { LuUser2 } from "react-icons/lu";
import Image from "next/image";

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();
  return profileImage ? (
    <Image
      src={profileImage}
      alt='User profile image'
      width={24}
      height={24}
      className='w-6 h-6 rounded-full object-cover'
    />
  ) : (
    <LuUser2 className='w-6 h-6 bg-primary rounded-full text-white' />
  );
};

export default UserIcon;
