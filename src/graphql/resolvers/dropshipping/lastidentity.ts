import { Queries } from "../../../endPoints/queries";
import { lastIdentityInterface } from "../../../interfaces/queryInterface";

export const addLastIdentity = async (
  root: any,
  payload: lastIdentityInterface
) => {
  await Queries.DropshippingQueries.addLastIdentity([
    {
      ...payload,
    },
  ]);
  const lastidentity = {
    ...payload,
  };

  const message = `lastidentity, ${payload.id} created successfully`;
  return { message, lastidentity };
};
export const getMaxIdentity = async () => {
  const maxidentity = await Queries.DropshippingQueries.getMaxIdentity();
  return maxidentity;
};
