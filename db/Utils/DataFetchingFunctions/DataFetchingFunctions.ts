import { Projects } from "../../Schemas/Projects";
import { Opinions } from "../../Schemas/Opinions";
import { dbConnect } from "../../db_connect";
import { Document } from "mongoose";
import { ProjectsType } from "@/types/PostType.type";
import { OpinionsType } from "@/types/Opinions.type";

interface ClientData {
  name: string;
  email: string;
}

interface CustomerDocument extends Document {
  name: string;
  email: string;
  createdAt: Date;
}

export async function getOpinions(): Promise<OpinionsType[] | null> {
  try {
    await dbConnect();
    const data = await Opinions.find().lean().exec();
    return data as unknown as OpinionsType[];
  } catch (error) {
    console.error("Error fetching opinions:", error);
    return null;
  }
}

export async function getProjects(): Promise<ProjectsType[] | null> {
  try {
    await dbConnect();
    const data = await Projects.find().lean().exec();
    return data as unknown as ProjectsType[];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return null;
  }
}

export async function getPosts(): Promise<any[] | null> {
  try {
    await dbConnect();
    const { Posts } = require("../../Schemas/Posts");
    const data = await Posts.find().lean().exec();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}

export async function saveClientToDB({ name, email }: ClientData): Promise<CustomerDocument> {
  try {
    await dbConnect();
    const { Customers } = require("../../Schemas/Clients");

    const existingCustomer = await Customers.findOne({ 
      email: email.trim() 
    }).lean();
    
    if (existingCustomer) {
      return existingCustomer as CustomerDocument;
    }

    const newCustomer = new Customers({
      name: name.trim(),
      email: email.trim(),
      createdAt: new Date()
    });

    const savedCustomer = await newCustomer.save();
    return savedCustomer as CustomerDocument;
  } catch (error) {
    console.error("Error in saveClientToDB:", error);
    throw error;
  }
}
