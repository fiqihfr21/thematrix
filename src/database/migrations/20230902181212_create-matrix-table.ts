import { Knex } from 'knex';

const tableName = 'matrix';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id');
    table.specificType('m', 'integer ARRAY');
    table.integer('n');
    table.string('result');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
