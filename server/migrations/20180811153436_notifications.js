exports.up = function(knex, Promise) {
  return knex.schema.createTable("notifications", table => {
    table.increments("notificationsId");
    table.string("note");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("notifications");
};
