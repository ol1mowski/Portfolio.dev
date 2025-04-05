export type SingleOpinionType = {
  content: string;
  link: string;
  companyImage: string;
  companyName: string;
};

export type OpinionsType = {
  _id: string;
  opinions: SingleOpinionType[];
};
