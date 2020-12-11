import {MigrationInterface, QueryRunner} from "typeorm";

export class danfe1606049423623 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query(`UPDATE "order_item" SET "unitPrice" = ROUND("unitPrice" / (("taxRate" + 100) / 100)) WHERE "unitPriceIncludesTax" = true`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" DROP CONSTRAINT "FK_3a05127e67435b4d2332ded7c9e"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" DROP CONSTRAINT "FK_43ac602f839847fdb91101f30ec"`, undefined);
        await queryRunner.query(`CREATE TABLE "shipping_method_translation" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "languageCode" character varying NOT NULL, "name" character varying NOT NULL DEFAULT '', "description" character varying NOT NULL DEFAULT '', "id" SERIAL NOT NULL, "baseId" integer, CONSTRAINT "PK_b862a1fac1c6e1fd201eadadbcb" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`INSERT INTO "shipping_method_translation" ("languageCode", "name", "description", "baseId") SELECT 'en', "description", '', "id" FROM "shipping_method"`, undefined);
		await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsReviewrating"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsReviewcount"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "unitPriceIncludesTax"`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_method" DROP COLUMN "description"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "customFieldsFavorites"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD "orderLineId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "stockAllocated" integer NOT NULL DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "outOfStockThreshold" integer NOT NULL DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "useGlobalOutOfStockThreshold" boolean NOT NULL DEFAULT true`, undefined);
        await queryRunner.query(`ALTER TABLE "global_settings" ADD "outOfStockThreshold" integer NOT NULL DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP CONSTRAINT "FK_cbb0990e398bf7713aebdd38482"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP CONSTRAINT "REL_cbb0990e398bf7713aebdd3848"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "trackInventory"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "trackInventory" character varying NOT NULL DEFAULT 'INHERIT'`, undefined);
        await queryRunner.query(`ALTER TABLE "global_settings" ALTER COLUMN "trackInventory" SET DEFAULT true`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD CONSTRAINT "FK_cbb0990e398bf7713aebdd38482" FOREIGN KEY ("orderItemId") REFERENCES "order_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD CONSTRAINT "FK_d2c8d5fca981cc820131f81aa83" FOREIGN KEY ("orderLineId") REFERENCES "order_line"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_method_translation" ADD CONSTRAINT "FK_85ec26c71067ebc84adcd98d1a5" FOREIGN KEY ("baseId") REFERENCES "shipping_method"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
		await queryRunner.query(`ALTER TABLE "history_entry" ADD CONSTRAINT "FK_43ac602f839847fdb91101f30ec" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" ADD CONSTRAINT "FK_3a05127e67435b4d2332ded7c9e" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "history_entry" DROP CONSTRAINT "FK_3a05127e67435b4d2332ded7c9e"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" DROP CONSTRAINT "FK_43ac602f839847fdb91101f30ec"`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_method_translation" DROP CONSTRAINT "FK_85ec26c71067ebc84adcd98d1a5"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP CONSTRAINT "FK_d2c8d5fca981cc820131f81aa83"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP CONSTRAINT "FK_cbb0990e398bf7713aebdd38482"`, undefined);
        await queryRunner.query(`ALTER TABLE "global_settings" ALTER COLUMN "trackInventory" SET DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "trackInventory"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "trackInventory" boolean NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD CONSTRAINT "REL_cbb0990e398bf7713aebdd3848" UNIQUE ("orderItemId")`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD CONSTRAINT "FK_cbb0990e398bf7713aebdd38482" FOREIGN KEY ("orderItemId") REFERENCES "order_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "global_settings" DROP COLUMN "outOfStockThreshold"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "useGlobalOutOfStockThreshold"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "outOfStockThreshold"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "stockAllocated"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP COLUMN "orderLineId"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "customFieldsFavorites" boolean`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_method" ADD "description" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "unitPriceIncludesTax" boolean NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsReviewcount" double precision DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsReviewrating" double precision`, undefined);
        await queryRunner.query(`DROP TABLE "shipping_method_translation"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" ADD CONSTRAINT "FK_43ac602f839847fdb91101f30ec" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" ADD CONSTRAINT "FK_3a05127e67435b4d2332ded7c9e" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
   }

}
