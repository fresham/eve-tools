import { Prisma, PrismaClient } from '@prisma/client';
import { create } from 'domain';

const fs = require('node:fs');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('temp/sde.sqlite');

const prisma = new PrismaClient();

const loadShipGroupsQuery = fs.readFileSync('sql/load-ship-groups.sql', 'utf8');
const loadShipsQuery = fs.readFileSync('sql/load-ships.sql', 'utf8');

type ShipGroupRow = {
  groupID: number;
  groupName: string;
};

type ShipRow = {
  typeID: number;
  groupID: number;
  typeName: string;
};

const createShipGroup = async (id: number, name: string) =>
  prisma.shipGroup.create({
    data: { id, name },
  });

const createShip = async (id: number, name: string, shipGroupId: number) =>
  prisma.ship.create({
    data: {
      id,
      name,
      shipGroupId: shipGroupId,
    },
  });

// TODO: convert to #createMany after converting from SQLite
const loadShipGroups = async () => {
  db.each(loadShipGroupsQuery, async (err: Error, result: ShipGroupRow) =>
    createShipGroup(result?.groupID, result?.groupName)
  );
};

// TODO: convert to #createMany after converting from SQLite
const loadShips = async () => {
  db.each(loadShipsQuery, async (err: Error, result: ShipRow) =>
    createShip(result?.typeID, result?.typeName, result?.groupID)
  );
};

const main = async () => {
  await loadShipGroups();
  await loadShips();
};

main()
  .then(async () => {
    db.close();
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    db.close();
    await prisma.$disconnect();
    process.exit(1);
  });

export {};
