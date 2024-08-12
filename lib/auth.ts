import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { Collection, MongoClient } from "mongodb";
import { cookies } from "next/headers";

interface UserDoc {
  _id: string;
}

interface SessionDoc {
  _id: string;
  expires_at: Date;
  user_id: string;
}

const client = new MongoClient(process.env.DB_URL || "");

async function connectDB() {
  await client.connect();
  return client.db();
}

async function initializeLucia() {
  const db = await connectDB();
  const User = db.collection("Customers") as Collection<UserDoc>;
  const Session = db.collection("sessions") as Collection<SessionDoc>;

  const adapter = new MongodbAdapter(Session, User);

  const lucia = new Lucia(adapter, {
    sessionCookie: {
      name: "session_id",
      expires: false,
    },
  });

  return lucia;
}

export async function createAuthSession(userId: string) {
  const lucia = await initializeLucia();
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}

export async function validateSession() {
  const lucia = await initializeLucia();
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session_id");

  if (!sessionCookie) {
    console.log("No session cookie found.");
    return { valid: false, message: "No session cookie found." };
  }

  try {
    const sessionId = sessionCookie.value;
    const result = await lucia.validateSession(sessionId);
    console.log("Session validation result:", result);

    if (result) {
      return { valid: true, session: result };
    } else {
      return { valid: false, message: "Invalid session." };
    }
  } catch (error) {
    console.error("Error validating session:", error);
    return { valid: false, message: "Error validating session." };
  }
}
