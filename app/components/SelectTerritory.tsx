"use client";
import { Col, Row, Select } from "antd";
import {
 useKabupatenData,
 useKecamatanData,
 useProvincesData,
} from "../services/territory.hooks";
import {
 KabupatenType,
 KecamatanType,
 ProvinceType,
} from "../types/TerritoriesTypes";
import { useEffect, useState } from "react";

export default function SelectTerritory() {
 const [selectedProvince, setSelectedProvince] = useState("");
 const [selectedRegency, setSelectedRegency] = useState("");

 const { data: provinsi, isLoading } = useProvincesData();
 const { data: kabupaten, isLoading: isLoadingKabupaten } = useKabupatenData();
 const {
  data: kecamatan,
  isLoading: isLoadingKecamatan,
  refetch,
 } = useKecamatanData(selectedRegency);

 const filterOption = (
  input: string,
  option?: { label: string; value: string }
 ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

 const onChangeProvince = (value: string) => {
  setSelectedProvince(value);
 };

 const onSearchProvince = (value: string) => {
  console.log("search:", value);
 };

 const onChangeRegency = (value: string) => {
  setSelectedRegency(value);
 };

 const onSearchRegency = (value: string) => {
  console.log("search:", value);
 };

 const optionsProvinsi = Array.isArray(provinsi)
  ? provinsi?.map((item: ProvinceType) => {
     return {
      value: item?.kodeprovinsi as string,
      label: item?.namaprovinsi as string,
     };
    })
  : [];

 const optionsKabupaten = Array.isArray(kabupaten)
  ? kabupaten
     .filter(
      (kabupaten: KabupatenType) => kabupaten?.kodeprovinsi === selectedProvince
     )
     .map((item) => ({
      value: item?.namakabupaten,
      label: item?.namakabupaten,
     }))
  : [];

 const optionsKecamatan = Array.isArray(kecamatan?.datas)
  ? kecamatan?.datas?.map((item: KecamatanType) => {
     return {
      value: item?.KELURAHAN?.toString() ?? "",
      label: item?.KELURAHAN as string,
     };
    })
  : [];

 useEffect(() => {
  if (selectedRegency) {
   refetch();
  }
 }, [refetch, selectedRegency]);

 return (
  <div>
   <p className='bg-red-500 text-red-500'>patar siahaan</p>
   <Row>
    <Col>
     <Select
      showSearch
      placeholder='Select province'
      optionFilterProp='children'
      onChange={onChangeProvince}
      onSearch={onSearchProvince}
      filterOption={filterOption}
      loading={isLoading}
      options={optionsProvinsi}
     />
    </Col>
   </Row>

   {optionsKabupaten.length > 0 && (
    <Row>
     <Col>
      <Select
       showSearch
       placeholder='Select regency'
       optionFilterProp='children'
       onChange={onChangeRegency}
       onSearch={onSearchRegency}
       filterOption={filterOption}
       loading={isLoadingKabupaten}
       options={optionsKabupaten}
      />
     </Col>
    </Row>
   )}

   {optionsKecamatan.length > 1 && (
    <Row>
     <Col>
      <Select
       showSearch
       placeholder='Select subdistrict'
       optionFilterProp='children'
       filterOption={filterOption}
       loading={isLoadingKecamatan}
       options={optionsKecamatan}
      />
     </Col>
    </Row>
   )}
  </div>
 );
}
