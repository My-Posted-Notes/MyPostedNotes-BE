exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', function(tbl){
        tbl.increments('id');
        tbl.string('title',255).notNullable();
        tbl.string('content',255);
        tbl.integer('user_id').notNullable();
        tbl.timestamp('created_at').defaultTo(knex.fn.now());
        tbl.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('notes');
};
