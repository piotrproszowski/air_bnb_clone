"use server";

import { profileSchema } from "./schemas";

export async function createProfileAction(
  prevState: unknown,
  formData: FormData,
) {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    console.log(validatedFields);
    return { message: "Profile created successfully" };
  } catch (error) {
    console.error(error);
    return { message: `There was an error: ${error}` };
  }
}
