import { deleteData } from "./api";

export const DeletePizzaData = async (pizzaId) => {
    try {
    const response = await deleteData(`/Pizza/${pizzaId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting pizza:', error);
    throw error;
  }
};
