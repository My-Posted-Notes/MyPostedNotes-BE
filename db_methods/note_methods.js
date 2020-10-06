// const knex = require('knex');
// const dbEngine = process.env.NODE_ENV || 'development';
// const knexConfig = require('../knexfile.js')[dbEngine];
const db = require("../data/db-config.js");

const getNotes =()=>{
    return db("notes");
}

const getNote = (id) =>{
  if(id) {
    return db('notes')
        .where({id})
        .first();
  } else {
      return db('notes');
  }
}

const addNote = (note) =>{
    return db
          .insert(note)
          .into('notes');
}

const deleteNote = (id) =>{
  if(id) {
    return db('notes')
        .where({id})
        .del();
  } else {
      return db('notes');
  }
}

const updateNote = (id, newNote) =>{
  if(id) {
    return db('notes')
          .update(newNote)
          .where({id})
  } else {
      return db('notes');
  }
}


module.exports = {
  getNotes,
  getNote,
  addNote,
  deleteNote,
  updateNote
};