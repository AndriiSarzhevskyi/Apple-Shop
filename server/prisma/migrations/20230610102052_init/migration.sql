-- CreateTable
CREATE TABLE "Ad" (
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
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "adId" INTEGER NOT NULL,
    "fileName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    CONSTRAINT "Photo_adId_fkey" FOREIGN KEY ("adId") REFERENCES "Ad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
