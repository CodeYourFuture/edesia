exports.seed = async (knex, Promise) => {
  // Deletes ALL existing entries
  await knex("drivers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("drivers").insert([
        { driver_id: 14, name: "Bad Khaled" },
        { driver_id: 22, name: "Nate" },
        { driver_id: 29, name: "Maj" }
      ]);
    });

  knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "mat",
          city: "Glasgow",
          postcode: "G20 3CC",
          email: "mat@gmail.com",
          password: "password1"
        },
        {
          name: "awet",
          city: "Edinburgh",
          postcode: "E2 5FA",
          email: "awet@yahoo.com",
          password: "password2"
        }
      ]);
    });

  await knex("stores")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("stores").insert([
        { area: "Marhall", city: "Glasgow", address: "g4 5vb" },
        { area: "Springburn", city: "Glasgow", address: "g20 7ac" }
      ]);
    });

  await knex("deliveries")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("deliveries").insert([
        { address: "Govan" },
        { address: "Parkhead" }
      ]);
    });
  await knex("status")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("status").insert([{ status: "OK" }]);
    });
  await knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        { quantity: 200, type: "meat" },
        { quantity: 300, type: "vegitables" }
      ]);
    });
  return knex("contacts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contacts").insert([
        { name: "Maj", phone: "073....." },
        { name: "Nasir", phone: "074...." }
      ]);
    });
};
