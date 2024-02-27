/*
  Warnings:

  - You are about to drop the column `data` on the `calendario` table. All the data in the column will be lost.
  - Added the required column `mes` to the `Calendario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `calendario` DROP COLUMN `data`,
    ADD COLUMN `mes` VARCHAR(191) NOT NULL;
