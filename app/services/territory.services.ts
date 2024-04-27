import { axiosClient } from "./utils/axiosClient";
import { clientEnv } from "../env/client.environment";
import {
 GetKecamatanResponse,
 GetProvinceResponse,
} from "../types/TerritoriesTypes";

export const getProvincesData = async () => {
 try {
  const response = await axiosClient.get<GetProvinceResponse>(
   `${clientEnv.API_BASE_URL}/provinsi`
  );
  return response.data;
 } catch (error) {
  console.error("error", error);
  throw error;
 }
};

export const getKabupatenData = async () => {
 try {
  const response = await axiosClient.get<GetProvinceResponse>(
   `${clientEnv.API_BASE_URL}/kabupaten`
  );
  return response.data;
 } catch (error) {
  console.error("error", error);
  throw error;
 }
};

export const getKecamatanData = async (kode?: string) => {
 try {
  const response = await axiosClient.get<GetKecamatanResponse>(
   `${clientEnv.API_BASE_URL}/kodepos?namakabupaten=${kode}&page=1&size=510`
  );
  console.log("kode", kode);
  console.log("response.data.data", response.data.data);
  return response.data.data;
 } catch (error) {
  console.error("error", error);
  throw error;
 }
};
