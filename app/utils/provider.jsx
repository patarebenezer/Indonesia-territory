"use client";
import React from "react";
import {
 dehydrate,
 Hydrate,
 QueryClient,
 QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }) {
 const [queryClient] = React.useState(
  () =>
   new QueryClient({
    defaultOptions: {
     queries: {
      refetchOnWindowFocus: false,
     },
    },
   })
 );

 const dehydratedState = dehydrate(queryClient);

 return (
  <QueryClientProvider client={queryClient}>
   <Hydrate state={dehydratedState}>
    <ToastContainer
     style={{
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingBottom: "30px",
     }}
     position='bottom-center'
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
    />
    {children}
   </Hydrate>
   <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
 );
}
