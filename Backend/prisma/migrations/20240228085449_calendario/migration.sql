/*
  Warnings:

  - You are about to drop the column `mes` on the `calendario` table. All the data in the column will be lost.
  - You are about to drop the column `municipio` on the `calendario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `calendario` DROP COLUMN `mes`,
    DROP COLUMN `municipio`;
