-- CreateTable
CREATE TABLE "notallow_ads" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "groupId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "notallow_ads_id_key" ON "notallow_ads"("id");

-- RedefineIndex
DROP INDEX "notallow_commands.id_unique";
CREATE UNIQUE INDEX "notallow_commands_id_key" ON "notallow_commands"("id");
