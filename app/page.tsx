import Collection from "@/components/home/Collection";
import ProductListing from "@/components/home/ProductListing";
import Wrapper from "@/components/layout/Wrapper";

export default function Home() {
  return (
   <Wrapper>
    <Collection/>
    <ProductListing/>
    {/* <div/> */}
   </Wrapper>
  );
}
