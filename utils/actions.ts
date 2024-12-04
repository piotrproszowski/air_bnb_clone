"use server";

import { profileSchema, validateWithZodSchema } from "./schemas";
import db from "./db";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  if (!user.privateMetadata?.hasProfile) redirect("/profile/create");
  return user;
};

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

export async function createProfileAction(
  prevState: unknown,
  formData: FormData,
) {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please login to create a profile");

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validatedFields,
      },
    });
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: { hasProfile: true },
    });
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
  redirect("/");
}

export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profile = await db.profile.findUnique({
    where: { clerkId: user.id },
    select: { profileImage: true },
  });

  return profile?.profileImage;
};

export const fetchProfile = async () => {
  const user = await getAuthUser();
  const profile = await db.profile.findUnique({
    where: { clerkId: user.id },
  });
  if (!profile) redirect("/profile/create");
  return profile;
};

export const updateProfileAction = async (
  prevState: unknown,
  formData: FormData,
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const data = validateWithZodSchema(profileSchema, rawData);

    await db.profile.update({
      where: { clerkId: user.id },
      data,
    });

    revalidatePath("/profile");
    return { message: "Profile updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};