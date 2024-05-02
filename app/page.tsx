import { Suspense } from "react";
import LandingPage from "./modules/LandingPage";
import Provider from "@/app/utils/provider";

export default function Home() {
 return (
  <Provider>
   <Suspense fallback='Loading..'>
    <LandingPage />
   </Suspense>
  </Provider>
 );
}
