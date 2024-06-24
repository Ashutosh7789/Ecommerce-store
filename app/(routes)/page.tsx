import { Container } from "@/components/ui/container";

import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";


export const revalidate = 0;
const Home = async () => {

  const billboard = await getBillboard("8a93a764-c760-4434-9b70-04519a39f6ea");
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
