
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments',table =>{
    table.increments();
    table.integer('post_id');
    table.string('producer_name');
    table.string('beat_title');
    table.string('beat_description');
    table.text('beat_url');
    table.integer('vote_count');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
