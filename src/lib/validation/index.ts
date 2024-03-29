import { z } from "zod"


export const signUpValidation = z.object({
    name: z.string().min(2, { message: "Name is too short"}),
    username: z.string().min(2, { message: "UserName is too short"}).max(50),
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must be at least 8 character"})
  })

  export const signInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must be at least 8 character"})
  })