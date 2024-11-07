'use server'

import { saveClientToDB } from "@/db/db_connect";
import { createAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function saveClientData(formData: FormData) {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;

  try {
    // Zapisz dane do bazy
    await saveClientToDB({ name, email });
    
    // Utwórz sesję
    const { success, error } = await createAuthSession(email, name);
    
    if (!success) {
      throw new Error(error);
    }

    redirect("/Thanks");
  } catch (error) {
    console.error('Error saving client data:', error);
    throw new Error('Failed to save client data');
  }
} 