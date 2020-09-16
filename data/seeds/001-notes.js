
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('note').del()
    .then(function () {
      // Inserts seed entries
      return knex('note').insert([
        {id: 1, title: 'rowValue1', content:""},
        {id: 2, title: 'rowValue2', content:""},
        {id: 3, title: 'rowValue3', content:""}
      ]);
    });
};
