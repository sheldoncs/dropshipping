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
export interface OrderInterface {
  id?: number;
  itemid: number;
  categoryid: number;
  orderid: number;
  quantity: number;
  totalprice: number;
  photo: string;
}
export interface chatClientInterface {
  id?: number;
  name: string;
  email: string;
  isadmin: number;
  socketid: string;
}
export interface lastIdentityInterface {
  id?: number;
  lastidentityid: number;
}
