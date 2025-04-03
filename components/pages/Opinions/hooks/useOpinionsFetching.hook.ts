import { OpinionsType } from "@/types/Opinions.type";
import { getOpinions } from "@/db/Utils/DataFetchingFunctions/DataFetchingFunctions";
import { OPINIONS_FETCH_ERROR_LOG } from "../constants/opinions.constants";

export const useOpinionsFetching = async (): Promise<OpinionsType[] | null> => {
  try {
    const fetchedItems = (await getOpinions()) as unknown as OpinionsType[];

    if (!Array.isArray(fetchedItems) || !fetchedItems.length) {
      throw new Error("No data received from the server.");
    }

    return fetchedItems;
  } catch (error) {
    console.error(OPINIONS_FETCH_ERROR_LOG, error);
    return null;
  }
}; 