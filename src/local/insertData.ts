import { DropshippingQueries } from "../endPoints/dropshipping/queries";

export const addChatUser = (data: {
  name?: string;
  email?: string;
  socketid?: string;
}) => {
  let user = {
    name: data.name,
    email: data.email,
    isadmin: 0,
    active: 1,
    socketid: data.socketid,
  };
  DropshippingQueries.addChatUser(user);
};
