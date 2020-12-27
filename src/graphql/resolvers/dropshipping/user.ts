import {
  UserInterface,
  chatClientInterface,
} from "../../../interfaces/queryInterface";
import { Queries } from "../../../endPoints/queries";

export const addUserInfo = async (root: any, payload: chatClientInterface) => {
  const findProfile = await Queries.LoginQueries.getLoginByEmail(payload.email);
  if (!findProfile) {
    await Queries.LoginQueries.addUser([
      {
        ...payload,
      },
    ]);

    const User = {
      ...payload,
    };

    const message = `User, ${payload.email} created successfully`;
    return { message, User };
  } else {
    const message = `User already exists`;
    return { message };
  }
};

export const addChatUser = async (root: any, payload: UserInterface) => {
  console.log(payload.email);
  const findProfile = await Queries.DropshippingQueries.getChatUserByEmail(
    payload.email
  );
  if (!findProfile) {
    await Queries.DropshippingQueries.addChatUser([
      {
        ...payload,
      },
    ]);

    const ChatUser = {
      ...payload,
    };

    const message = `User, ${payload.email} created successfully`;
    return { message, ChatUser };
  } else {
    const message = `User already exists`;
    return { message };
  }
};
