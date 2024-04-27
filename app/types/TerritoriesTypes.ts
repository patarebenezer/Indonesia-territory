import { ApiResponseSuccess } from "./api";

export type GetProvinceResponse = ApiResponseSuccess<ProvinceType>;
export type GetKabupatenResponse = ApiResponseSuccess<KabupatenType>;
export type GetKecamatanResponse = ApiResponseSuccess<KecamatanType>;

export type ProvinceType = Partial<{
 kodeprovinsi: string;
 namaprovinsi: string;
}>;

export type KabupatenType = Partial<{
 kodekabupaten: string;
 kodeprovinsi: string;
 namakabupaten: string;
}>;

export type KecamatanType = Partial<{
 datas: {};
 ID: number;
 KODEPOS: number;
 KELURAHAN: string;
 KECAMATAN: string;
 KABUPATEN: string;
 PROVINSI: string;
}>;
