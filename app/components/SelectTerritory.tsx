import { Skeleton, Select } from "antd";

type SelectTerritoryProps = {
 isLoading: boolean;
 filterOption: any;
 onChange?: any;
 options: any;
 type: string;
 placeholder: string;
};

export default function SelectTerritory({
 isLoading,
 options,
 onChange,
 filterOption,
 type,
 placeholder,
}: SelectTerritoryProps) {
 return (
  <div>
   {isLoading && <Skeleton.Input block active={isLoading} />}
   {options.length > 0 && (
    <Select
     showSearch
     placeholder={placeholder}
     optionFilterProp='children'
     onChange={onChange}
     filterOption={filterOption}
     loading={isLoading}
     options={options}
     style={{ width: "100%", marginBottom: 20 }}
     size='middle'
    />
   )}
  </div>
 );
}
