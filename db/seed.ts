import { PrismaClient } from '@prisma/client';
import dummyData from './dummy-data';

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: dummyData.products });
  console.log('Database seeded successefully!');
}

main();
