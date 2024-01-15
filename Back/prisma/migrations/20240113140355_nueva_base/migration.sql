-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mail` VARCHAR(191) NOT NULL,
    `user` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_mail_key`(`mail`),
    UNIQUE INDEX `users_user_key`(`user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plantas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `precioU` INTEGER NOT NULL,
    `PrecioM` INTEGER NOT NULL,

    UNIQUE INDEX `plantas_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `venta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `NombrePlant` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `precio` INTEGER NOT NULL,
    `tamanoPlanta` VARCHAR(191) NOT NULL,
    `fechaVenta` DATETIME(3) NOT NULL,
    `plantaId` INTEGER NOT NULL,

    UNIQUE INDEX `venta_tamanoPlanta_key`(`tamanoPlanta`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stocks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidad` INTEGER NOT NULL,
    `tamanoPlan` VARCHAR(191) NOT NULL,
    `plantaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `venta` ADD CONSTRAINT `venta_plantaId_fkey` FOREIGN KEY (`plantaId`) REFERENCES `plantas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stocks` ADD CONSTRAINT `stocks_plantaId_fkey` FOREIGN KEY (`plantaId`) REFERENCES `plantas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stocks` ADD CONSTRAINT `stocks_tamanoPlan_fkey` FOREIGN KEY (`tamanoPlan`) REFERENCES `venta`(`tamanoPlanta`) ON DELETE RESTRICT ON UPDATE CASCADE;
