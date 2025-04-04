import { ClientData, ClientResponse } from './client.types';


export const saveClient = async (clientData: ClientData): Promise<ClientResponse> => {
  try {
    const { dbConnect } = await import('@/db/db_connect');
    await dbConnect();
    
    const { Customers } = await import('@/db/Schemas/Clients');

    const existingCustomer = await Customers.findOne({ 
      email: clientData.email.trim() 
    }).lean();
    
    if (existingCustomer) {
      return existingCustomer as ClientResponse;
    }

    const newCustomer = new Customers({
      name: clientData.name.trim(),
      email: clientData.email.trim(),
      createdAt: new Date()
    });

    const savedCustomer = await newCustomer.save();
    return savedCustomer as ClientResponse;
  } catch (error) {
    console.error("Error in saveClient:", error);
    throw error;
  }
}; 