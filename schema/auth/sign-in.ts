import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Invalid email address",
      required_error: "Email is required",
    })
    .email(),
  password: z.string({
    required_error: "Password is required",
  }),
});

export type SignInInput = z.infer<typeof signInSchema>;
