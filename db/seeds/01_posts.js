exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del().then(function() {
    // Inserts seed entries
    return knex('posts').insert([

      {
        "artist_name": "Jimmy Neutron",

        "title": "Take Cover",

        "url":'https://www.youtube.com/watch?v=03Uq62mwars',

        "description":"Solid sample. Could make for a cool lofi beat"

      }, {
        "artist_name": "Mario Molino",

        "title": "Beba",

        "url":'https://www.youtube.com/watch?v=03Uq62mwars',

        "description":"Super Mellow. Didn't want to give this one away."

      }
    ]);
  });
};
