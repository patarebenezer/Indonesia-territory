import { useQuery } from "@tanstack/react-query";
import { TerritoryQueries } from "./territory.queries";

export const useProvincesData = () => {
 return useQuery({
  ...TerritoryQueries.provinces(),
 });
};
