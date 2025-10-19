/*
  Warnings:

  - Added the required column `dateBooking` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bookings` ADD COLUMN `dateBooking` DATETIME(3) NOT NULL;
