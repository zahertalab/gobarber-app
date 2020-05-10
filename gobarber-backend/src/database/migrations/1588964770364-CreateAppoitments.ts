import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export default class CreateAppoitments1588964770364 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appoitments',
        columns: [{
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4',
        }, {
          name: 'provider',
          type: 'varchar',
          isNullable: false,
        }, {
          name: 'date',
          type: 'timestamp with time zone',
          isNullable: false,
        }],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appoitments');
  }
}
