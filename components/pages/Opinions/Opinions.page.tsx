import s from "./Opinions.page.module.scss";

import Opinion from "./Opinion/Opinion.component";
import OpinionHeader from "./OpinionHeader/OpinionHeader.component";
import SectionName from "./SectionName/SectionName.component";
import OpinionsWrapper from "./OpinionsWrapper/OpinionsWrapper.component";

import { getOpinions } from "@/db/Utils/DataFetchingFunctions/DataFetchingFunctions";
import { type OpinionsType } from "@/types/Opinions.type";

export default async function Opinions() {
  let opinionsData: OpinionsType[] | null = null;

  try {
    const fetchedItems = (await getOpinions()) as OpinionsType[];

    if (!Array.isArray(fetchedItems) || !fetchedItems.length) {
      throw new Error("No data received from the server.");
    }

    opinionsData = fetchedItems;
  } catch (error) {
    console.error("Error fetching Opinions data:", error);
  }

  if (!opinionsData) {
    return <p>Error loading Opinions section.</p>;
  }

  const res = opinionsData[0].opinions;

  return (
    <section 
      id="opinions" 
      className={s.container}
      role="contentinfo"
      aria-label="Opinie klientów"
    >
      <SectionName />
      <OpinionHeader />
      <OpinionsWrapper>
        {res.map((opinion, index) => (
          <Opinion key={index} opinion={opinion} />
        ))}
      </OpinionsWrapper>
    </section>
  );
}