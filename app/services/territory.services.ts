import { axiosClient } from "./utils/axiosClient";
import { clientEnv } from "../env/client.environment";
import {
 GetProvinceResponse,
 GetRegencyResponse,
 GetSubDistrictResponse,
} from "../types/TerritoriesTypes";

export const getProvincesData = async () => {
 try {
  const response = await axiosClient.get<GetProvinceResponse>(
   `${clientEnv.API_BASE_URL}/api/indonesia/province`
  );
  return response.data;
 } catch (error) {
  throw error;
 }
};

export const getRegencyData = async (id: string) => {
 try {
  const response = await axiosClient.get<GetRegencyResponse>(
   `${clientEnv.API_BASE_URL}/api/indonesia/regency/${id}`
  );

  return response.data;
 } catch (error) {
  throw error;
 }
};

export const getSubDistrictData = async (id: string) => {
 try {
  const response = await axiosClient.get<GetSubDistrictResponse>(
   `${clientEnv.API_BASE_URL}/api/indonesia/subdistrict/${id}`
  );
  return response.data;
 } catch (error) {
  throw error;
 }
};
