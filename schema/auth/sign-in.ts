import { z } from "zod";

export const signInSchema = z.object({
  username: z
    .string({
      invalid_type_error: "Invalid username address",
      required_error: "Username is required",
    })
    .email(),
  password: z.string({
    required_error: "Password is required",
  }),
});

export type SignInInput = z.infer<typeof signInSchema>;
