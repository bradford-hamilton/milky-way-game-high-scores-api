exports.up = function (knex) {
  return knex.schema.createTable('user_scores', (table) => {
    table.increments();
    table.string('user_name').notNullable()
    table.integer('score').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user_scores');
};
