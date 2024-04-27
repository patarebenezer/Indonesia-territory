import { createQueryKeys } from "@lukemorales/query-key-factory";
import {
 getKabupatenData,
 getKecamatanData,
 getProvincesData,
} from "./territory.services";

export const TerritoryQueries = createQueryKeys("TerritoryQueries", {
 provinces: () => ({
  queryFn: () => getProvincesData(),
  queryKey: ["provinces"],
 }),

 kabupaten: () => ({
  queryFn: () => getKabupatenData(),
  queryKey: ["kabupaten"],
 }),

 kecamatan: (kode) => ({
  queryFn: () => getKecamatanData(kode),
  queryKey: ["kecamatan"],
 }),
});
