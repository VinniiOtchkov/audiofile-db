exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del().then(function() {
    // Inserts seed entries
    return knex('posts').insert([

      {
        "artist_name": "Joe Chambers",

        "title": "Mind Rain",

        "url":'https://www.youtube.com/watch?v=4_GskCCFBnI',

        "description":"Really dope piano sample. Would like to see what someone can do with around 1 minute"

      }, {
        "artist_name": "Mario Molino",

        "title": "Beba",

        "url":'https://www.youtube.com/watch?v=03Uq62mwars',

        "description":"Super Mellow. Didn't want to give this one away."

      }
    ]);
  });
};
