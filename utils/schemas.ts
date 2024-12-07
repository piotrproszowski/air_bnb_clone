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

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const supportedFormats = ["image/"];

  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "File too large or unsupported format")
    .refine((file) => {
      return (
        !file || supportedFormats.some((format) => file.type.startsWith(format))
      );
    }, "Unsupported file format");
}

export const propertySchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name should be at least 2 characters" })
    .max(50, { message: "Name should be at most 50 characters" }),
  tagline: z
    .string()
    .min(2, { message: "tagline should be at least 2 characters" })
    .max(50, { message: "tagline should be at most 50 characters" }),

  price: z.coerce.number().int().min(0, {
    message: "Price should be a positive number",
  }),
  category: z.string(),
  description: z.string().refine(
    (d) => {
      const wordCount = d.trim().split(" ").length;
      return wordCount >= 10 && wordCount <= 200;
    },
    {
      message: "Description should be between 10 and 200 words",
    },
  ),
  country: z.string(),
  guests: z.coerce.number().int().min(0, {
    message: "Guests should be a positive number",
  }),
  bedrooms: z.coerce.number().int().min(0, {
    message: "Bedrooms should be a positive number",
  }),
  beds: z.coerce.number().int().min(0, {
    message: "Beds should be a positive number",
  }),
  baths: z.coerce.number().int().min(0, {
    message: "Baths should be a positive number",
  }),
  amenities: z.string(),
});
