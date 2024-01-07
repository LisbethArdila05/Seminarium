/*
  Warnings:

  - Added the required column `tamano` to the `planta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planta" ADD COLUMN     "tamano" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ventas" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" INTEGER NOT NULL,
    "tamanoPlanta" INTEGER NOT NULL,
    "plantaId" INTEGER NOT NULL,

    CONSTRAINT "ventas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "plantaId" INTEGER NOT NULL,

    CONSTRAINT "stock_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ventas" ADD CONSTRAINT "ventas_plantaId_fkey" FOREIGN KEY ("plantaId") REFERENCES "planta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock" ADD CONSTRAINT "stock_plantaId_fkey" FOREIGN KEY ("plantaId") REFERENCES "planta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
