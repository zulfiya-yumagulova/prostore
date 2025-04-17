import CartTable from './cart-table';
import { getMyCart } from '@/lib/actions/cart.actions';

export const metaData = {
  title: 'Shopping Cart',
};

const CartPage = async () => {
  const cart = await getMyCart();
  return (
    <div>
      <CartTable cart={cart} />
    </div>
  );
};

export default CartPage;
