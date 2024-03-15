import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('uploads', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.binary('image_data');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('uploads');

}

