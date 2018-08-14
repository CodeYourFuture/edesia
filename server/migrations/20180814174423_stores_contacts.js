exports.up = function(knex, Promise) {
  return knex.schema.createTable("stores_contacts", table => {
    table.increments("storesId");
    table.string("contactId");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("stores_contacts");
};
