import { Resend } from 'resend';
import { SENDER_EMAIL, APP_NAME } from '@/lib/constans';
import { Order } from '@/types';
import dotenv from 'dotenv';
dotenv.config();

import PurchaseReceiptEmail from './purchase-receipt';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const sendPurchaseReceipt = async ({ order }: { order: Order }) => {
  await resend.emails.send({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: order.user.email,
    subject: `Order confirmation ${order.id}`,
    react: <PurchaseReceiptEmail order={order} />,
  });
};
