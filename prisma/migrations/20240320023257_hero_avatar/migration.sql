/*
  Warnings:

  - You are about to drop the column `cover` on the `Hero` table. All the data in the column will be lost.
  - You are about to drop the column `coverOrigin` on the `Hero` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hero" DROP COLUMN "cover",
DROP COLUMN "coverOrigin",
ADD COLUMN     "avatarOrigin" TEXT,
ADD COLUMN     "photos" TEXT[];
