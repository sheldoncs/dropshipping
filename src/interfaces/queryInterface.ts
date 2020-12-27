export interface UserInterface {
  id?: number;
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  addr1: string;
  addr2: string;
  zip: String;
  country: string;
  isGoogle: number;
}
export interface chatClientInterface {
  id?: number;
  name: string;
  email: string;
  isadmin: number;
  socketid: string;
}
