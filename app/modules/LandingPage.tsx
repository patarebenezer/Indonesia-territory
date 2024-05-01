"use client";
import { useState } from "react";
import {
 ProvinceType,
 RegencyType,
 SubDistrictType,
} from "../types/TerritoriesTypes";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { Alert, Card } from "antd";
import {
 getRegencyData,
 getSubDistrictData,
} from "../services/territory.services";
import { useProvincesData } from "../services/territory.hooks";
import { ApiResponseError } from "../types/api";
import SelectTerritory from "../components/SelectTerritory";

export default function LandingPage() {
 const [selectedProvince, setSelectedProvince] = useState("");
 const [selectedRegency, setSelectedRegency] = useState("");
 const [selectedSubDistrict, setSelectedSubDistrict] = useState("");

 const { data: province, isLoading: isLoadingProvince } = useProvincesData();

 const filterOption = (
  input: string,
  option?: { label: string; value: string }
 ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

 const onChangeProvince = (value: string) => {
  getRegencyDataDetail.mutate(value);
  setSelectedProvince(value);
  setSelectedRegency("");
  setSelectedSubDistrict("");
 };

 const onChangeRegency = (value: string) => {
  getSubDistrictDetail.mutate(value);
  setSelectedRegency(value);
  setSelectedSubDistrict("");
 };

 const onChangeSubDistrict = (value: string) => {
  setSelectedSubDistrict(value);
 };

 const getRegencyDataDetail = useMutation({
  mutationFn: getRegencyData,
  onError: (error: AxiosError<ApiResponseError>) => {
   const messageError = error.response?.data.message;
   toast.error(messageError, { position: "top-right" });
  },
 });

 const getSubDistrictDetail = useMutation({
  mutationFn: getSubDistrictData,
  onError: (error: AxiosError<ApiResponseError>) => {
   const messageError = error.response?.data.message;
   toast.error(messageError, { position: "top-right" });
  },
 });

 const optionsProvinsi = Array.isArray(province)
  ? province?.map((item: ProvinceType) => {
     return {
      value: item?.id as string,
      label: item?.name as string,
     };
    })
  : [];

 const optionsRegency = Array.isArray(getRegencyDataDetail.data)
  ? getRegencyDataDetail.data
     .filter(
      (regency: RegencyType) => regency?.province_id === selectedProvince
     )
     .map((item) => ({
      value: item?.id,
      label: item?.name,
     }))
  : [];

 const optionsSubDistrict = Array.isArray(getSubDistrictDetail.data)
  ? getSubDistrictDetail.data
     .filter(
      (subdistrict: SubDistrictType) =>
       subdistrict?.regency_id === selectedRegency
     )
     .map((item) => ({
      value: item?.id,
      label: item?.name,
     }))
  : [];

 return (
  <Card
   title='Indonesia Territory'
   style={{ width: 300, margin: "0 auto", marginTop: 150 }}
  >
   <SelectTerritory
    type='Province'
    isLoading={isLoadingProvince}
    options={optionsProvinsi}
    onChange={onChangeProvince}
    filterOption={filterOption}
    placeholder='Select Province'
   />

   <SelectTerritory
    type='Regency'
    isLoading={getRegencyDataDetail?.isLoading}
    options={optionsRegency}
    onChange={onChangeRegency}
    filterOption={filterOption}
    placeholder='Select Regency'
   />

   <SelectTerritory
    type='Sub Regency'
    isLoading={getSubDistrictDetail?.isLoading}
    options={optionsSubDistrict}
    onChange={onChangeSubDistrict}
    filterOption={filterOption}
    placeholder='Select Sub District'
   />

   {selectedSubDistrict && (
    <Alert message='Territory saved' type='success' showIcon />
   )}
  </Card>
 );
}
