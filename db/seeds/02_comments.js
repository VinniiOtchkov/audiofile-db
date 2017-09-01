exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del().then(function() {
    // Inserts seed entries
    return knex('comments').insert([

      {
        "post_id":1,

        "producer_name": "DJ Premier",

        "beat_title": "NY State of Mind",

        "beat_description":"Made a boom bap joint out of this one. Enjoy",

        "beat_url":"https://www.youtube.com/watch?v=5MXi1-zYIkc",

        "vote_count":0

      }, {
        "post_id":2,

        "producer_name": "Pro T",

        "beat_title": "King of NY",

        "beat_description":"Went in a trap direction on this one.",

        "beat_url":"https://www.youtube.com/watch?v=o5aoD2Hcsnw",

        "vote_count":0



      },
      {
       "post_id":1,

       "producer_name": "Cool Kid",

       "beat_title": "Walking Down the Street",

       "beat_description":"Went crazy.",

       "beat_url":"https://www.youtube.com/watch?v=1nzj4sToRaU",

       "vote_count":0

     },
    ]);
  });
};
