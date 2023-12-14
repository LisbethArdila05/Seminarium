-- CreateTable
CREATE TABLE "planta" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" INTEGER NOT NULL,

    CONSTRAINT "planta_pkey" PRIMARY KEY ("id")
);
