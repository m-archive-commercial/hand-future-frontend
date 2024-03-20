-- CreateEnum
CREATE TYPE "TypographyLayoutType" AS ENUM ('typography_plain', 'typography_horizontal_bg', 'typography_horizontal', 'typography_vertical');

-- CreateTable
CREATE TABLE "Work" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "heroId" TEXT NOT NULL,
    "layout" "TypographyLayoutType" NOT NULL DEFAULT 'typography_plain',
    "title" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "connections" TEXT[],
    "source" JSONB NOT NULL,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;
