
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts',table =>{
    table.increments();
    table.string('artist_name');
    table.string('title');
    table.text('url');
    table.string('description');
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
