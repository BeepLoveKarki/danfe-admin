import {MigrationInterface, QueryRunner} from "typeorm";

export class danfe1602502265881 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "customer_channels_channel" ("customerId" integer NOT NULL, "channelId" integer NOT NULL, CONSTRAINT "PK_27e2fa538c020889d32a0a784e8" PRIMARY KEY ("customerId", "channelId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a842c9fe8cd4c8ff31402d172d" ON "customer_channels_channel" ("customerId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_dc9f69207a8867f83b0fd257e3" ON "customer_channels_channel" ("channelId") `, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsProductrecommendationsenabled"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsReviewrating"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsReviewcount"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "customFieldsBulkdiscountenabled"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "customFieldsUnit"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "customFieldsSales"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "customFieldsFavorites"`, undefined);
        await queryRunner.query(`ALTER TABLE "fulfillment" ADD "state" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "session" ADD "activeChannelId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "session" ADD CONSTRAINT "FK_eb87ef1e234444728138302263b" FOREIGN KEY ("activeChannelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "FK_a842c9fe8cd4c8ff31402d172d7" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "FK_dc9f69207a8867f83b0fd257e30" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "FK_dc9f69207a8867f83b0fd257e30"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "FK_a842c9fe8cd4c8ff31402d172d7"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" DROP CONSTRAINT "FK_eb87ef1e234444728138302263b"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "activeChannelId"`, undefined);
        await queryRunner.query(`ALTER TABLE "fulfillment" DROP COLUMN "state"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "customFieldsFavorites" boolean`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "customFieldsSales" integer DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "customFieldsUnit" character varying(255) DEFAULT 'piece'`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "customFieldsBulkdiscountenabled" boolean`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsReviewcount" double precision DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsReviewrating" double precision`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsProductrecommendationsenabled" boolean`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_dc9f69207a8867f83b0fd257e3"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_a842c9fe8cd4c8ff31402d172d"`, undefined);
        await queryRunner.query(`DROP TABLE "customer_channels_channel"`, undefined);
		await queryRunner.query(`INSERT INTO "order_channels_channel" ("orderId", "channelId") SELECT id, 1 FROM "order"`,undefined);
   }

}
