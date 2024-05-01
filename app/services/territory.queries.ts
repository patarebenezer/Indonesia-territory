import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getProvincesData } from "./territory.services";

export const TerritoryQueries = createQueryKeys("TerritoryQueries", {
 provinces: () => ({
  queryFn: () => getProvincesData(),
  queryKey: ["provinces"],
 }),
});
