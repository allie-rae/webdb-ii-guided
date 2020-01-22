
exports.up = function(knex) {
    // REMEMBER THE RETURN
    return knex.schema.createTable('songs', tbl => {
        // id column, integer, primary key, auto-increment
        tbl.increments();
        tbl.string('name', 255).index();
        tbl.integer('duration');
        tbl.string('artist').index();
        tbl.boolean('favorite').defaultTo(false);
        //most relational database management systems (rdbms) store 1 for true and 0 for false
        tbl.timestamps(true, true); // adds created_at and updated_at columns
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('songs');
};
