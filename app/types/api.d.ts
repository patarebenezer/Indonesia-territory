export interface ApiResponseError {
 status: number;
 message: string;
}

export interface ApiResponseSuccess<TData extends undefined | object> {
 status: number;
 message: string;
 data: TData;
 length: number;
}
