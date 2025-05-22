import { getLatestProducts } from '@/lib/actions/product.actions';
import ProductList from '@/components/shared/product/product-list';

export default async function Homepage() {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Featured Products" limit={6} />
    </>
  );
}
