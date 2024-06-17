export const saveClientEmail = async (formData: FormData) => {
  "use server";
  const email = formData.get("email") as string ;
  let errors: string[] = [];

  if (!email || typeof email !== "string" || email.trim().length === 0) {
    errors.push("Email is required.");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.push("Invalid email format.");
    }
  }

  if (errors.length > 0) {
    throw new Error('Error: ' + { errors })
  }

  try {
    console.log("Saving email:", email.trim());
  } catch (error) {
    throw new Error(
      "Adding to newsletter failed, email was not saved. Please try again later."
    );
  }
};
