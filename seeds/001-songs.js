
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('songs')
    // .del() <-------- change to truncate
    .truncate() // resets the id (primary key) back to 1
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        { name: "bc I'm happyyyy", duration: 3600, artist: "Ke$ha", favorite: true },
        { name: "have i told u lately that i <3 u", duration: 3600, artist: "Ke$ha", favorite: false },
        { name: "in the jungle the mighty jungle", duration: 3600, artist: "Ke$ha", favorite: true }
      ]);
    });
};

