exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("drivers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("drivers").insert([
        { driver_id: 14, name: "Bad Khaled" },
        { driver_id: 22, name: "Nate" },
        { driver_id: 29, name: "Maj" }
      ]);
    });
};
