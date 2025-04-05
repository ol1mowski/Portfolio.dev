import { OpinionsType } from "@/types/Opinions.type";
import { ProjectsType } from "@/types/PostType.type";
import { getOpinions, getProjects } from "@/db/Utils/DataFetchingFunctions/DataFetchingFunctions";

export type DataType = 'projects' | 'opinions';

export type FetchedDataType<T extends DataType> = 
  T extends 'projects' ? ProjectsType[] : 
  T extends 'opinions' ? OpinionsType[] : 
  never;

export const useFetchData = async <T extends DataType>(
  type: T,
  errorLogMessage: string
): Promise<FetchedDataType<T> | null> => {
  try {
    let fetchedItems: unknown;

    switch (type) {
      case 'projects':
        fetchedItems = await getProjects();
        break;
      case 'opinions':
        fetchedItems = await getOpinions();
        break;
      default:
        throw new Error(`Nieobsługiwany typ danych: ${type}`);
    }

    if (fetchedItems === null) {
      return null;
    }

    if (!Array.isArray(fetchedItems) || !fetchedItems.length) {
      throw new Error("Brak danych z serwera.");
    }

    return fetchedItems as FetchedDataType<T>;
  } catch (error) {
    console.error(errorLogMessage, error);
    return null;
  }
}; 