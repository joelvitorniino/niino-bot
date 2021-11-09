/*
  Warnings:

  - A unique constraint covering the columns `[groupId]` on the table `notallow_commands` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "notallow_commands.groupId_unique" ON "notallow_commands"("groupId");
