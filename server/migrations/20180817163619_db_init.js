exports.up = async (knex, Promise) => {
  await knex.schema.createTable("users", table => {
    table.increments("user_id");
    table.string("name");
    table.string("email").notNullable();
    table.string("city").defaultTo("Glasgow");
    table.string("postcode").notNullable();
    table.string("password").notNullable();
  });

  await knex.schema.createTable("stores", table => {
    table.increments("store_id");
    table.string("area");
    table.string("city");
    table.string("address");
  });

  await knex.schema.createTable("drivers", table => {
    table.increments("driver_id");
    table.string("name");
  });

  await knex.schema.createTable("deliveries", table => {
    table.increments("delivery_id");
    table.string("address");
    table.integer("driver_id");
    table
      .foreign("driver_id")
      .references("driver_id")
      .inTable("drivers");
  });

  await knex.schema.createTable("items", table => {
    table.increments("item_id");
    table.integer("quantity");
    table.string("type");
  });

  await knex.schema.createTable("contacts", table => {
    table.increments("contact_id");
    table.string("name");
    table.string("phone");
  });

  await knex.schema.createTable("status", table => {
    table.string("status");
  });
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("stores");
  await knex.schema.dropTableIfExists("deliveries");
  await knex.schema.dropTableIfExists("drivers");
  await knex.schema.dropTableIfExists("items");
  await knex.schema.dropTableIfExists("contacts");
  await knex.schema.dropTableIfExists("status");
};
