/*
  Warnings:

  - Added the required column `fechaVenta` to the `ventas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ventas" ADD COLUMN     "fechaVenta" TIMESTAMP(3) NOT NULL;
