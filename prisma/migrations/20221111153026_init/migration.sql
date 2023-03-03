-- CreateTable
CREATE TABLE "Ship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "shipGroupId" INTEGER,
    "structureEMResistance" REAL NOT NULL,
    "structureThermalResistance" REAL NOT NULL,
    "structureKineticResistance" REAL NOT NULL,
    "structureExplosiveResistance" REAL NOT NULL,
    "armorEMResistance" REAL NOT NULL,
    "armorThermalResistance" REAL NOT NULL,
    "armorKineticResistance" REAL NOT NULL,
    "armorExplosiveResistance" REAL NOT NULL,
    "shieldEMResistance" REAL NOT NULL,
    "shieldThermalResistance" REAL NOT NULL,
    "shieldKineticResistance" REAL NOT NULL,
    "shieldExplosiveResistance" REAL NOT NULL,
    CONSTRAINT "Ship_shipGroupId_fkey" FOREIGN KEY ("shipGroupId") REFERENCES "ShipGroup" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ShipGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Ship_name_key" ON "Ship"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ShipGroup_name_key" ON "ShipGroup"("name");
