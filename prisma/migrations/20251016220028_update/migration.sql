/*
  Warnings:

  - The primary key for the `bookings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `providers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `services` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `bookings` DROP FOREIGN KEY `Bookings_clientId_fkey`;

-- DropForeignKey
ALTER TABLE `bookings` DROP FOREIGN KEY `Bookings_providerId_fkey`;

-- DropForeignKey
ALTER TABLE `bookings` DROP FOREIGN KEY `Bookings_serviceId_fkey`;

-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `Client_id_fkey`;

-- DropForeignKey
ALTER TABLE `providers` DROP FOREIGN KEY `Providers_id_fkey`;

-- DropForeignKey
ALTER TABLE `services` DROP FOREIGN KEY `Services_providerId_fkey`;

-- AlterTable
ALTER TABLE `bookings` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `clientId` VARCHAR(191) NOT NULL,
    MODIFY `serviceId` VARCHAR(191) NOT NULL,
    MODIFY `providerId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `client` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `providers` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `services` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `providerId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_id_fkey` FOREIGN KEY (`id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Providers` ADD CONSTRAINT `Providers_id_fkey` FOREIGN KEY (`id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Services` ADD CONSTRAINT `Services_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `Providers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bookings` ADD CONSTRAINT `Bookings_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bookings` ADD CONSTRAINT `Bookings_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bookings` ADD CONSTRAINT `Bookings_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `Providers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
