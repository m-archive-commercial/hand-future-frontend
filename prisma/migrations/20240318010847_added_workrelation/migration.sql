-- CreateTable
CREATE TABLE "WorkRelation" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fromId" TEXT NOT NULL,
    "toId" TEXT NOT NULL,

    CONSTRAINT "WorkRelation_pkey" PRIMARY KEY ("fromId","toId")
);

-- AddForeignKey
ALTER TABLE "WorkRelation" ADD CONSTRAINT "WorkRelation_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkRelation" ADD CONSTRAINT "WorkRelation_toId_fkey" FOREIGN KEY ("toId") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
