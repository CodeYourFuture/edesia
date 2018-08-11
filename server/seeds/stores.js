
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stores').del()
    .then(function () {
      // Inserts seed entries
      return knex('stores').insert([
        { area: "Marhall", city: "Glasgow", address:"g4 5vb"},
        { area: "Springburn", city:"Glasgow", address:"g20 7ac"}
      ]);
    });
};
