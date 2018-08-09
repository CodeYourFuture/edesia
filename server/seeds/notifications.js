exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex("notifications")
        .del()
        .then(function () {
            // Inserts seed entries
            notificationsList = ["pickup from Tesco Merrihil, Pickup from ASDA city centre, Pickup from KPC, Saturday Pret food pickup from Southside"];
            return knex("notifications").insert([{
                notificationsList
            }]);
        });
};