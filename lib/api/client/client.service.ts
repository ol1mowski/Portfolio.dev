import { ClientData, ClientResponse, SaveClientResponse } from './client.types';
import { validateClientData } from './client.validator';

export const saveClient = async (clientData: ClientData): Promise<SaveClientResponse> => {
  try {
    const validationResult = validateClientData(clientData);
    if (!validationResult.isValid) {
      return {
        success: false,
        error: validationResult.error
      };
    }

    const sanitizedData = {
      name: clientData.name.trim(),
      email: clientData.email.toLowerCase().trim()
    };

    const { dbConnect } = await import('@/db/db_connect');
    await dbConnect();
    
    const { Customers } = await import('@/db/Schemas/Clients');

    const existingCustomer = await Customers.findByEmail(sanitizedData.email);
    
    if (existingCustomer) {
      return {
        success: true,
        client: existingCustomer.toObject() as ClientResponse
      };
    }

    const newCustomer = new Customers({
      name: sanitizedData.name,
      email: sanitizedData.email
    });

    const savedCustomer = await newCustomer.save();
    
    return {
      success: true,
      client: savedCustomer.toObject() as ClientResponse
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes('duplicate key error')) {
      return {
        success: false,
        error: 'Email already exists'
      };
    }
    
    console.error("Error in saveClient:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unexpected error occurred'
    };
  }
}; 