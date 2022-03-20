import {MigrationInterface, QueryRunner} from "typeorm";

export class backfillExistingProfiles1647745561015 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      -- REAGAN
      UPDATE profiles
      SET favorite_toy = 'Tennis Ball', favorite_treat = 'Peanut Butter', bio = 'My name is Reagan and I am a dog'
      WHERE id = 'd1f3fbb1-729e-4cb3-a7b8-29c7d0d3d521';

      -- MARCO
      UPDATE profiles
      SET favorite_toy = 'Rope' , favorite_treat = 'Milkbones' , bio = 'My name is Marco and I am a dog'
      WHERE id = '02fb953a-893a-48e6-b489-1d3c7fdfb7b6';

      -- WYATT
      UPDATE profiles
      SET favorite_toy = 'Tennis Ball', favorite_treat = 'table scraps', bio = 'My name is Wyatt and I am a dog'
      WHERE id = 'e8bc5b75-529b-4e3f-87a2-9467339d64ef';

      -- MAGNUS
      UPDATE profiles
      SET favorite_toy = 'Stuffed Animal', favorite_treat = 'Beggin Strips', bio = 'My name is Magnus and I am a dog'
      WHERE id = '8fbf70d8-93c0-400e-98b4-e75bbc8afaef';

      -- PEARL
      UPDATE profiles
      SET favorite_toy = 'Rope', favorite_treat = '🦴', bio = 'My name is Pearl and I am a dog'
      WHERE id = '278bc90c-e0a5-4a86-9d58-875442879d7d';

      -- SCOTCH
      UPDATE profiles
      SET favorite_toy = 'Socks', favorite_treat = 'Peanut Butter', bio = 'My name is Scotch and I am a dog'
      WHERE id = '98b85389-8be9-425e-8951-0b24fd46e917';

      -- BARTLEBY
      UPDATE profiles
      SET favorite_toy = '🎾', favorite_treat = '🌯', bio = 'My name is Bartleby and I am a dog'
      WHERE id = 'b8f5406b-a24e-409b-b219-e296704b604f';

      -- BAXTER
      UPDATE profiles
      SET favorite_toy = 'squeeky toy', favorite_treat = 'broccoli', bio = 'My name is Baxter and I am a dog'
      WHERE id = 'e011a2ac-2dfd-45e5-b32a-b8a6d0651633';

      -- FIDO
      UPDATE profiles
      SET favorite_toy = 'squeeky toy', favorite_treat = 'ham', bio = 'My name is Fido and I am a dog'
      WHERE id = '63e60b94-dcf8-41c2-b987-017fb7beef8d';
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
