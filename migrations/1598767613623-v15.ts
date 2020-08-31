import {MigrationInterface, QueryRunner} from "typeorm";

export class v151598767613623 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_6fb55742e13e8082954d0436dc"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d8791f444a8bf23fe4c1bc020c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_9a5a6a556f75c4ac7bfdd03410"`, undefined);
        await queryRunner.query(`CREATE TABLE "order_channels_channel" ("orderId" integer NOT NULL, "channelId" integer NOT NULL, CONSTRAINT "PK_39853134b20afe9dfb25de18292" PRIMARY KEY ("orderId", "channelId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_0d8e5c204480204a60e151e485" ON "order_channels_channel" ("orderId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d0d16db872499e83b15999f8c7" ON "order_channels_channel" ("channelId") `, undefined);
        await queryRunner.query(`ALTER TABLE "search_index_item" ADD "collectionSlugs" text NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_review" ALTER COLUMN "response" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "product_review" ALTER COLUMN "responseCreatedAt" SET DEFAULT null`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_6fb55742e13e8082954d0436dc" ON "search_index_item" ("productName") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d8791f444a8bf23fe4c1bc020c" ON "search_index_item" ("productVariantName") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9a5a6a556f75c4ac7bfdd03410" ON "search_index_item" ("description") `, undefined);
        await queryRunner.query(`ALTER TABLE "order_channels_channel" ADD CONSTRAINT "FK_0d8e5c204480204a60e151e4853" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "order_channels_channel" ADD CONSTRAINT "FK_d0d16db872499e83b15999f8c7a" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "order_channels_channel" DROP CONSTRAINT "FK_d0d16db872499e83b15999f8c7a"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_channels_channel" DROP CONSTRAINT "FK_0d8e5c204480204a60e151e4853"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_9a5a6a556f75c4ac7bfdd03410"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d8791f444a8bf23fe4c1bc020c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_6fb55742e13e8082954d0436dc"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_review" ALTER COLUMN "responseCreatedAt" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "product_review" ALTER COLUMN "response" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "search_index_item" DROP COLUMN "collectionSlugs"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d0d16db872499e83b15999f8c7"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_0d8e5c204480204a60e151e485"`, undefined);
        await queryRunner.query(`DROP TABLE "order_channels_channel"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9a5a6a556f75c4ac7bfdd03410" ON "search_index_item" ("description") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d8791f444a8bf23fe4c1bc020c" ON "search_index_item" ("productVariantName") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_6fb55742e13e8082954d0436dc" ON "search_index_item" ("productName") `, undefined);
		await queryRunner.query(`INSERT INTO "order_channels_channel" (orderId, channelId) SELECT id, 1 FROM "order"`,undefined);
   }

}
