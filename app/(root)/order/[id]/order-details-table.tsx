import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { formatDateTime, formatId } from '@/lib/utils';
import { Order } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import Image from 'next/image';

const OrderDetailsTable = ({ order }: { order: Order }) => {
  const {
    id,
    shippingAddress,
    orderItem,
    itemsPrice,
    shippingPrice,
    paymentMethod,
    taxPrice,
    totalPrice,
    isDelivered,
    isPaid,
    paidAt,
    deliveredAt,
  } = order;

  orderItem?.map((item) => console.log(item));
  return (
    <>
      <h1 className="p-y4 text-2xl">Order {formatId(id)}</h1>
      <div className="grid md:grid:cols-3 md: gap-5">
        <div className="col-span-2 space-4-y overflow-x-auto">
          <Card>
            <CardContent className="p-4 gap-4">
              <h2 className="text-xl pb-4">Payment Method</h2>
              <p>{paymentMethod}</p>
              {isPaid ? (
                <Badge variant="secondary">
                  Paid at {formatDateTime(paidAt!).dateTime}
                </Badge>
              ) : (
                <Badge variant="destructive">Not Paid</Badge>
              )}
            </CardContent>
          </Card>

          <Card className="my-3">
            <CardContent className="p-4 gap-4">
              <h2 className="text-xl pb-4">ShippingAddress</h2>
              <p>{shippingAddress.fullName}</p>
              <p>
                {shippingAddress.streetAddress} {shippingAddress.city}
              </p>
              <p>
                {shippingAddress.postCode} {shippingAddress.country}
              </p>

              {isDelivered ? (
                <Badge variant="secondary">
                  Paid at {formatDateTime(deliveredAt!).dateTime}
                </Badge>
              ) : (
                <Badge variant="destructive">Not Delivered</Badge>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 gap-4">
              <h2 className="text-2xl pb-4">Order Details</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.isArray(orderItem) &&
                    orderItem.map((item) => (
                      <TableRow key={item.slug}>
                        <TableCell>
                          <Link
                            href={`/product/{item.slug}`}
                            className="flex items-center"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                            />
                            <span className="px-2">{item.name}</span>
                          </Link>
                        </TableCell>
                        <TableCell>
                          <span className="px-2">{item.qty}</span>
                        </TableCell>
                        <TableCell className="text-right">
                          ${item.price}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsTable;
