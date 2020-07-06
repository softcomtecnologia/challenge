import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateItem1594056388736 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'items',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'user_id',
                  type: 'uuid',
                },
                {
                  name: 'name',
                  type: 'varchar',
                },
                {
                  name: 'description',
                  type: 'varchar',
                },
                {
                  name: 'price',
                  type: 'decimal',
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                }
              ],
            }),
          );
      
          await queryRunner.createForeignKey('items', new TableForeignKey({
            name: 'ItemUser',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('items', 'ItemUser');
        await queryRunner.dropTable('items');
    }

}
