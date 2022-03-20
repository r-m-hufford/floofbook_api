import {MigrationInterface, QueryRunner} from "typeorm";

export class addBioTreatAndToy1647743787652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          ALTER TABLE profiles
          ADD bio VARCHAR(250),
          ADD favorite_treat VARCHAR(50),
          ADD favorite_toy VARCHAR(50);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
