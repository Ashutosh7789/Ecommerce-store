import { Container } from "@/components/ui/container";

import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";


export const revalidate = 0;
const Home = async () => {

  const billboard = await getBillboard("b851b787-41c9-4d5d-be3c-52dc7ddc7918");
  const products = await getProducts({isFeatured: true});

  return (
    <Container className="space-y-10 pb-10"> 
      <Billboard data={billboard}/>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList 
          title="Featured Products" 
          items={products}
        />
      </div>
    </Container>
  )
};

export default Home;
