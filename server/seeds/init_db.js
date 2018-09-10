exports.seed = async (knex, Promise) => {
  knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "mat",
          email: "mat@gmail.com",
          password: "password1",
          city: "Glasgow",
          postcode: "G3 4EF"
        },
        {
          name: "awet",
          email: "awet@yahoo.com",
          password: "password2",
          city: "Glasgow",
          postcode: "G1 5EF"
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
        {
          address: "Govan",
          store_name: "Tesco",
          deadline: new Date("2018-09-01T03:30:00"),
          status: "Available",
          driver_id: 1
        },
        {
          address: "Parkhead",
          store_name: "Aldi",
          deadline: new Date("2018-08-30T03:30:00"),
          status: "Delivered",
          driver_id: 2
        },
        {
          address: "Parkhead",
          store_name: "Lidl",
          deadline: new Date("2018-08-30T03:30:00"),
          status: "Pending",
          driver_id: 2
        }
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
