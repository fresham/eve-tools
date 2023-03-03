-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "shipGroupId" INTEGER,
    "structureEMResistance" REAL,
    "structureThermalResistance" REAL,
    "structureKineticResistance" REAL,
    "structureExplosiveResistance" REAL,
    "armorEMResistance" REAL,
    "armorThermalResistance" REAL,
    "armorKineticResistance" REAL,
    "armorExplosiveResistance" REAL,
    "shieldEMResistance" REAL,
    "shieldThermalResistance" REAL,
    "shieldKineticResistance" REAL,
    "shieldExplosiveResistance" REAL,
    CONSTRAINT "Ship_shipGroupId_fkey" FOREIGN KEY ("shipGroupId") REFERENCES "ShipGroup" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Ship" ("armorEMResistance", "armorExplosiveResistance", "armorKineticResistance", "armorThermalResistance", "id", "name", "shieldEMResistance", "shieldExplosiveResistance", "shieldKineticResistance", "shieldThermalResistance", "shipGroupId", "structureEMResistance", "structureExplosiveResistance", "structureKineticResistance", "structureThermalResistance") SELECT "armorEMResistance", "armorExplosiveResistance", "armorKineticResistance", "armorThermalResistance", "id", "name", "shieldEMResistance", "shieldExplosiveResistance", "shieldKineticResistance", "shieldThermalResistance", "shipGroupId", "structureEMResistance", "structureExplosiveResistance", "structureKineticResistance", "structureThermalResistance" FROM "Ship";
DROP TABLE "Ship";
ALTER TABLE "new_Ship" RENAME TO "Ship";
CREATE UNIQUE INDEX "Ship_name_key" ON "Ship"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
