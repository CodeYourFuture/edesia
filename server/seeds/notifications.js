exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex("notifications")
        .del()
        .then(function () {
            // Inserts seed entries
            notificationsList = [{
                    notificationsId: "pickup from Tesco Merrihil"
                },
                {
                    notificationsId: "Pickup from ASDA city centre"
                },
                {
                    notificationsId: "Pickup from KPC"
                },
                {
                    notificationsId: "Saturday Pret food pickup from Southside"
                },
            ];
            return knex("notifications").insert([{
                notificationsList
            }]);
        });
};