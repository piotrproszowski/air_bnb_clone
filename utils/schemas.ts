import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name should be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name should be at least 2 characters" }),
  userName: z
    .string()
    .min(2, { message: "User name should be at least 2 characters" }),
});

export function validateWithZodSchema<T>(schema: ZodSchema<T>, data: unknown) {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
}
