exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl){
        tbl.increments('id');
        tbl.string('name',255).notNullable();
        tbl.string('email',255).notNullable().unique();
        tbl.timestamps(true, true);
        // tbl.timestamp('created_at').defaultTo(knex.fn.now());
        // tbl.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};