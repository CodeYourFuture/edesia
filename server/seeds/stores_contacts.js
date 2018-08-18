exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("stores_contacts")
    .del()
    .then(function() {
      // Inserts seed entries

      return knex("stores_contacts").insert([
        {
          contactId: " 0001"
        },
        {
          contactId: " 0002"
        },
        {
          contactId: " 0003"
        },
        {
          contactId: " 0004"
        }
      ]);
    });
};
