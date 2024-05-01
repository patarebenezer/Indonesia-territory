import { ApiResponseSuccess } from "./api";

export type GetProvinceResponse = ApiResponseSuccess<ProvinceType>;
export type GetRegencyResponse = ApiResponseSuccess<RegencyType>;
export type GetSubDistrictResponse = ApiResponseSuccess<SubDistrictType[]>;

export type ProvinceType = Partial<{
 id: string;
 name: string;
}>;

export type RegencyType = Partial<{
 kodekabupaten: string;
 province_id: string;
 namakabupaten: string;
}>;

export type SubDistrictType = Partial<{
 id: string;
 regency_id?: string;
 name: string;
}>;
