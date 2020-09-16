const knex = require('knex');
const dbEngine = process.env.ENV || 'development';
const knexConfig = require('../knexfile.js')[dbEngine];
const db = knex(knexConfig);

const getNotes =()=>{
    return db("note");
}

const getNote = (id) =>{
  if(id) {
    return db('note')
        .where({id})
        .first();
  } else {
      return db('note');
  }
}

const addNote = (note) =>{
    return db
          .insert(note)
          .into('note');
}

const deleteNote = (id) =>{
  if(id) {
    return db('note')
        .where({id})
        .del();
  } else {
      return db('note');
  }
}

const updateNote = (id, newNote) =>{
  if(id) {
    return db('note')
          .update(newNote)
          .where({id})
  } else {
      return db('note');
  }
}


module.exports = {
  getNotes,
  getNote,
  addNote,
  deleteNote,
  updateNote
};