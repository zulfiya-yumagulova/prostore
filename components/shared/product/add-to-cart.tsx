'use client';

import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { CartItem } from '@/types';
import { Button } from '@/components/ui/button';
import { ToastAction } from '@radix-ui/react-toast';
import { Plus } from 'lucide-react';
import { addItemToCart } from '@/lib/actions/cart.actions';

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    const response = await addItemToCart(item);

    if (!response.success) {
      toast({
        variant: 'destructive',
        description: response.message,
      });
      return;
    }

    // Handle success add to the cart
    toast({
      description: `${item.name} added to the cart`,
      action: (
        <ToastAction
          className="bg-primary text-white hover:bg-gray-800"
          altText="Go To Cart"
          onClick={() => router.push('/cart')}
        >
          Go To Cart
        </ToastAction>
      ),
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus /> Add To Cart
    </Button>
  );
};

export default AddToCart;
