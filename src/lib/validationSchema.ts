import { z } from "zod";

export const validationSchema = z.object({
    FullName: z.string().min(1, 'Full Name is required'),
  Email: z.string().email('Invalid email address'),
  Phone: z.string().min(10, 'Phone Number must be at least 10 digits').regex(/^\d{10,}$/, "Phone number must be at least 10 digits"),
  StreetAddress: z.string().min(1, 'Street Address is required'),
  City: z.string().min(1, 'City is required'),
  Zip: z.string().min(5, 'Zip Code must be at least 5 digits').regex(/^\d+$/, 'Zip Code must be numbers'),
  Username: z
  .string()
  .min(4, "Username must be at least 4 characters"),
 
Password: z
  .string()
  .min(6, "Password must be at least 6 characters"),
  
  ConfirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
}).refine((data) => data.Password === data.ConfirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword'],
})