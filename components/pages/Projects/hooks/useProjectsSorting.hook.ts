import { ProjectType } from "@/types/PostType.type";
import { monthsMap } from "@/consts/Date";

export const useProjectsSorting = () => {
  const sortProjectsByDate = (projects: ProjectType[]): ProjectType[] => {
    return [...projects].sort((a, b) => {
      const [monthA, yearA] = a.date.toLowerCase().split(' ');
      const [monthB, yearB] = b.date.toLowerCase().split(' ');
      
      const dateA = new Date(parseInt(yearA), monthsMap[monthA]);
      const dateB = new Date(parseInt(yearB), monthsMap[monthB]);
      
      return dateB.getTime() - dateA.getTime();
    });
  };

  return { sortProjectsByDate };
}; 