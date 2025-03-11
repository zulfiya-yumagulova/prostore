import { PrismaClient } from '@prisma/client';
import dummyData from './dummy-data';

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.product.createMany({ data: dummyData.products });
  await prisma.user.createMany({ data: dummyData.users });

  console.log('Database seeded successefully!');
}

main();
