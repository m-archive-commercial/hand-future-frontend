/*
  Warnings:

  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cities` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cover` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isHero` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `UserRelation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserRelation" DROP CONSTRAINT "UserRelation_fromId_fkey";

-- DropForeignKey
ALTER TABLE "UserRelation" DROP CONSTRAINT "UserRelation_toId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
DROP COLUMN "cities",
DROP COLUMN "cover",
DROP COLUMN "isHero",
DROP COLUMN "name",
DROP COLUMN "title";

-- DropTable
DROP TABLE "UserRelation";

-- CreateTable
CREATE TABLE "Hero" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "avatar" TEXT,
    "cover" TEXT,
    "title" TEXT,
    "cities" TEXT,
    "isHero" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeroRelation" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fromId" TEXT NOT NULL,
    "toId" TEXT NOT NULL,

    CONSTRAINT "HeroRelation_pkey" PRIMARY KEY ("fromId","toId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hero_userId_key" ON "Hero"("userId");

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroRelation" ADD CONSTRAINT "HeroRelation_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroRelation" ADD CONSTRAINT "HeroRelation_toId_fkey" FOREIGN KEY ("toId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
