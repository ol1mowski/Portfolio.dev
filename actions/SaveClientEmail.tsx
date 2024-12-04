import { saveClientToDB } from "../db/Utils/DataFetchingFunctions/DataFetchingFunctions";
import { createAuthSession } from "../lib/auth";

export const saveClientData = async (formData: FormData) => {
  "use server";
  
  try {
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;

    if (!email || !name) {
      throw new Error("Missing required fields");
    }

    // Walidacja email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      throw new Error("Invalid email format");
    }

    // Zapisz do bazy danych
    const savedClient = await saveClientToDB({ 
      name: name.trim(), 
      email: email.trim() 
    });

    if (!savedClient) {
      throw new Error("Failed to save client data");
    }

    // Utwórz sesję
    const sessionResult = await createAuthSession(email, name);
    
    if (!sessionResult.success) {
      throw new Error("Failed to create session");
    }

    console.log("Client saved successfully:", { name, email });
    return { success: true };

  } catch (error) {
    console.error("Error in saveClientData:", error);
    throw error;
  }
};
