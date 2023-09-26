/*
  Warnings:

  - Added the required column `rating` to the `Ad` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_name" TEXT NOT NULL,
    "product_type" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "about" TEXT NOT NULL,
    "CPU" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "memory" INTEGER NOT NULL,
    "RAM" INTEGER NOT NULL,
    "screen" REAL NOT NULL,
    "screen_type" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Ad" ("CPU", "RAM", "about", "color", "created_at", "id", "memory", "price", "product_name", "product_type", "screen", "screen_type", "updated_at") SELECT "CPU", "RAM", "about", "color", "created_at", "id", "memory", "price", "product_name", "product_type", "screen", "screen_type", "updated_at" FROM "Ad";
DROP TABLE "Ad";
ALTER TABLE "new_Ad" RENAME TO "Ad";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
