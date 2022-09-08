/*
  Warnings:

  - You are about to drop the `_MessageToUser` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `receiverId` on table `messages` required. This step will fail if there are existing NULL values in that column.
  - Made the column `senderId` on table `messages` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_MessageToUser" DROP CONSTRAINT "_MessageToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_MessageToUser" DROP CONSTRAINT "_MessageToUser_B_fkey";

-- AlterTable
ALTER TABLE "messages" ALTER COLUMN "receiverId" SET NOT NULL,
ALTER COLUMN "senderId" SET NOT NULL;

-- DropTable
DROP TABLE "_MessageToUser";

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
