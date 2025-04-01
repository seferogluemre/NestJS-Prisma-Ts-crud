-- CreateEnum
CREATE TYPE "Availibility" AS ENUM ('IN_STORE', 'ONLINE');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "sale" BOOLEAN NOT NULL DEFAULT false,
    "availibility" "Availibility" NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
