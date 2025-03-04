import dummyData from '@/db/dummy-data';
import ProductList from '@/components/shared/product/product-list';

export default function Homepage() {
  return (
    <>
      <ProductList
        data={dummyData.products}
        title="Featured Products"
        limit={4}
      />
    </>
  );
}
