
exports.up = function(knex, Promise) {
    return knex.schema.createTable("stores", table => {
        table.increments("store_id");
        table.string("area");
        table.string("city");
        table.string("address")
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("stores") 
};
