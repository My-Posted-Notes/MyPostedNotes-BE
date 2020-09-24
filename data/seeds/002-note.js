
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, title: 'title_1', content: '', user_id: 2},
        {id: 2, title: 'title_2', content: '', user_id: 1},
        {id: 3, title: 'title_3', content: '', user_id: 2}
      ]);
    });
};
