-- CreateTable
CREATE TABLE "notallow_commands" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "groupId" TEXT NOT NULL,
    "command" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "notallow_commands.id_unique" ON "notallow_commands"("id");
