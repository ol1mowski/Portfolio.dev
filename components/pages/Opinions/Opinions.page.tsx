import s from "./Opinions.page.module.scss";

import dynamic from 'next/dynamic';
import { getOpinions } from "@/db/Utils/DataFetchingFunctions/DataFetchingFunctions";
import type { OpinionsType } from "@/types/Opinions.type";

const OpinionHeader = dynamic(() => import("./OpinionHeader/OpinionHeader.component"));
const SectionName = dynamic(() => import("./SectionName/SectionName.component"));
const OpinionsWrapper = dynamic(() => import("./OpinionsWrapper/OpinionsWrapper.component"));
const Opinion = dynamic(() => import("./Opinion/Opinion.component"));

export default async function Opinions() {
  try {
    const fetchedItems = await getOpinions();

    if (!fetchedItems?.[0]?.opinions) {
      throw new Error("No opinions data available");
    }

    const opinions = fetchedItems[0].opinions;

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
          {opinions.map((opinion: OpinionsType['opinions'][0], index: number) => (
            <Opinion 
              key={`${opinion.companyName}-${index}`} 
              opinion={opinion} 
            />
          ))}
        </OpinionsWrapper>
      </section>
    );
  } catch (error) {
    console.error("Error fetching Opinions:", error);
    return (
      <div role="alert" className={s.errorMessage}>
        Nie udało się załadować opinii.
      </div>
    );
  }
}