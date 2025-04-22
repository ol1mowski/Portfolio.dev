export interface ClientData {
  name: string;
  email: string;
}

export interface ClientResponse {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  createdAt?: Date;
  __v?: number;
  [key: string]: any;
}

export interface SaveClientResponse {
  success: boolean;
  error?: string;
  client?: ClientResponse;
}
