import {MigrationInterface, QueryRunner} from "typeorm";

export class usersSeed1643340122302 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query (
           `INSERT INTO public.profiles (name, email, breed, password, created_at, modified_at, password_changed_at)
            VALUES
            ('Scotch', 'ryan@rmhufford.com', 'Mini Schnauzer / Jack Russel', 'password', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            ('Fern', 'ryan@rmhufford.com', 'Mutt', 'password', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            ('Reagan', NULL, 'Rhodesian Ridgeback', 'password', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            ('Marco', NULL, 'Rhodesian Ridgeback', 'password', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            ('Wyatt', NULL, 'Yellow Lab', 'password', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
