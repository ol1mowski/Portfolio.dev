import { saveClientToDB } from "../db/Utils/DataFetchingFunctions/DataFetchingFunctions";
import { createAuthSession } from "../lib/auth";

export const saveClientData = async (formData: FormData) => {
  "use server";
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  let errors: string[] = [];

  if (!email || typeof email !== "string" || email.trim().length === 0) {
    errors.push("Email is required.");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.push("Invalid email format.");
    }
  }

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    errors.push("Name is required.");
  }

  if (errors.length > 0) {
    throw new Error("Error: " + JSON.stringify(errors));
  }

  console.log("Saving email:", email.trim());
  console.log("Saving name:", name.trim());

  console.log('Environment check:', {
    hasJwtSecret: !!process.env.JWT_SECRET,
    nodeEnv: process.env.NODE_ENV
  });

  saveClientToDB({ name: name, email: email });
  await createAuthSession(email, name);
};
