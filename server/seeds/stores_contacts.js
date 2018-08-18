exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("stores_contacts")
    .del()
    .then(function() {
      // Inserts seed entries

      return knex("stores_contacts").insert([
        {
          storesId: 1,
          contactId: "Tesco MarryHill"
        },
        {
          storesId,
          contactId: "Tesco Springburn"
        },
        {
          storesId,
          contactId: "Tesco City center "
        },
        {
          storesId,
          contactId: "Tesco Drumchapel"
        }
      ]);
    });
};
