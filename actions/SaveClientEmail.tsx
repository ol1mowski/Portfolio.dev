import { saveClientToDB } from "@/db/db_connect";
import { redirect } from "next/navigation";

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
  saveClientToDB({ name: name, email: email });
  redirect("/");
};
