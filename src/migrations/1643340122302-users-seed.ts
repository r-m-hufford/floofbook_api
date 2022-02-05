import {MigrationInterface, QueryRunner} from "typeorm";

export class usersSeed1643340122302 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query{
        //     `INSERT INTO users (first_name)
        //     VALUES
        //     ('scotch'),
        //     ('fern'),
        //     ('reagan'),
        //     ('marco')
        //     `
        // }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
