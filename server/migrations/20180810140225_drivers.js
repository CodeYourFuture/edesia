exports.up = function(knex, Promise) {
  return knex.schema.createTable("drivers", table => {
    table.increments("driver_id");
    table.string("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("drivers");
};
