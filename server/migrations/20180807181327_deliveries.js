exports.up = function(knex, Promise) {
  return knex.schema.createTable("deliveries", table => {
    table.increments("delivery_id");
    table.string("address");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("deliveries");
};
