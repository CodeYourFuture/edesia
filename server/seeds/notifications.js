exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("notifications")
    .del()
    .then(function() {
      // Inserts seed entries

      return knex("notifications").insert([
        {
          note: "Pickup from Tesco Merrihil"
        },
        {
          note: "Pickup from ASDA city centre"
        },
        {
          note: "Pickup from KPC"
        },
        {
          note: "Saturday Pret food pickup from Southside"
        }
      ]);
    });
};
