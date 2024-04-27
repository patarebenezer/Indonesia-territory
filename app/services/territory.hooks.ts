import { useQuery } from "@tanstack/react-query";
import { TerritoryQueries } from "./territory.queries";

export const useProvincesData = () => {
 return useQuery({
  ...TerritoryQueries.provinces(),
 });
};

export const useKabupatenData = () => {
 return useQuery({
  ...TerritoryQueries.kabupaten(),
 });
};

export const useKecamatanData = (kode: string) => {
 return useQuery({
  ...TerritoryQueries.kecamatan(kode),
  enabled: kode !== "",
 });
};
