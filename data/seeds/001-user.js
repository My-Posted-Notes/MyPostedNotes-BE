
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'user #1', email:'email_1@hotmail.com'},
        {id: 2, name: 'user #2', email:'email_2@hotmail.com'},
        {id: 3, name: 'user #3', email:'email_3@hotmail.com'}
      ]);
    });
};
