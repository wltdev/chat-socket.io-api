/*
  Warnings:

  - You are about to drop the column `userId` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `users` on the `messages` table. All the data in the column will be lost.
  - Added the required column `receiverId` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_userId_fkey";

-- AlterTable
ALTER TABLE "messages" DROP COLUMN "userId",
DROP COLUMN "users",
ADD COLUMN     "receiverId" TEXT NOT NULL,
ADD COLUMN     "senderId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
