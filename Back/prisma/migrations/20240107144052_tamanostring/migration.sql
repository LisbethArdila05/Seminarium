/*
  Warnings:

  - A unique constraint covering the columns `[id,tamano]` on the table `planta` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tamanoPlan` to the `stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "stock" DROP CONSTRAINT "stock_plantaId_fkey";

-- DropForeignKey
ALTER TABLE "ventas" DROP CONSTRAINT "ventas_plantaId_fkey";

-- AlterTable
ALTER TABLE "planta" ALTER COLUMN "tamano" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "stock" ADD COLUMN     "tamanoPlan" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ventas" ALTER COLUMN "tamanoPlanta" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "planta_id_tamano_key" ON "planta"("id", "tamano");

-- AddForeignKey
ALTER TABLE "ventas" ADD CONSTRAINT "ventas_plantaId_tamanoPlanta_fkey" FOREIGN KEY ("plantaId", "tamanoPlanta") REFERENCES "planta"("id", "tamano") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock" ADD CONSTRAINT "stock_plantaId_tamanoPlan_fkey" FOREIGN KEY ("plantaId", "tamanoPlan") REFERENCES "planta"("id", "tamano") ON DELETE RESTRICT ON UPDATE CASCADE;
