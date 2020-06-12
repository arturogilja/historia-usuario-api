import {MigrationInterface, QueryRunner} from "typeorm";

export class productsAndImages1591674235829 implements MigrationInterface {
    name = 'productsAndImages1591674235829'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `products` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` text NOT NULL, `price` decimal(10,2) NOT NULL DEFAULT 0, `imageId` int NULL, UNIQUE INDEX `REL_e8c788030f2c88cbccf6965328` (`imageId`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `images` (`id` int NOT NULL AUTO_INCREMENT, `smallUrl` varchar(255) NOT NULL, `mediumUrl` varchar(255) NOT NULL, `bigUrl` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `FK_e8c788030f2c88cbccf6965328c` FOREIGN KEY (`imageId`) REFERENCES `images`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `products` DROP FOREIGN KEY `FK_e8c788030f2c88cbccf6965328c`", undefined);
        await queryRunner.query("DROP TABLE `images`", undefined);
        await queryRunner.query("DROP INDEX `REL_e8c788030f2c88cbccf6965328` ON `products`", undefined);
        await queryRunner.query("DROP TABLE `products`", undefined);
    }

}
