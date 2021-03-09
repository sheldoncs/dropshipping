import { OrderInterface } from "../../../interfaces/queryInterface";
import { Queries } from "../../../endPoints/queries";

export const addOrders = async (root: any, payload: OrderInterface) => {
  const findProfile = await Queries.DropshippingQueries.getOrderList(
    payload.orderid
  );

  if (findProfile.length == 0) {
    console.log("payload", payload, findProfile.length);
    await Queries.DropshippingQueries.addOrder([
      {
        ...payload,
      },
    ]);

    const Order = {
      ...payload,
    };

    const message = `Order #, ${payload.orderid} created successfully`;
    return { message, Order };
  } else {
    const message = `Order already exists`;
    return { message };
  }
};

export const getOrderList = async (root: any, args: { orderid: number }) => {
  const orders = await Queries.DropshippingQueries.getOrderList(args.orderid);
  return orders;
};
