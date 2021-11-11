-- RedefineIndex
DROP INDEX "notallow_ads_id_key";
CREATE UNIQUE INDEX "notallow_ads.id_unique" ON "notallow_ads"("id");

-- RedefineIndex
DROP INDEX "notallow_commands_id_key";
CREATE UNIQUE INDEX "notallow_commands.id_unique" ON "notallow_commands"("id");
