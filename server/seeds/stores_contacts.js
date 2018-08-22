exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("stores_contacts")
    .del()
    .then(function() {
      // Inserts seed entries

      return knex("stores_contacts").insert([
        {
          contactId: "Tesco MarryHill"
        },
        {
          contactId: "Tesco Springburn"
        },
        {
          contactId: "Tesco City center "
        },
        {
          contactId: "Tesco Drumchapel"
        }
      ]);
    });
};
