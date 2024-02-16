/*
  Warnings:

  - You are about to drop the column `adress` on the `Barbershop` table. All the data in the column will be lost.
  - You are about to drop the column `BarbershopId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the `booking` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Barbershop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barbershopId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_BarbershopId_fkey";

-- DropForeignKey
ALTER TABLE "booking" DROP CONSTRAINT "booking_barbershopId_fkey";

-- DropForeignKey
ALTER TABLE "booking" DROP CONSTRAINT "booking_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "booking" DROP CONSTRAINT "booking_userId_fkey";

-- AlterTable
ALTER TABLE "Barbershop" DROP COLUMN "adress",
ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "BarbershopId",
ADD COLUMN     "barbershopId" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "booking";

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "barbershopId" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "Barbershop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "Barbershop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
