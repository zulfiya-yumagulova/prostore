import { z } from 'zod';
import {
  insertProductsSchema,
  insertCartSchema,
  cartItemSchema,
} from '@/lib/validators';

export type Product = z.infer<typeof insertProductsSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
