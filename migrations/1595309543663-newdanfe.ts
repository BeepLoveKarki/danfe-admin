import {MigrationInterface, QueryRunner} from "typeorm";

export class newdanfe1595309543663 implements MigrationInterface {
	
   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            'CREATE TABLE `authentication_method` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `identifier` varchar(255) NULL, `passwordHash` varchar(255) NULL, `verificationToken` varchar(255) NULL, `passwordResetToken` varchar(255) NULL, `identifierChangeToken` varchar(255) NULL, `pendingIdentifier` varchar(255) NULL, `strategy` varchar(255) NULL, `externalIdentifier` varchar(255) NULL, `metadata` text NULL, `id` int NOT NULL AUTO_INCREMENT, `type` varchar(255) NOT NULL, `userId` int NULL, INDEX `IDX_a23445b2c942d8dfcae15b8de2` (`type`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
            undefined,
        );
        await queryRunner.query(
            `INSERT INTO authentication_method (identifier, passwordHash, verificationToken, passwordResetToken, identifierChangeToken, pendingIdentifier, type, userId)
                                    SELECT identifier, passwordHash, verificationToken, passwordResetToken, identifierChangeToken, pendingIdentifier, 'NativeAuthenticationMethod', id FROM user`,
            undefined,
        );
        await queryRunner.query('ALTER TABLE `user` DROP COLUMN `passwordHash`', undefined);
        await queryRunner.query('ALTER TABLE `user` DROP COLUMN `verificationToken`', undefined);
        await queryRunner.query('ALTER TABLE `user` DROP COLUMN `passwordResetToken`', undefined);
        await queryRunner.query('ALTER TABLE `user` DROP COLUMN `identifierChangeToken`', undefined);
        await queryRunner.query('ALTER TABLE `user` DROP COLUMN `pendingIdentifier`', undefined);
        await queryRunner.query('ALTER TABLE `administrator` ADD `deletedAt` datetime NULL', undefined);
        await queryRunner.query(
            'ALTER TABLE `session` ADD `authenticationStrategy` varchar(255) NULL',
            undefined,
        );

        // Other TypeORM-generated migration queries not related to the `user`, `session`, `administrator` or `authentication_method` tables
        // should go here
		
		await queryRunner.query("DROP INDEX `IDX_6fb55742e13e8082954d0436dc`", undefined);
        await queryRunner.query("DROP INDEX `IDX_d8791f444a8bf23fe4c1bc020c`", undefined);
        await queryRunner.query("DROP INDEX `IDX_9a5a6a556f75c4ac7bfdd03410`", undefined);
        await queryRunner.query("ALTER TABLE `product_review` ALTER COLUMN `response` SET DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `product_review` ALTER COLUMN `responseCreatedAt` SET DEFAULT NULL", undefined);
        await queryRunner.query("CREATE INDEX `IDX_6fb55742e13e8082954d0436dc` ON `search_index_item` (`productName`) ", undefined);
        await queryRunner.query("CREATE INDEX `IDX_d8791f444a8bf23fe4c1bc020c` ON `search_index_item` (`productVariantName`) ", undefined);
        await queryRunner.query("CREATE INDEX `IDX_9a5a6a556f75c4ac7bfdd03410` ON `search_index_item` (`description`) ", undefined);
		
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE `session` DROP COLUMN `authenticationStrategy`', undefined);
        await queryRunner.query('ALTER TABLE `administrator` DROP COLUMN `deletedAt`', undefined);
        await queryRunner.query(
            'ALTER TABLE `user` ADD `pendingIdentifier` varchar(255) NULL DEFAULT \'NULL\'',
            undefined,
        );
        await queryRunner.query(
            'ALTER TABLE `user` ADD `identifierChangeToken` varchar(255) NULL DEFAULT \'NULL\'',
            undefined,
        );
        await queryRunner.query(
            'ALTER TABLE `user` ADD `passwordResetToken` varchar(255) NULL DEFAULT \'NULL\'',
            undefined,
        );
        await queryRunner.query(
            'ALTER TABLE `user` ADD `verificationToken` varchar(255) NULL DEFAULT \'NULL\'',
            undefined,
        );
        await queryRunner.query('ALTER TABLE `user` ADD `passwordHash` varchar(255) NOT NULL', undefined);
        await queryRunner.query(
            `INSERT INTO user (passwordHash, verificationToken, passwordResetToken, identifierChangeToken, pendingIdentifier)
                        SELECT passwordHash, verificationToken, passwordResetToken, identifierChangeToken, pendingIdentifier FROM authentication_method
                        WHERE user.id = authentication_method.userId`,
            undefined,
        );
        await queryRunner.query('DROP TABLE `authentication_method`', undefined);

        // Other TypeORM-generated migration queries not related to the `user`, `session`, `administrator` or `authentication_method` tables
        // should go here
		
		await queryRunner.query("DROP INDEX `IDX_9a5a6a556f75c4ac7bfdd03410`", undefined);
        await queryRunner.query("DROP INDEX `IDX_d8791f444a8bf23fe4c1bc020c`", undefined);
        await queryRunner.query("DROP INDEX `IDX_6fb55742e13e8082954d0436dc`", undefined);
        await queryRunner.query("ALTER TABLE `product_review` ALTER COLUMN `responseCreatedAt` DROP DEFAULT", undefined);
        await queryRunner.query("ALTER TABLE `product_review` ALTER COLUMN `response` DROP DEFAULT", undefined);
        await queryRunner.query("CREATE INDEX `IDX_9a5a6a556f75c4ac7bfdd03410` ON `search_index_item` (`description`) ", undefined);
        await queryRunner.query("CREATE INDEX `IDX_d8791f444a8bf23fe4c1bc020c` ON `search_index_item` (`productVariantName`) ", undefined);
        await queryRunner.query("CREATE INDEX `IDX_6fb55742e13e8082954d0436dc` ON `search_index_item` (`productName`) ", undefined);
		
    }

}
