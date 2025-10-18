/*
  Warnings:

  - You are about to alter the column `status` on the `bookings` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(1))`.
  - The values [Client,Provider] on the enum `Users_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `bookings` MODIFY `status` ENUM('CONFIRMED', 'CANCELED', 'COMPLETED') NOT NULL DEFAULT 'CONFIRMED';

-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('CLIENT', 'PROVIDER') NOT NULL;
